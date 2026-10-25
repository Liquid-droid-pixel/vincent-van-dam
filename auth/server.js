// Discord-login voor www.vandamvincent.nl. Geen afhankelijkheden. Start met: node auth/server.js
// Toegang: het account met ID config.allowedUserId, of (optioneel) leden van de Discord-server config.requiredGuildId.
// De privé-pagina vraagt bovendien de rol config.privateRoleId. Rol en lidmaatschap worden LIVE bij Discord opgevraagd
// (maximaal elke rolControleSeconden), zodat een afgenomen rol meteen effect heeft. Alles wordt server-side gecontroleerd.
const http = require("http");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const CONFIG_PAD = process.env.AUTH_CONFIG || path.join(__dirname, "config.json");
const cfg = JSON.parse(fs.readFileSync(CONFIG_PAD, "utf8"));
const PORT = Number(process.env.AUTH_PORT || cfg.port || 8017);
const DISCORD_API = process.env.DISCORD_API || "https://discord.com/api";
const DISCORD_AUTH = process.env.DISCORD_AUTH || "https://discord.com/oauth2/authorize";
const SESSIES_PAD = process.env.AUTH_SESSIONS || path.join(__dirname, "sessions.json");
const SESSIE_SECONDEN = (cfg.sessionDagen || 7) * 86400;
const SERVER_ID = String(cfg.requiredGuildId || "").trim();      // optioneel: Discord-server waarvan je lid moet zijn
const ROL_ID = String(cfg.privateRoleId || "").trim();           // optioneel: rol die nodig is voor de privé-pagina
const LIVE_MS = Number(cfg.rolControleSeconden || 20) * 1000;    // hoe vaak rol/lidmaatschap opnieuw bij Discord wordt gecontroleerd
const PRIVE_DIR = path.join(__dirname, "private");
const COOKIE_DOMEIN = String(cfg.cookieDomain || "").replace(/^\./, "");   // bijv. vandamvincent.nl: sessie geldt dan ook op subdomeinen (hyperdashboard.vandamvincent.nl, ...)
const HOOFD = String(cfg.hoofdAdres || "https://www.vandamvincent.nl").replace(/\/$/, "");
const APPS = cfg.apps || {};   // per app: { alleenEigenaar: true } => alleen jouw eigen account (naast de rol)
const ingesteld = () => !!(cfg.clientId && cfg.clientSecret && cfg.sessionSecret && cfg.allowedUserId);
const log = (...a) => { const regel = new Date().toISOString() + " " + a.join(" "); console.log(regel); try { fs.appendFileSync(path.join(__dirname, "auth.log"), regel + "\n"); } catch {} };

/* ---------- hulpfuncties ---------- */
const b64u = b => Buffer.from(b).toString("base64url");
const hmac = s => crypto.createHmac("sha256", cfg.sessionSecret).update(s).digest("base64url");
const gelijk = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); };
const cookies = req => Object.fromEntries((req.headers.cookie || "").split(";").map(c => c.trim().split(/=(.*)/s).slice(0, 2)).filter(c => c[0]));
const https = req => (req.headers["x-forwarded-proto"] || "") === "https";
function zetCookie(req, res, naam, waarde, { pad = "/", maxAge, domein } = {}) {
  const c = [`${naam}=${waarde}`, `Path=${pad}`, "HttpOnly", "SameSite=Lax"];
  if (domein) c.push(`Domain=${domein}`);
  if (maxAge !== undefined) c.push(`Max-Age=${maxAge}`);
  if (https(req)) c.push("Secure");
  res.setHeader("Set-Cookie", [].concat(res.getHeader("Set-Cookie") || [], c.join("; ")));
}
const terug = (res, code) => { res.writeHead(302, { Location: "/?login=" + code, "Cache-Control": "no-store" }); res.end(); };
const json = (res, status, data) => { res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }); res.end(JSON.stringify(data)); };
const isEigenaar = rec => String(rec.id) === String(cfg.allowedUserId);

/* ---------- sessies (server-side, met Discord-token; nooit naar de browser gestuurd) ---------- */
let sessies = {};
try { sessies = JSON.parse(fs.readFileSync(SESSIES_PAD, "utf8")); } catch {}
let bewaarTimer = null;
const schrijfSessies = () => { try { fs.writeFileSync(SESSIES_PAD + ".tmp", JSON.stringify(sessies)); fs.renameSync(SESSIES_PAD + ".tmp", SESSIES_PAD); } catch (e) { log("Sessies opslaan mislukt:", e.message); } };
const bewaar = direct => {   // direct = meteen wegschrijven (inloggen/uitloggen); anders gebundeld
  clearTimeout(bewaarTimer);
  if (direct) return schrijfSessies();
  bewaarTimer = setTimeout(schrijfSessies, 400);
};
const opruimen = () => { const nu = Date.now() / 1000; let n = 0; for (const [k, v] of Object.entries(sessies)) if (!v.exp || v.exp < nu) { delete sessies[k]; n++; } if (n) bewaar(); };
opruimen(); setInterval(opruimen, 3600 * 1000).unref();
const verwijderSessie = sid => { if (sessies[sid]) { delete sessies[sid]; bewaar(true); } };

const maakCookie = (sid, exp) => { const p = b64u(JSON.stringify({ sid, exp })); return p + "." + hmac(p); };
function leesCookie(token) {
  if (!token || !token.includes(".")) return null;
  const [p, sig] = token.split(".");
  if (!gelijk(sig, hmac(p))) return null;
  try { const d = JSON.parse(Buffer.from(p, "base64url").toString("utf8")); return d.sid && d.exp > Date.now() / 1000 ? d : null; } catch { return null; }
}

/* ---------- Discord ---------- */
async function tokenAanvraag(params) {
  const t = await fetch(DISCORD_API + "/oauth2/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ client_id: cfg.clientId, client_secret: cfg.clientSecret, ...params }) });
  if (!t.ok) { let d = ""; try { d = (await t.text()).slice(0, 160); } catch {} const e = new Error("token " + t.status + " " + d); e.status = t.status; throw e; }
  return t.json();
}
function bewaarTokens(rec, j) { rec.at = j.access_token; if (j.refresh_token) rec.rt = j.refresh_token; rec.atExp = Math.floor(Date.now() / 1000) + Number(j.expires_in || 604800); }
async function ververs(rec) {
  if (!rec.rt) { const e = new Error("geen refresh-token"); e.ingetrokken = true; throw e; }
  try { bewaarTokens(rec, await tokenAanvraag({ grant_type: "refresh_token", refresh_token: rec.rt })); bewaar(); }
  catch (e) { if (e.status >= 400 && e.status < 500) e.ingetrokken = true; throw e; }
}
/** Vraagt bij Discord of het account nog lid is van de server en welke rollen het heeft. */
async function ledenInfo(rec) {
  const haal = url => fetch(url, { headers: { Authorization: "Bearer " + rec.at } });
  const url = ROL_ID ? `${DISCORD_API}/users/@me/guilds/${SERVER_ID}/member` : `${DISCORD_API}/users/@me/guilds`;
  let r = await haal(url);
  if (r.status === 401) { await ververs(rec); r = await haal(url); }
  if (r.status === 401) { const e = new Error("token ingetrokken"); e.ingetrokken = true; throw e; }
  if (ROL_ID) {
    if (r.ok) { const m = await r.json(); return { lid: true, rollen: Array.isArray(m.roles) ? m.roles.map(String) : [] }; }
    if (r.status === 404 || r.status === 403) return { lid: false, rollen: [], status: r.status };
    throw new Error("Discord-status " + r.status);
  }
  if (!r.ok) throw new Error("Discord-status " + r.status);
  return { lid: (await r.json()).some(x => String(x.id) === SERVER_ID), rollen: [] };
}
/** Controleert lidmaatschap en rol live (met korte cache) en werkt het sessie-record bij. */
const bezig = new Map();
async function controleer(rec, sid) {
  if (!SERVER_ID) return;
  if (Date.now() - (rec.gecontroleerd || 0) < LIVE_MS) return;
  if (bezig.has(sid)) return bezig.get(sid);
  const p = (async () => {
    const voorheen = { lid: rec.lid, prive: rec.prive };
    try {
      if ((rec.atExp || 0) - Date.now() / 1000 < 60) await ververs(rec);
      const info = await ledenInfo(rec);
      rec.lid = info.lid; rec.prive = !!(ROL_ID && info.lid && info.rollen.includes(ROL_ID)); rec.gecontroleerd = Date.now(); rec.fouten = 0;
    } catch (e) {
      rec.fouten = (rec.fouten || 0) + 1;
      if (e.ingetrokken) { rec.lid = false; rec.prive = false; rec.gecontroleerd = Date.now(); log("Discord-toegang ingetrokken voor", rec.naam, "(" + e.message + ")"); }
      else {
        // tijdelijke storing: korte tijd de laatste bekende status houden, daarna geen toegang (veilig falen)
        rec.gecontroleerd = Date.now() - LIVE_MS + 5000;
        if (rec.fouten >= 6) { rec.prive = false; if (!isEigenaar(rec)) rec.lid = false; }
        log("Controle bij Discord mislukt voor", rec.naam, "|", e.message, "| poging", rec.fouten);
      }
    }
    if (voorheen.prive !== rec.prive) log("Privé-toegang van", rec.naam, "is nu:", rec.prive ? "aan" : "UIT (rol afgenomen of geen lid meer)");
    if (voorheen.lid !== rec.lid) log("Lidmaatschap van", rec.naam, "is nu:", rec.lid ? "ja" : "NEE");
    bewaar();
  })().finally(() => bezig.delete(sid));
  bezig.set(sid, p); return p;
}
/** Haalt de actuele sessie op (of null als je niet (meer) bent ingelogd). */
async function haalSessie(req) {
  const d = leesCookie(cookies(req).dc_sess); if (!d) return null;
  const rec = sessies[d.sid]; if (!rec) return null;
  if (!rec.exp || rec.exp < Date.now() / 1000) { verwijderSessie(d.sid); return null; }
  await controleer(rec, d.sid);
  if (!isEigenaar(rec) && !rec.lid) { verwijderSessie(d.sid); return null; }
  return rec;
}

/* ---------- inloggen ---------- */
async function callback(req, res, url) {
  const c = cookies(req);
  zetCookie(req, res, "dc_state", "", { pad: "/auth", maxAge: 0 });
  const state = url.searchParams.get("state"), code = url.searchParams.get("code");
  if (url.searchParams.get("error")) { log("Discord gaf een fout terug:", url.searchParams.get("error"), url.searchParams.get("error_description") || ""); return terug(res, "geannuleerd"); }
  if (!code || !state || !c.dc_state || !gelijk(state, c.dc_state)) return terug(res, "fout");
  try {
    const rec = {};
    bewaarTokens(rec, await tokenAanvraag({ grant_type: "authorization_code", code, redirect_uri: cfg.redirectUri }));
    const u = await fetch(DISCORD_API + "/users/@me", { headers: { Authorization: "Bearer " + rec.at } });
    if (!u.ok) throw new Error("user " + u.status);
    const user = await u.json();
    Object.assign(rec, { id: String(user.id), naam: user.global_name || user.username, avatar: user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64` : null });
    rec.lid = false; rec.prive = false;
    if (SERVER_ID) {
      try { const info = await ledenInfo(rec); rec.lid = info.lid; rec.prive = !!(ROL_ID && info.lid && info.rollen.includes(ROL_ID)); log("Controle bij inloggen:", user.username, "| lid van server:", info.lid ? "ja" : "nee", ROL_ID ? "| aantal rollen: " + info.rollen.length + " | heeft vereiste rol: " + (rec.prive ? "ja" : "nee") : ""); }
      catch (e) { log("Controle bij inloggen MISLUKT:", user.username, "|", e.message); }
    }
    rec.gecontroleerd = Date.now();
    if (!isEigenaar(rec) && !rec.lid) { log("Login geweigerd voor Discord-ID", user.id); return terug(res, "geweigerd"); }
    const nu = Math.floor(Date.now() / 1000), sid = crypto.randomBytes(24).toString("hex");
    rec.exp = nu + SESSIE_SECONDEN; rec.iat = nu;
    sessies[sid] = rec; bewaar(true);
    if (COOKIE_DOMEIN && https(req)) zetCookie(req, res, "dc_sess", "", { maxAge: 0 });   // oude cookie zonder domein weghalen
    zetCookie(req, res, "dc_sess", maakCookie(sid, rec.exp), { maxAge: SESSIE_SECONDEN, domein: COOKIE_DOMEIN && https(req) ? COOKIE_DOMEIN : undefined });
    log("Ingelogd:", user.username, "| eigenaar:", isEigenaar(rec) ? "ja" : "nee", "| privé-toegang:", rec.prive ? "ja" : "nee");
    return terug(res, "ok");
  } catch (e) { log("Login mislukt:", e.message); return terug(res, "fout"); }
}

/* ---------- privé-pagina (en bestanden ernaast) ---------- */
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".txt": "text/plain; charset=utf-8" };
async function serveerPrive(req, res, url) {
  const s = await haalSessie(req);
  if (!s) return terug(res, "inloggen-nodig");
  if (!s.prive) return terug(res, "geen-rang");
  const rel = decodeURIComponent(url.pathname).replace(/^\/prive\/?/, "") || "index.html";
  const bestand = path.join(PRIVE_DIR, path.normalize(rel));
  if (!bestand.startsWith(PRIVE_DIR + path.sep)) { res.writeHead(403); return res.end("Geen toegang"); }
  fs.readFile(bestand, (err, data) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("Niet gevonden"); }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(bestand).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow", "X-Content-Type-Options": "nosniff" });
    res.end(data);
  });
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  try {
    if (url.pathname === "/auth/login" && req.method === "GET") {
      if (!ingesteld()) return terug(res, "niet-ingesteld");
      const state = crypto.randomBytes(16).toString("hex");
      zetCookie(req, res, "dc_state", state, { pad: "/auth", maxAge: 600 });
      const q = new URLSearchParams({ client_id: cfg.clientId, response_type: "code", redirect_uri: cfg.redirectUri, scope: SERVER_ID ? ("identify guilds" + (ROL_ID ? " guilds.members.read" : "")) : "identify", state });
      res.writeHead(302, { Location: DISCORD_AUTH + "?" + q, "Cache-Control": "no-store" }); return res.end();
    }
    if ((url.pathname === "/prive" || url.pathname.startsWith("/prive/")) && req.method === "GET") return await serveerPrive(req, res, url);
    if (url.pathname === "/auth/check" && req.method === "GET") {   // Caddy vraagt hier of dit verzoek naar een privé-app mag
      const app = APPS[url.searchParams.get("app") || ""];
      if (!app) { res.writeHead(404); return res.end(); }
      const s = await haalSessie(req);
      const weg = code => { res.writeHead(302, { Location: HOOFD + "/?login=" + code, "Cache-Control": "no-store" }); res.end(); };
      if (!s) return weg("inloggen-nodig");
      if (!s.prive) return weg("geen-rang");
      if (app.alleenEigenaar && !isEigenaar(s)) return weg("geen-toegang");
      res.writeHead(204, { "Cache-Control": "no-store" }); return res.end();
    }
    if (url.pathname === "/auth/callback" && req.method === "GET") return await callback(req, res, url);
    if (url.pathname === "/auth/me" && req.method === "GET") {
      const s = await haalSessie(req);
      return json(res, 200, s ? { ingelogd: true, naam: s.naam, avatar: s.avatar, prive: !!s.prive } : { ingelogd: false });
    }
    if (url.pathname === "/auth/logout" && req.method === "POST") {
      const d = leesCookie(cookies(req).dc_sess);
      if (d && sessies[d.sid]) {
        const rec = sessies[d.sid]; verwijderSessie(d.sid);
        fetch(DISCORD_API + "/oauth2/token/revoke", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ client_id: cfg.clientId, client_secret: cfg.clientSecret, token: rec.at || "", token_type_hint: "access_token" }) }).catch(() => {});
      }
      zetCookie(req, res, "dc_sess", "", { maxAge: 0 });
      if (COOKIE_DOMEIN) zetCookie(req, res, "dc_sess", "", { maxAge: 0, domein: COOKIE_DOMEIN });
      return json(res, 200, { ingelogd: false });
    }
    json(res, 404, { fout: "niet gevonden" });
  } catch (e) { log("Fout:", e.message); json(res, 500, { fout: "serverfout" }); }
}).listen(PORT, "127.0.0.1", () => log(`Discord-login draait op http://127.0.0.1:${PORT}` + (ingesteld() ? "" : "  (nog niet ingesteld: vul clientId en clientSecret in auth/config.json)")));

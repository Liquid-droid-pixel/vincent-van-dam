(function(){
"use strict";
const S = window.SITE;
const $ = (s, r=document) => r.querySelector(s) || document.createElement("div"); // ontbrekend element = onschadelijk dummy-element (subpagina's)
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const escRaw = t => String(t ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const TALEN = window.I18N ? I18N.talen.map(t => t[0]) : ["nl"];
const LANG = (() => { try{ const l = localStorage.getItem("taal"); if(TALEN.includes(l)) return l; }catch(e){} return "nl"; })();
const T = t => window.I18N ? I18N.translate(t, LANG) : t;
const esc = t => escRaw(T(String(t ?? "")));
document.documentElement.lang = LANG;
if(LANG !== "nl") document.querySelectorAll(".taalnoot").forEach(el => el.hidden = false);

/* vaste HTML-teksten vertalen (alleen als de taal niet Nederlands is) */
if(LANG !== "nl"){
  const skip = el => el.closest("script, style, [translate=no]");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = []; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n => {
    if(!n.parentElement || skip(n.parentElement)) return;
    const v = n.nodeValue, key = v.replace(/\s+/g, " ").trim(); if(!key) return;
    const vt = T(key); if(vt !== key) n.nodeValue = v.match(/^\s*/)[0] + vt + v.match(/\s*$/)[0];
  });
  document.querySelectorAll("[placeholder],[aria-label],[title],[alt]").forEach(el => {
    if(skip(el)) return;
    ["placeholder","aria-label","title","alt"].forEach(at => { if(el.hasAttribute(at)) el.setAttribute(at, T(el.getAttribute(at))); });
  });
  const md = document.querySelector('meta[name=description]'); if(md) md.content = T(md.content);
}

/* ---------- iconen ---------- */
const P = {
  code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  terminal:'<path d="m4 17 6-6-6-6M12 19h8"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
  palette:'<circle cx="12" cy="12" r="10"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="10" r="1"/><path d="M12 22c-1.5 0-2-1.2-1.4-2.4.5-1 0-2.1-1.1-2.1H7"/>',
  bot:'<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 14v1M15 14v1M2 13v3M22 13v3"/>',
  gamepad:'<path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="5"/>',
  plug:'<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5"/>',
  git:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path d="M6 8.5v7M18 11.5c0 4-6 3-11 5"/>',
  github:'<path d="M9 19c-4.5 1.5-4.5-2-6.5-2.5M15.5 21v-3.4a3 3 0 0 0-.8-2.3c2.8-.3 5.800-1.400 5.800-6.300a4.900 4.900 0 0 0-1.300-3.400 4.600 4.600 0 0 0-.1-3.400s-1.100-.3-3.500 1.300a12 12 0 0 0-6.200 0C6.900 2.600 5.800 2.900 5.800 2.900a4.600 4.600 0 0 0-.1 3.400A4.900 4.900 0 0 0 4.400 9.700c0 4.900 3 6 5.800 6.300a3 3 0 0 0-.8 2.300V21"/>',
  editor:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 9-3 3 3 3M14 9l3 3-3 3"/>',
  discord:'<path d="M8 8c2.500-1 5.500-1 8 0M7.500 17c3 1.500 6 1.500 9 0M9 17l-1 2c-2-.5-3.500-1.500-4.500-3 0-4 1.500-8 3-10 1-.5 2-.8 3-1l.7 1.500M15 17l1 2c2-.5 3.500-1.500 4.500-3 0-4-1.500-8-3-10-1-.5-2-.8-3-1L13.800 6"/><circle cx="9.500" cy="12.500" r="1"/><circle cx="14.500" cy="12.500" r="1"/>',
  linux:'<path d="M12 3c-2.500 0-3 2.500-3 5 0 2-2 3.500-2.500 6-.4 2 .5 3.500 2 4l-1 3h9l-1-3c1.500-.5 2.400-2 2-4-.5-2.500-2.500-4-2.500-6 0-2.500-.5-5-3-5z"/>',
  cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.500 8 8 9 4.500-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  car:'<path d="M5 17H3v-5l2-5h14l2 5v5h-2M5 12h14"/><circle cx="7.500" cy="17" r="2"/><circle cx="16.500" cy="17" r="2"/>',
  music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  plane:'<path d="M17.800 19.200 16 11l3.500-3.500C21 6 21.500 4 21 3c-1-.5-3 0-4.500 1.500L13 8 4.800 6.200 3 8l6 3-2 3-3-.5L3 15l4 2 2 4 1.500-1-.5-3 3-2 3 6z"/>',
  sparkles:'<path d="M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800zM19 16l.8 2.200L22 19l-2.200.8L19 22l-.8-2.200L16 19l2.200-.8z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 8 9 6 9-6"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v6M8 7.500v.01M12 17v-6M12 13c0-3 5-3 5 0v4"/>',
  instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.500 6.500h.01"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.900 4.900l1.400 1.400M17.700 17.700l1.400 1.400M2 12h2M20 12h2M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400"/>',
  moon:'<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  left:'<path d="m15 6-6 6 6 6"/>', right:'<path d="m9 6 6 6-6 6"/>',
  award:'<circle cx="12" cy="9" r="6"/><path d="m8.500 14-1.500 8 5-3 5 3-1.500-8"/>',
  book:'<path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2zM4 19V5"/>',
  graduation:'<path d="m2 9 10-5 10 5-10 5zM6 11v5c3 2.500 9 2.500 12 0v-5"/>',
  flag:'<path d="M5 22V4M5 4h13l-2 4 2 4H5"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 13h18"/>',
  rocket:'<path d="M5 15c-1.500 1-2 4-2 6 2 0 5-.5 6-2M12 15l-3-3a20 20 0 0 1 12-9c0 5-3 10-9 12zM9 12H4l2-4h4M12 15v5l4-2 1-5"/>',
  lightbulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.500c.7.700 1 1.500 1 2.500h6c0-1 .3-1.800 1-2.500A6 6 0 0 0 12 3z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  wrench:'<path d="M14.700 6.300a4 4 0 0 0 5 5L21 12.600 12.600 21a2.500 2.500 0 0 1-3.500-3.500L17.500 9zM15 4l5 5"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.500-6 8-6s8 2 8 6"/>',
  sliders:'<path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  sail:'<path d="M12 3v14M12 3l7 12h-7M5 17h14l-2 4H7z"/>',
  chevron:'<path d="m6 9 6 6 6-6"/>',
  check:'<path d="m5 12 5 5 9-10"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  link:'<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>'
};
const icon = n => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${P[n] || P.sparkles}</svg>`;
const fill = (sel, n) => $$(sel).forEach(e => e.innerHTML = icon(n));

/* ---------- placeholder-afbeeldingen (donkere SVG's) ---------- */
const tones = [["#26262b","#111113"],["#2d2d33","#151517"],["#1f2024","#0d0d0f"],["#34343b","#18181b"]];
function placeholder(label, w=800, h=500, k=0){
  const [a,b] = tones[k % tones.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".05"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#p)"/><circle cx="${w*.78}" cy="${h*.25}" r="${h*.3}" fill="#fff" fill-opacity=".04"/><text x="50%" y="50%" fill="#fff" fill-opacity=".35" font-family="Arial,sans-serif" font-size="${Math.round(h/16)}" letter-spacing="4" text-anchor="middle">${esc(label).toUpperCase()}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* ---------- basis ---------- */
const initials = S.naam.split(/\s+/).map(w => w[0]).join("").slice(0,2).toUpperCase();
const page = document.body.dataset.page || "home";
document.title = S.naam;
const PAGES = {projecten:"/projecten", certificaten:"/certificaten", interesses:"/interesses", contact:"/contact"};
const href = id => PAGES[id] || (id === "home" ? "/" : "/" + id);   // schone adressen: /vaardigheden, /projecten, ...
const nav = [["home","Home"],["profiel","Profiel"],["ervaring","Ervaring"],["vaardigheden","Vaardigheden"],["projecten","Projecten"],["certificaten","Certificaten"],["interesses","Interesses"],["contact","Contact"]];
$("#links").innerHTML = nav.map(([id,l]) => `<a href="${href(id)}" data-s="${id}">${T(l)}</a>`).join("");
if(page !== "home"){ $("#logo").href = "/"; $$("#links a").forEach(x => x.classList.toggle("on", x.dataset.s === page)); }
$("#logo").innerHTML = `<b>${S.profielfoto ? `<img src="${esc(S.profielfoto)}" alt="">` : esc(initials)}</b><span>${esc(S.naam)}</span>`;
fill("#prefBtn","user"); fill("#burger","menu"); fill(".modal-x","x"); 
const vulIconen = () => $$("[data-i]").forEach(e => { if(!e.firstChild) e.innerHTML = icon(e.dataset.i); });
vulIconen(); document.addEventListener("iconen-vullen", vulIconen);

/* hero */
$("#heroLabel").textContent = T(S.label);
const first = S.naam.split(" ")[0];
$("#heroTitle").innerHTML = `${T("Hoi, ik ben")} <em>${esc(S.naam)}</em>`;
$("#heroRole").textContent = T(S.functie);
$("#heroTagline").textContent = T(S.tagline);
$("#heroAvail").textContent = T(S.beschikbaarheid);
$("#heroPhoto").innerHTML = S.profielfoto
  ? `<img src="${esc(S.profielfoto)}" alt="${T("Profielfoto van")} ${esc(S.naam)}">`
  : `<div class="ph" role="img" aria-label="${T("Plaatshouder voor profielfoto")}">${esc(initials)}<small>${T("Profielfoto")}</small></div>`;
$("#stats").innerHTML = S.statistieken.map(s => {
  const n = parseInt(s.waarde, 10), num = /^\d+$/.test(String(s.waarde));
  return `<div class="stat"><b ${num ? `data-count="${n}"` : ""}>${esc(s.waarde)}${s.achtervoegsel && !num ? esc(s.achtervoegsel) : ""}</b><span>${esc(s.label)}</span></div>`;
}).join("");
$$("[data-count]").forEach(e => e.dataset.suffix = (S.statistieken.find(s => String(s.waarde) === e.dataset.count) || {}).achtervoegsel || "");

/* profiel, ervaring & certificaten */
const card = (i, t, x) => `<div class="glass card reveal"><div class="ico">${icon(i)}</div><h4>${esc(t)}</h4><p>${esc(x)}</p></div>`;
const C = S.cv;
$("#profielTekst").innerHTML = `<p>${esc(C.profiel)}</p>`;
const ext = u => /^https?:/.test(u) ? ' target="_blank" rel="noopener noreferrer"' : "";
$("#gegevens").innerHTML = C.gegevens.map(g => `<li>${icon(g.icoon)}<span><small>${esc(g.label)}</small>${g.url ? `<a class="lnk" href="${esc(g.url)}"${ext(g.url)}>${esc(g.waarde)}</a>` : esc(g.waarde)}</span></li>`).join("");
$("#talen").innerHTML = C.talen.map(t => `<li><b>${esc(t.taal)}</b><span>${esc(t.niveau)}</span></li>`).join("");
$("#heroFacts").innerHTML = C.gegevens.filter(g => ["E-mail","Woonplaats"].includes(g.label)).map(g => `<li>${icon(g.icoon)}${g.url ? `<a class="lnk" href="${esc(g.url)}"${ext(g.url)}>${esc(g.waarde)}</a>` : esc(g.waarde)}</li>`).join("");
const badgeNaam = {stage:"Stage", project:"Persoonlijk project", organisatie:"Organisatie"};
const cvRow = e => `<div class="cv-row"><div class="cv-when">${esc(e.periode)}</div><div><h4>${esc(e.titel)}${badgeNaam[e.type] ? ` <span class="badge">${T(badgeNaam[e.type])}</span>` : ""}</h4><p class="org">${esc(e.organisatie)}</p><p class="t">${esc(e.tekst)}</p><div class="chips">${(e.vaardigheden||[]).map(v => `<span class="chip">${esc(v)}</span>`).join("")}</div></div></div>`;
$("#werkLijst").innerHTML = S.ervaring.filter(e => e.type !== "opleiding").map(cvRow).join("");
$("#opleidingLijst").innerHTML = S.ervaring.filter(e => e.type === "opleiding").map(cvRow).join("");
$("#certLijst").innerHTML = S.prestaties.map(p => `<div class="cv-row"><div class="cv-when">${esc(p.datum)}</div><div><h4>${esc(p.titel)}</h4><p class="org">${esc(p.organisatie)}</p><p class="t">${esc(p.tekst)}</p>${p.afbeelding ? `<img class="ach-img" src="${esc(p.afbeelding)}" alt="${esc(p.titel)}" loading="lazy">` : ""}</div></div>`).join("");
$("#printCv").onclick = () => window.print();

/* vaardigheden */
// tekst mag een gewone zin zijn of een lijstje ["punt 1", "punt 2"]; links schrijf je als [tekst](adres)
const metLinks = h => h.replace(/\[([^\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+)\)/g, (m, l, u) => `<a class="lnk" href="${u}"${ext(u)}>${l}</a>`);
const tekstBlok = t => Array.isArray(t) ? `<ul class="skill-list">${t.map(x => `<li>${metLinks(esc(x))}</li>`).join("")}</ul>` : `<p>${metLinks(esc(t))}</p>`;
// Kaarten met een lange tekst staan compact in een vaste plek; bij hover (of tikken op een telefoon) klapt de kaart open over de omgeving heen
const isLang = i => typeof i.tekst === "string" && i.tekst.length > 170;   // alleen lange alinea's; lijstjes en korte zinnen blijven gewone kaarten
$("#skills").innerHTML = S.vaardigheden.map(c => `<div class="skill-cat"><h3 class="reveal">${esc(c.categorie)}</h3><div class="grid3${c.items.some(isLang) ? " wide" : ""}">${c.items.map(i => (isLang(i) ? '<div class="skill-slot">' : "") +
  `<div class="glass card reveal${isLang(i) ? " long" : ""}"${isLang(i) ? ' tabindex="0" aria-expanded="false"' : ""}><div class="ico">${icon(i.icoon)}</div><h4>${esc(i.naam)}</h4>${tekstBlok(i.tekst)}${typeof i.niveau === "number" ? `<div class="bar" role="img" aria-label="${T("Niveau")} ${i.niveau} ${T("procent")}"><i data-w="${i.niveau}"></i></div>` : ""}</div>` + (isLang(i) ? "</div>" : "")).join("")}</div></div>`).join("");
$$(".card.long").forEach(k => {
  const zet = open => { k.classList.toggle("open", open); k.setAttribute("aria-expanded", String(open)); };
  if(matchMedia("(hover: none)").matches) k.addEventListener("click", e => { if(!e.target.closest("a")) zet(!k.classList.contains("open")); });   // telefoon: tikken
  k.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); zet(!k.classList.contains("open")); } else if(e.key === "Escape") zet(false); });
  k.addEventListener("focusin", () => k.setAttribute("aria-expanded", "true"));
  k.addEventListener("focusout", () => { if(!k.classList.contains("open")) k.setAttribute("aria-expanded", "false"); });
});

/* projecten */
const catNaam = {web:"Webontwikkeling",software:"Software",discord:"Discord",fivem:"FiveM",overig:"Overig"};
const pImg = p => p.afbeelding || placeholder(p.naam, 800, 500, p.kleur || 0);
$("#projects").innerHTML = S.projecten.map((p,i) => `
  <article class="glass proj reveal" style="--d:${i*.07}s" data-cat="${esc(p.categorie)}" data-id="${esc(p.id)}" tabindex="0" role="button" aria-label="${T("Open project")} ${esc(p.naam)}">
    <div class="proj-img"><img src="${esc(pImg(p))}" alt="${T("Projectafbeelding van")} ${esc(p.naam)}" loading="lazy"></div>
    <div class="proj-body">
      <div class="proj-meta"><span class="badge">${esc(p.status)}</span><small>${esc(p.datum)}</small></div>
      <h4>${esc(p.naam)}</h4><p>${esc(p.korteTekst)}</p>
      <div class="chips">${p.tech.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      <span class="more">${T("Bekijk project")} ${icon("arrow")}</span>
    </div></article>`).join("");

/* interesses */
$("#interesses-grid").innerHTML = S.interesses.map(i => card(i.icoon, i.naam, i.tekst)).join("");

/* contact */
$("#contactIntro").textContent = T(S.contact.intro);
$("#channels").innerHTML = S.contact.kanalen.map(k => {
  const inner = `<div class="ico">${icon(k.icoon)}</div><div><small>${esc(k.naam)}</small>${esc(k.waarde)}</div>`;
  if(k.kopieer) return `<button type="button" class="ch" data-copy="${esc(k.waarde)}" title="${T("Klik om te kopiëren")}">${inner}</button>`;
  return k.url ? `<a class="ch" href="${esc(k.url)}"${ext(k.url)}>${inner}</a>` : `<div class="ch">${inner}</div>`;
}).join("");

/* kopieerknoppen (bijv. Discord-gebruikersnaam) */
let toastT;
function showToast(tekst, ms = 2400){
  let toast = $(".toast"); if(!toast.classList.contains("toast")){ toast = document.createElement("div"); toast.className = "toast"; toast.setAttribute("role","status"); document.body.append(toast); }
  toast.textContent = tekst; toast.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove("show"), ms);
}
document.addEventListener("click", async e => {
  const b = e.target.closest("[data-copy]"); if(!b) return;
  const tekst = b.dataset.copy; let ok = true;
  try{ await navigator.clipboard.writeText(tekst); }catch(_){
    const t = document.createElement("textarea"); t.value = tekst; document.body.append(t); t.select();
    try{ ok = document.execCommand("copy"); }catch(__){ ok = false; } t.remove();
  }
  showToast(ok ? `${T("Gekopieerd:")} ${tekst}` : `${T("Kopiëren mislukt. Gebruikersnaam:")} ${tekst}`);
});

/* footer */
$("#footName").textContent = S.naam;
$("#footText").textContent = T(S.footerTekst);
$("#footLinks").innerHTML = nav.map(([id,l]) => `<li><a href="${href(id)}">${T(l)}</a></li>`).join("");
$("#footSocials").innerHTML = S.contact.kanalen.filter(k => k.naam !== "E-mail").map(k =>
  k.kopieer ? `<button type="button" data-copy="${esc(k.waarde)}" aria-label="${esc(k.naam)}: ${esc(k.waarde)} — ${T("klik om te kopiëren")}" title="${esc(k.naam)}: ${esc(k.waarde)} (${T("klik om te kopiëren")})">${icon(k.icoon)}</button>` :
  k.url ? `<a href="${esc(k.url)}"${ext(k.url)} aria-label="${esc(k.naam)}" title="${esc(k.naam)}">${icon(k.icoon)}</a>` : `<span title="${esc(k.naam)} ${T("(nog niet ingesteld)")}" aria-label="${esc(k.naam)}">${icon(k.icoon)}</span>`).join("");
$("#copy").textContent = `© ${S.jaar} ${S.naam}. ${T("Alle rechten voorbehouden.")}`;

/* ---------- afbeeldingen beschermen tegen simpel opslaan/slepen ---------- */
const BEELD = "img, .hero-photo, .cv-photo, .logo b, .proj-img, .m-img, .ach-img";
document.addEventListener("contextmenu", e => { if(e.target.closest && e.target.closest(BEELD)) e.preventDefault(); });
document.addEventListener("dragstart", e => { if(e.target.closest && e.target.closest(BEELD)) e.preventDefault(); });

/* ---------- thema ---------- */
const root = document.documentElement;
function setTheme(t){
  root.setAttribute("data-theme", t);
  try{ localStorage.setItem("thema", t); }catch(e){}
  $("#themeSel").value = t;
  const m = document.querySelector('meta[name=theme-color]'); if(m) m.content = t === "dark" ? "#0b0b0c" : "#f5f5f4";
}
setTheme(root.getAttribute("data-theme") || "dark");
$("#themeSel").onchange = e => setTheme(e.target.value);

/* ---------- Discord-login (alleen toegestane accounts; de controle gebeurt op de server) ---------- */
const dcBox = $("#dcLogin");
function paintPrefBtn(me){
  const b = $("#prefBtn");
  if(me && me.ingelogd){
    b.classList.add("has-av");
    b.innerHTML = me.avatar ? `<img class="pref-av" src="${escRaw(me.avatar)}" alt="" referrerpolicy="no-referrer">` : `<span class="pref-ini">${escRaw((me.naam || "?").trim().charAt(0).toUpperCase())}</span>`;
    b.setAttribute("aria-label", `${T("Voorkeuren")} — ${me.naam}`);
  } else {
    b.classList.remove("has-av"); b.innerHTML = icon("user"); b.setAttribute("aria-label", T("Voorkeuren"));
  }
}
function paintPriveBtn(me){
  let b = $("#privBtn"); const wil = !!(me && me.ingelogd && me.prive);
  $(".nav-in").classList.toggle("heeft-priv", wil);
  if(wil && b.id !== "privBtn"){
    b = document.createElement("a"); b.id = "privBtn"; b.className = "icon-btn priv-btn"; b.href = "/prive";
    b.setAttribute("aria-label", T("Privé")); b.title = T("Privé"); b.innerHTML = icon("lock");
    const pw = $(".pop-wrap"); if(pw.parentNode && pw.classList.contains("pop-wrap")) pw.parentNode.insertBefore(b, pw);
    setTimeout(() => b.classList.add("show"), 60);
  } else if(!wil && b.id === "privBtn"){
    b.classList.remove("show"); setTimeout(() => b.remove(), 450);
  }
}
function renderLogin(me){
  paintPrefBtn(me);
  paintPriveBtn(me);
  if(me && me.ingelogd){
    dcBox.innerHTML = `<div class="dc-user">${me.avatar ? `<img src="${escRaw(me.avatar)}" alt="" referrerpolicy="no-referrer">` : `<span class="dc-av">${icon("discord")}</span>`}<span class="dc-who"><small>${esc("Ingelogd via Discord")}</small><b>${escRaw(me.naam)}</b></span></div><button type="button" class="dc-out">${esc("Uitloggen")}</button>`;
    $(".dc-out", dcBox).onclick = async () => { try{ await fetch("/auth/logout", {method:"POST", credentials:"same-origin"}); }catch(_){} try{ localStorage.removeItem("dcMe"); }catch(_){} renderLogin(null); showToast(T("Je bent uitgelogd.")); };
  } else {
    dcBox.innerHTML = `<a class="dc-btn" href="/auth/login"><span class="dc-ic">${icon("discord")}</span><span class="dc-tx">${esc("Inloggen met Discord")}</span><span class="dc-arrow">${icon("arrow")}</span></a><p class="dc-note">${esc("Alleen voor geautoriseerde accounts.")}</p>`;
  }
}
if(dcBox.id === "dcLogin"){
  let bekend = null; try{ bekend = JSON.parse(localStorage.getItem("dcMe") || "null"); }catch(_){}
  renderLogin(bekend && bekend.ingelogd ? bekend : null);
  // status bij de server controleren: nu, elke 15 seconden, en zodra je terugkomt op dit tabblad
  const synchroniseer = () => fetch("/auth/me", {credentials:"same-origin", cache:"no-store"}).then(r => r.ok ? r.json() : null).then(me => {
    if(!me) return;
    try{ me.ingelogd ? localStorage.setItem("dcMe", JSON.stringify(me)) : localStorage.removeItem("dcMe"); }catch(_){}
    renderLogin(me);
    if(page === "prive" && !(me.ingelogd && me.prive)) location.replace("/?login=" + (me.ingelogd ? "geen-rang" : "inloggen-nodig"));
  }).catch(() => {});
  synchroniseer();
  setInterval(() => { if(document.visibilityState === "visible") synchroniseer(); }, 15000);
  document.addEventListener("visibilitychange", () => { if(document.visibilityState === "visible") synchroniseer(); });
}
(function loginMelding(){
  const q = new URLSearchParams(location.search), c = q.get("login"); if(!c) return;
  const tekst = {"inloggen-nodig":"Log eerst in om deze pagina te bekijken.", "geen-rang":"Je hebt niet de juiste rang voor deze pagina.", "geen-toegang":"Dit onderdeel is alleen voor de eigenaar van de site.", "opnieuw-inloggen":"Je sessie is verlopen. Log opnieuw in.", ok:"Je bent ingelogd.", geweigerd:"Dit Discord-account heeft geen toegang.", geannuleerd:"Inloggen is geannuleerd.", "niet-ingesteld":"Discord-login is nog niet ingesteld.", fout:"Inloggen is mislukt. Probeer het opnieuw."}[c];
  q.delete("login"); history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q : "") + location.hash);
  if(tekst) setTimeout(() => showToast(T(tekst), 4200), 600);
})();

/* mooie dropdowns in het voorkeurenmenu */
const ddIcons = {dark:"moon", light:"sun", nl:"globe", en:"globe", es:"globe", de:"globe"};
if($("#lang").options) $("#lang").value = LANG;
$("#lang").onchange = e => { try{ localStorage.setItem("taal", e.target.value); }catch(_){} location.reload(); };
$$(".pop select").forEach(sel => {
  const E = sel.id === "lang" ? escRaw : esc;
  const wrap = document.createElement("div"); wrap.className = "dd";
  const btn = document.createElement("button"); btn.type = "button"; btn.className = "dd-btn";
  btn.setAttribute("aria-haspopup", "listbox"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", sel.getAttribute("aria-label") || "");
  const list = document.createElement("ul"); list.className = "dd-list"; list.setAttribute("role", "listbox"); list.hidden = true;
  const opts = [...sel.options].map(o => {
    const li = document.createElement("li"); li.className = "dd-opt"; li.setAttribute("role", "option"); li.tabIndex = -1; li.dataset.v = o.value;
    li.innerHTML = `<span class="dd-ic">${icon(ddIcons[o.value] || "sparkles")}</span><span class="dd-tx">${E(o.textContent)}</span><span class="dd-ck">${icon("check")}</span>`;
    if(o.disabled) li.setAttribute("aria-disabled", "true");
    list.append(li); return li;
  });
  const paint = () => {
    const cur = sel.options[sel.selectedIndex];
    btn.innerHTML = `<span class="dd-ic">${icon(ddIcons[cur.value] || "sparkles")}</span><span class="dd-tx">${E(cur.textContent)}</span><span class="dd-chev">${icon("chevron")}</span>`;
    opts.forEach(li => li.setAttribute("aria-selected", String(li.dataset.v === cur.value)));
  };
  const open = v => { list.hidden = !v; btn.setAttribute("aria-expanded", String(v)); wrap.classList.toggle("open", v); if(v){ (opts.find(l => l.getAttribute("aria-selected") === "true") || opts[0]).focus(); } };
  btn.onclick = e => { e.stopPropagation(); const wasOpen = !list.hidden; $$(".dd.open").forEach(d => d.querySelector(".dd-list").hidden = true); $$(".dd.open").forEach(d => d.classList.remove("open")); open(!wasOpen); };
  list.addEventListener("click", e => {
    const li = e.target.closest(".dd-opt"); if(!li || li.getAttribute("aria-disabled") === "true") return;
    sel.value = li.dataset.v; sel.dispatchEvent(new Event("change")); paint(); open(false); btn.focus();
  });
  list.addEventListener("keydown", e => {
    const i = opts.indexOf(document.activeElement);
    if(e.key === "ArrowDown"){ e.preventDefault(); opts[Math.min(i + 1, opts.length - 1)].focus(); }
    else if(e.key === "ArrowUp"){ e.preventDefault(); opts[Math.max(i - 1, 0)].focus(); }
    else if(e.key === "Enter" || e.key === " "){ e.preventDefault(); document.activeElement.click(); }
    else if(e.key === "Escape"){ e.stopPropagation(); open(false); btn.focus(); }
  });
  sel.hidden = true; sel.before(wrap); wrap.append(btn, list, sel); paint();
});

/* voorkeurenmenu */
const prefBtn = $("#prefBtn"), prefMenu = $("#prefMenu");
const togglePref = v => { if(!v) $$(".dd.open").forEach(d => { d.classList.remove("open"); d.querySelector(".dd-list").hidden = true; }); prefMenu.hidden = !v; prefBtn.setAttribute("aria-expanded", String(v)); };
prefBtn.onclick = e => { e.stopPropagation(); togglePref(prefMenu.hidden); };
document.addEventListener("click", e => { if(!prefMenu.hidden && !prefMenu.contains(e.target)) togglePref(false); });
document.addEventListener("click", e => { if(!e.target.closest(".dd")) $$(".dd.open").forEach(d => { d.classList.remove("open"); d.querySelector(".dd-list").hidden = true; d.querySelector(".dd-btn").setAttribute("aria-expanded","false"); }); });

/* mobiel menu */
const links = $("#links"), burger = $("#burger");
const setMenu = o => { links.classList.toggle("open", o); burger.setAttribute("aria-expanded", String(o)); burger.innerHTML = icon(o ? "x" : "menu"); burger.setAttribute("aria-label", T(o ? "Menu sluiten" : "Menu openen")); };
burger.onclick = () => setMenu(!links.classList.contains("open"));
links.addEventListener("click", e => { if(e.target.closest("a")) setMenu(false); });

/* ---------- scroll: nav, voortgang, actieve sectie ---------- */
const navEl = $("#nav"), prog = $("#progress");
function onScroll(){
  navEl.classList.toggle("solid", scrollY > 20);
  const h = document.documentElement.scrollHeight - innerHeight;
  prog.style.width = (h > 0 ? scrollY / h * 100 : 0) + "%";
}
addEventListener("scroll", onScroll, {passive:true}); onScroll();
const secObs = new IntersectionObserver(es => es.forEach(e => {
  if(e.isIntersecting) $$("#links a").forEach(a => a.classList.toggle("on", a.dataset.s === e.target.id));
}), {rootMargin:"-45% 0px -50% 0px"});
if(page === "home") nav.forEach(([id]) => { const s = document.getElementById(id); if(s) secObs.observe(s); });   // alleen op de homepage: subpagina's markeren hun eigen menu-item

/* ---------- reveal, tijdlijn, tellers, balken ---------- */
function count(el){
  const to = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now(), d = 1400;
  (function step(t){
    const p = Math.min((t - t0) / d, 1), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
    el.textContent = v + suf; if(p < 1) requestAnimationFrame(step);
  })(t0);
}
const revObs = new IntersectionObserver(es => es.forEach(e => {
  if(!e.isIntersecting) return;
  const el = e.target; el.classList.add("in");
  $$("[data-count]", el).forEach(count);
  $$("[data-w]", el).forEach(b => b.style.width = b.dataset.w + "%");
  revObs.unobserve(el);
}), {threshold:.12, rootMargin:"0px 0px -40px 0px"});
$$(".reveal").forEach(el => revObs.observe(el));
$$(".tl").forEach(el => { const o = new IntersectionObserver(([e]) => { if(e.isIntersecting){ el.classList.add("in"); o.disconnect(); } }, {rootMargin:"-30% 0px -50% 0px"}); o.observe(el); });

/* ---------- filters ---------- */
function filterable(barSel, itemSel, emptySel){
  let timer;
  $(barSel).addEventListener("click", e => {
    const b = e.target.closest("button"); if(!b || b.classList.contains("on")) return;
    $$(barSel + " button").forEach(x => x.classList.toggle("on", x === b));
    const match = it => b.dataset.f === "alles" || it.dataset.cat === b.dataset.f;
    const items = $$(itemSel);
    clearTimeout(timer);
    items.forEach(it => { if(!it.classList.contains("hide") && !match(it)) it.classList.add("out"); });
    timer = setTimeout(() => {
      let n = 0, k = 0;
      items.forEach(it => {
        const show = match(it), was = !it.classList.contains("hide");
        it.classList.remove("out", "pop"); it.classList.toggle("hide", !show);
        if(show){ n++; { it.style.setProperty("--k", k++); void it.offsetWidth; it.classList.add("pop"); } }
      });
      if(emptySel) $(emptySel).hidden = n > 0;
    }, 240);
  });
  document.addEventListener("animationend", e => { if(e.target.matches?.(".proj")) e.target.classList.remove("pop"); });
}
filterable("#projFilters", ".proj", "#projEmpty");

/* ---------- projectvenster ---------- */
let lastFocus = null;
const modal = $("#modal");
function openLayer(el){ lastFocus = document.activeElement; el.hidden = false; document.body.style.overflow = "hidden"; (el.querySelector("[data-close]") || el).focus?.(); }
function closeLayer(el){ el.hidden = true; document.body.style.overflow = ""; lastFocus && lastFocus.focus?.(); }

function openProject(id){
  const p = S.projecten.find(x => x.id === id); if(!p) return;
  const ll = (p.links || []).map(l => l.url ? `<a class="btn ghost" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ${icon("link")}</a>` : `<span class="btn ghost" style="opacity:.5" title="${T("Nog geen link ingesteld")}">${esc(l.label)}</span>`).join("");
  $("#modalBody").innerHTML = `
    <div class="m-img"><img src="${esc(pImg(p))}" alt="${T("Afbeelding van")} ${esc(p.naam)}"></div>
    <div class="m-body">
      <div class="proj-meta" style="justify-content:flex-start;gap:12px"><span class="badge">${esc(p.status)}</span><span class="badge">${esc(catNaam[p.categorie] || "Overig")}</span><small>${esc(p.datum)}</small></div>
      <h3 id="mTitle">${esc(p.naam)}</h3>
      <p>${esc(p.uitgebreid)}</p>
      <h5>${T("Doel van het project")}</h5><p>${esc(p.doel)}</p>
      <h5>${T("Functies")}</h5><ul>${p.functies.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
      <h5>${T("Technologieën")}</h5><div class="chips" style="margin:0">${p.tech.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      <h5>${T("Resultaat")}</h5><p>${esc(p.resultaat)}</p>
      ${ll ? `<h5>${T("Links")}</h5><div class="m-links" style="margin-top:8px">${ll}</div>` : ""}
    </div>`;
  openLayer(modal);
}
$("#projects").addEventListener("click", e => { const c = e.target.closest(".proj"); if(c) openProject(c.dataset.id); });
$("#projects").addEventListener("keydown", e => { if((e.key === "Enter" || e.key === " ") && e.target.matches(".proj")){ e.preventDefault(); openProject(e.target.dataset.id); } });
modal.addEventListener("click", e => { if(e.target.closest("[data-close]")) closeLayer(modal); });

document.addEventListener("keydown", e => {
  if(e.key === "Escape"){ if(!modal.hidden) closeLayer(modal); else togglePref(false); setMenu(false); }
});

/* ---------- contactformulier ---------- */
const form = $("#form"), status = $("#status");
const rules = {
  naam: v => v.trim().length >= 2 ? "" : "Vul je naam in (minimaal 2 tekens).",
  mail: v => !v.trim() ? "Vul je e-mailadres in." : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Dit lijkt geen geldig e-mailadres.",
  onderwerp: v => v.trim().length >= 3 ? "" : "Vul een onderwerp in (minimaal 3 tekens).",
  bericht: v => v.trim().length >= 10 ? "" : "Je bericht moet minimaal 10 tekens bevatten."
};
function check(name){
  const inp = form.elements[name], msg = rules[name](inp.value);
  inp.closest(".field").classList.toggle("bad", !!msg);
  inp.setAttribute("aria-invalid", msg ? "true" : "false");
  $(`.err[data-for=${name}]`).textContent = T(msg); return !msg;
}
const hasForm = !!document.getElementById("form");
hasForm && Object.keys(rules).forEach(n => form.elements[n].addEventListener("blur", () => check(n)));
hasForm && Object.keys(rules).forEach(n => form.elements[n].addEventListener("input", () => { if(form.elements[n].closest(".field").classList.contains("bad")) check(n); }));
form.addEventListener("submit", async e => {
  e.preventDefault(); status.className = "status"; status.textContent = "";
  const ok = Object.keys(rules).map(check).every(Boolean);
  if(!ok){ status.classList.add("no"); status.textContent = T("Controleer de gemarkeerde velden en probeer het opnieuw."); form.querySelector(".bad input, .bad textarea")?.focus(); return; }
  const btn = $("#submitBtn"); btn.disabled = true; btn.textContent = T("Bezig met verzenden…");
  try{
    if(S.contact.formulierEndpoint){
      const r = await fetch(S.contact.formulierEndpoint, {method:"POST", headers:{"Accept":"application/json","Content-Type":"application/json"}, body:JSON.stringify(Object.fromEntries(new FormData(form)))});
      if(!r.ok) throw new Error("http");
    } else await new Promise(r => setTimeout(r, 700));
    status.classList.add("ok"); status.textContent = T("Je bericht is succesvol verzonden."); form.reset();
  }catch(_){
    status.classList.add("no"); status.textContent = T("Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.");
  }finally{ btn.disabled = false; btn.textContent = T("Versturen"); }
});

document.body.classList.add("page-in");
})();

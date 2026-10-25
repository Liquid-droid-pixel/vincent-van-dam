/* Vloeiende effecten en bewegingen. Alles hier is optioneel: zonder dit bestand werkt de site nog steeds. */
(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
const lerp = (a, b, t) => a + (b - a) * t;

/* ---------- soepel scrollen (Lenis, met val-terug op standaard smooth scroll) ---------- */
let lenis = null;
if (window.Lenis) {
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, smoothWheel: true });
  document.documentElement.style.scrollBehavior = "auto";
}
/* ---------- schone adressen: secties van de homepage hebben een eigen pad (/vaardigheden) ---------- */
const SECTIES = ["profiel", "ervaring", "vaardigheden", "meer"];
const opHome = !document.body.dataset.page;
const sectieUitPad = p => { const id = p.replace(/^\/+|\/+$/g, ""); return SECTIES.includes(id) ? id : null; };
const naarY = (y, direct) => {
  if (lenis) lenis.scrollTo(y, direct ? { immediate: true } : { duration: 1.5, easing: t => 1 - Math.pow(1 - t, 4) });
  else window.scrollTo({ top: y, behavior: direct ? "auto" : "smooth" });
};
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (a.target && a.target !== "_self")) return;
  const href = a.getAttribute("href"); let id = null;
  if (href.startsWith("#")) id = href.slice(1) || "home";
  else if (opHome) {
    const u = new URL(a.href, location.href);
    if (u.origin === location.origin && !u.search && !u.hash) id = u.pathname === "/" ? "home" : sectieUitPad(u.pathname);
  }
  if (id === null) return;
  const el = id === "home" ? document.body : document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const pad = opHome ? (SECTIES.includes(id) ? "/" + id : "/") : location.pathname;
  history.replaceState(null, "", pad);
  naarY(id === "home" ? 0 : Math.max(0, el.getBoundingClientRect().top + scrollY - 92));
});
// bladwijzer of gedeelde link zoals /vaardigheden (of oud: /#vaardigheden): meteen naar die sectie springen
if (opHome) {
  let id = sectieUitPad(location.pathname);
  if (!id && SECTIES.includes(location.hash.slice(1))) { id = location.hash.slice(1); history.replaceState(null, "", "/" + id); }
  if (id) {
    let laatste = -1;
    const naar = () => {
      const el = document.getElementById(id); if (!el) return;
      if (laatste !== -1 && Math.abs(scrollY - laatste) > 3) return;   // bezoeker scrolt zelf al: niet meer verspringen
      naarY(Math.max(0, el.getBoundingClientRect().top + scrollY - 92), true); laatste = scrollY;
    };
    naar(); setTimeout(naar, 350); setTimeout(naar, 1000); addEventListener("load", naar);
  }
}
// scrollen pauzeren zolang een venster open staat
const modalEl = document.getElementById("modal");
if (modalEl) new MutationObserver(() => {
  if (lenis) modalEl.hidden ? lenis.start() : lenis.stop();
}).observe(modalEl, { attributes: true, attributeFilter: ["hidden"] });

/* ---------- woord-voor-woord onthulling van de hoofdtitel ---------- */
(function splitTitle(){
  const h = $("#heroTitle"); if (!h) return;
  let n = 0;
  const walk = node => [...node.childNodes].forEach(c => {
    if (c.nodeType === 3) {
      const frag = document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.append(" "); return; }
        const w = document.createElement("span"); w.className = "w";
        const i = document.createElement("i"); i.textContent = part; i.style.setProperty("--i", n++);
        w.append(i); frag.append(w);
      });
      c.replaceWith(frag);
    } else if (c.nodeType === 1) walk(c);
  });
  walk(h);
  h.setAttribute("aria-label", h.textContent);
})();

/* ---------- gespreide onthulling in rasters ---------- */
$$(".grid3, .grid2, .projects, .channels, .stats").forEach(box => {
  [...box.children].forEach((c, i) => c.style.setProperty("--d", Math.min(i, 9) * 0.07 + "s"));
});

/* ---------- glijdende indicator in de navigatie ---------- */
const links = $("#links");
if (links) {
  const pill = document.createElement("i"); pill.className = "pill"; links.prepend(pill);
  links.classList.add("has-pill");
  const move = () => {
    const a = links.querySelector("a.on");
    if (!a || innerWidth <= 900) { pill.style.opacity = 0; return; }
    pill.style.opacity = 1; pill.style.width = a.offsetWidth + "px"; pill.style.transform = `translateX(${a.offsetLeft}px)`;
  };
  new MutationObserver(move).observe(links, { subtree: true, attributes: true, attributeFilter: ["class"] });
  addEventListener("resize", move);
  if (document.fonts) document.fonts.ready.then(move);
  move();
}

/* ---------- liquid glass: echte lichtbreking (SVG-verplaatsingsfilter), alleen in Chromium op desktop/Android ---------- */
(function lichtbreking(){
  const merken = ((navigator.userAgentData && navigator.userAgentData.brands) || []).map(b => b.brand).join(' ');
  const chromium = /Chromium/.test(merken) || (/Chrome\//.test(navigator.userAgent) && !/Firefox|FxiOS|CriOS|EdgiOS/.test(navigator.userAgent));
  const ios = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if(!chromium || ios) return;
  const ns = 'http://www.w3.org/2000/svg', svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('width', '0'); svg.setAttribute('height', '0'); svg.setAttribute('aria-hidden', 'true'); svg.style.cssText = 'position:absolute;pointer-events:none';
  svg.innerHTML = '<filter id="lg-refract" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.006 0.010" numOctaves="2" seed="11" result="ruis"/><feGaussianBlur in="ruis" stdDeviation="2" result="glad"/><feDisplacementMap in="SourceGraphic" in2="glad" scale="30" xChannelSelector="R" yChannelSelector="G"/></filter>';
  document.body.appendChild(svg);
  document.documentElement.classList.add('lg-refract');
})();

/* ---------- lichtgloed die de muis volgt over glaskaarten ---------- */
if (fine) {
  document.addEventListener("pointermove", e => {
    const g = e.target.closest && e.target.closest(".glass, .ch");
    if (!g) return;
    const r = g.getBoundingClientRect();
    g.style.setProperty("--mx", e.clientX - r.left + "px");
    g.style.setProperty("--my", e.clientY - r.top + "px");
  }, { passive: true });
}

/* ---------- magnetische knoppen ---------- */
if (fine) {
  $$(".btn, .icon-btn, .socials a").forEach(b => {
    const s = b.classList.contains("btn") ? 0.25 : 0.35;
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty("--tx", (e.clientX - r.left - r.width / 2) * s + "px");
      b.style.setProperty("--ty", (e.clientY - r.top - r.height / 2) * s + "px");
    });
    b.addEventListener("pointerleave", () => { b.style.setProperty("--tx", "0px"); b.style.setProperty("--ty", "0px"); });
  });
}

/* ---------- parallax: achtergrondbollen en profielfoto ---------- */
const o1 = $(".o1"), o2 = $(".o2"), photo = $("#heroPhoto");
let mx = 0, my = 0, cx = 0, cy = 0, sy = scrollY, cs = scrollY;
if (fine) addEventListener("pointermove", e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; }, { passive: true });
addEventListener("scroll", () => { sy = scrollY; }, { passive: true });
(function frame(t){
  if (lenis) lenis.raf(t);
  cx = lerp(cx, mx, .06); cy = lerp(cy, my, .06); cs = lerp(cs, sy, .1);
  if (o1) o1.style.translate = `${cx * 70}px ${cy * 50 - cs * .12}px`;
  if (o2) o2.style.translate = `${cx * -60}px ${cy * -40 - cs * .07}px`;
  if (photo && cs < innerHeight * 1.2) photo.style.translate = `${cx * -12}px ${cy * -10 - cs * .05}px`;
  requestAnimationFrame(frame);
})(performance.now());
})();

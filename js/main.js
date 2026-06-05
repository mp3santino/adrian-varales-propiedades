/* ============================================================
   ADRIÁN VARALES PROPIEDADES — main.js
   ============================================================ */
(function () {
  "use strict";

  /* ---------- ICONS ---------- */
  const IC = {
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 14h18M7 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M3 18v2M21 18v2"/></svg>',
    bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2zM6 18l-1 2M18 18l1 2M7 6h2"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4zM7 16h.01M17 16h.01"/></svg>',
    ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 16l13-13 5 5L8 21l-5-5zM9 9l2 2M12 6l2 2M6 12l2 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 6L9 17l-5-5"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.68-6.14A11.87 11.87 0 0 1 .16 11.9C.16 5.34 5.5 0 12.06 0a11.82 11.82 0 0 1 8.4 3.49 11.82 11.82 0 0 1 3.48 8.41c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45L.06 24zM6.6 20.2c1.68 1 3.28 1.6 5.46 1.6 5.45 0 9.9-4.44 9.9-9.9 0-5.45-4.45-9.9-9.9-9.9-5.46 0-9.9 4.45-9.9 9.9 0 2.3.66 4 1.77 5.74L3 19.4l3.6-.96zM9.1 6.4c-.2-.45-.4-.46-.6-.47h-.5c-.18 0-.46.06-.7.33-.24.27-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.73.13.18 1.84 2.95 4.55 4.02 2.25.9 2.7.72 3.2.67.5-.04 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.13-.6.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.48-.83-2.02z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  };

  /* ---------- WhatsApp message helpers ---------- */
  function waProp(p) {
    return waLink(
      `Hola Adrián, me interesa la propiedad "${p.title} — ${p.address}" (${priceLabel(p)}). ¿Me podés asesorar?`
    );
  }
  const waGeneral = waLink(
    "Hola Adrián, quiero que me asesores sobre las propiedades disponibles en Tandil."
  );
  const waSell = waLink(
    "Hola Adrián, quiero vender/tasar mi propiedad en Tandil. ¿Cómo arrancamos?"
  );

  /* ---------- Wire global WhatsApp links ---------- */
  function setHref(id, href) { const el = document.getElementById(id); if (el) el.href = href; }
  setHref("navWa", waGeneral);
  setHref("mWa", waGeneral);
  setHref("fWa", waGeneral);
  setHref("ctaWa", waSell);
  const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();

  /* ---------- NAV scroll + burger ---------- */
  const nav = document.getElementById("nav");
  if (nav && !nav.classList.contains("inverted")) {
    const onScroll = () => nav.classList.toggle("solid", window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  }
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => { mobileMenu.classList.remove("open"); document.body.style.overflow = ""; })
    );
  }

  /* ---------- Reveal on scroll ---------- */
  function observeReveals(scope) {
    const els = (scope || document).querySelectorAll("[data-reveal]:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Count-up ---------- */
  function countUp() {
    document.querySelectorAll("[data-count]").forEach((el) => {
      const target = +el.getAttribute("data-count");
      if (!target) return;
      const io = new IntersectionObserver((ent) => {
        ent.forEach((e) => {
          if (!e.isIntersecting) return;
          io.disconnect();
          let cur = 0; const step = Math.max(1, Math.round(target / 36));
          const t = setInterval(() => { cur += step; if (cur >= target) { cur = target; clearInterval(t); } el.textContent = cur; }, 24);
        });
      }, { threshold: 0.6 });
      io.observe(el);
    });
  }

  /* ---------- Card spec chips ---------- */
  function specChips(p, max) {
    const chips = [];
    if (p.beds != null) chips.push(`<span>${IC.bed}${p.beds} dorm</span>`);
    if (p.baths != null) chips.push(`<span>${IC.bath}${p.baths} baño${p.baths > 1 ? "s" : ""}</span>`);
    if (p.parking != null && p.parking > 0) chips.push(`<span>${IC.car}${p.parking} coch</span>`);
    if (p.area) chips.push(`<span>${IC.ruler}${p.area}</span>`);
    if (chips.length === 0) chips.push(`<span>${IC.pin}${p.type} · Tandil</span>`);
    return chips.slice(0, max || 3).join("");
  }

  /* ---------- Property card ---------- */
  function card(p, sizeClass) {
    const sold = p.status === "Vendida";
    const tags = [`<span class="tag tag--op">${p.operation}</span>`];
    if (sold) tags.push(`<span class="tag tag--vendida">Vendida</span>`);
    else if (p.badge) tags.push(`<span class="tag tag--badge">${p.badge}</span>`);
    if (p.aptoCredito && !sold) tags.push(`<span class="tag tag--credito">Apta crédito</span>`);
    return `
      <article class="pcard ${sizeClass || ""} ${sold ? "is-sold" : ""}" data-type="${p.type}" data-reveal>
        <a class="pcard__link" href="propiedad.html?id=${p.id}" aria-label="${p.title} ${p.address}"></a>
        <div class="pcard__media">
          <div class="pcard__tags">${tags.join("")}</div>
          ${sold ? '<div class="pcard__sold">Vendida</div>' : ""}
          <button class="pcard__fav" aria-hidden="true" tabindex="-1">${IC.pin}</button>
          <img src="${coverImage(p)}" alt="${p.title} — ${p.address}, Tandil" loading="lazy" />
          <div class="pcard__price">${priceLabel(p)}</div>
        </div>
        <div class="pcard__body">
          <div class="pcard__top">
            <h3 class="pcard__title">${p.title}</h3>
          </div>
          <div class="pcard__addr">${IC.pin ? "" : ""}${p.address}</div>
          <p class="pcard__zone">${p.zone}</p>
          <div class="pcard__specs">${specChips(p, 3)}</div>
          <div class="pcard__actions" style="position:relative;z-index:4;display:flex;gap:.9rem;align-items:center;margin-top:1.1rem">
            <a class="ulink" href="propiedad.html?id=${p.id}">Ver propiedad ${IC.arrow}</a>
            <a class="wa-mini" href="${waProp(p)}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp">${IC.wa}</a>
          </div>
        </div>
      </article>`;
  }

  /* ============================================================
     INDEX — featured
     ============================================================ */
  const featuredGrid = document.getElementById("featuredGrid");
  if (featuredGrid) {
    const feat = PROPERTIES.filter((p) => p.featured).slice(0, 5);
    let html = "";
    feat.forEach((p, i) => {
      // editorial rhythm: 1 wide, then pairs
      const cls = i === 0 ? "wide" : "";
      html += card(p, cls);
    });
    featuredGrid.innerHTML = html;
    observeReveals(featuredGrid);
  }

  /* ============================================================
     LISTADO — propiedades.html
     ============================================================ */
  const listing = document.getElementById("listing");
  if (listing) {
    const countEl = document.getElementById("count");
    const filterBtns = Array.from(document.querySelectorAll(".filter"));
    const params = new URLSearchParams(location.search);
    let current = params.get("tipo") || "all";

    function render(type) {
      const list = type === "all" ? PROPERTIES : PROPERTIES.filter((p) => p.type === type);
      listing.innerHTML = list.map((p) => card(p, "third")).join("");
      if (countEl) countEl.textContent = `${list.length} propiedad${list.length === 1 ? "" : "es"}`;
      observeReveals(listing);
    }
    filterBtns.forEach((b) =>
      b.addEventListener("click", () => {
        filterBtns.forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        current = b.getAttribute("data-filter");
        render(current);
        history.replaceState(null, "", current === "all" ? "propiedades.html" : `?tipo=${current}`);
      })
    );
    // sync active button from URL
    filterBtns.forEach((b) => b.classList.toggle("active", b.getAttribute("data-filter") === current));
    if (!filterBtns.some((b) => b.classList.contains("active"))) filterBtns[0].classList.add("active");
    render(current);
  }

  /* ============================================================
     DETALLE — propiedad.html
     ============================================================ */
  const detailRoot = document.getElementById("detail");
  if (detailRoot) {
    const id = new URLSearchParams(location.search).get("id");
    const p = getProperty(id) || PROPERTIES[0];
    document.title = `${p.title} — ${p.address} · Adrián Varales Propiedades`;

    /* Gallery — portada (fachada) primero */
    const galleryEl = document.getElementById("gallery");
    const n = p.images;
    const coverN = p.cover || 1;
    const order = [coverN, ...Array.from({ length: n }, (_, i) => i + 1).filter((x) => x !== coverN)];
    if (n <= 1) {
      galleryEl.innerHTML = `
        <div class="gallery gallery--single" data-reveal>
          <div class="gallery__main" data-lb="0"><img src="${propImage(p.id, order[0])}" alt="${p.title}" /></div>
        </div>`;
    } else {
      const moreCount = Math.max(0, n - 3);
      galleryEl.innerHTML = `
        <div class="gallery" data-reveal>
          <div class="gallery__main" data-lb="0"><img src="${propImage(p.id, order[0])}" alt="${p.title}" /></div>
          <div class="gallery__side">
            <div class="g" data-lb="1"><img src="${propImage(p.id, order[1])}" alt="${p.title}" /></div>
            <div class="g" data-lb="2">
              <img src="${propImage(p.id, order[2])}" alt="${p.title}" />
              ${moreCount > 0 ? `<div class="gallery__more">+${moreCount} fotos</div>` : ""}
            </div>
          </div>
        </div>`;
    }

    /* Content */
    const contentEl = document.getElementById("content");
    const specRow = [];
    if (p.beds != null) specRow.push(`<div class="dspec">${IC.bed}<span class="v">${p.beds}</span><span class="k">Dormitorios</span></div>`);
    if (p.baths != null) specRow.push(`<div class="dspec">${IC.bath}<span class="v">${p.baths}</span><span class="k">Baños</span></div>`);
    if (p.parking != null) specRow.push(`<div class="dspec">${IC.car}<span class="v">${p.parking || "—"}</span><span class="k">Cocheras</span></div>`);
    if (p.area) specRow.push(`<div class="dspec">${IC.ruler}<span class="v" style="font-size:1.1rem">${p.area}</span><span class="k">Terreno</span></div>`);
    specRow.push(`<div class="dspec">${IC.pin}<span class="v" style="font-size:1.1rem">${p.type}</span><span class="k">Tipo</span></div>`);

    contentEl.innerHTML = `
      <div class="dlayout">
        <div class="dmain">
          <div class="dhead" data-reveal>
            <div class="dhead__op">${p.operation} · Tandil</div>
            <h1>${p.title} <em>—</em> ${p.address}</h1>
            <div class="dhead__addr">${IC.pin} ${p.zone}</div>
          </div>
          <div class="dspecs" data-reveal>${specRow.join("")}</div>
          <div class="dbody" data-reveal>
            <h2>Sobre esta propiedad</h2>
            <p>${p.description}</p>
            <h2>Características</h2>
            <ul class="dfeatures">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
          </div>
        </div>
        <aside>
          <div class="dcard ${p.status === "Vendida" ? "dcard--sold" : ""}" data-reveal>
            <div class="dcard__op">${p.operation} · ${p.type}</div>
            <div class="dcard__price">${priceLabel(p)}</div>
            ${p.priceNote ? `<div class="dcard__pricenote">${p.priceNote}</div>` : ""}
            ${p.status === "Vendida" ? `<div class="dcard__soldnote">✓ Esta propiedad ya fue vendida</div>` : ""}
            <div class="dcard__agent">
              <img src="assets/brand/adrian.jpg" alt="Adrián Varales" />
              <div>
                <div class="nm">Adrián Varales</div>
                <div class="rl">Asesor inmobiliario</div>
              </div>
            </div>
            <a class="btn btn-primary" href="${waProp(p)}" target="_blank" rel="noopener">${IC.wa} Consultar por WhatsApp</a>
            <div style="height:.7rem"></div>
            <a class="btn btn-ghost" href="${waLink(`Hola Adrián, quiero coordinar una visita a "${p.title} — ${p.address}".`)}" target="_blank" rel="noopener">Coordinar una visita</a>
            <p class="dcard__note">Te responde Adrián personalmente. Asesoramiento sin compromiso.</p>
          </div>
        </aside>
      </div>`;

    /* Related */
    const relatedEl = document.getElementById("related");
    if (relatedEl) {
      const rel = PROPERTIES.filter((x) => x.id !== p.id).sort((a, b) => (a.type === p.type ? -1 : 1)).slice(0, 3);
      relatedEl.innerHTML = rel.map((x) => card(x, "third")).join("");
    }

    /* Lightbox */
    const images = order.map((k) => propImage(p.id, k));
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lbImg");
    const lbCount = document.getElementById("lbCount");
    let idx = 0;
    function show(i) { idx = (i + images.length) % images.length; lbImg.src = images[idx]; lbCount.textContent = `${idx + 1} / ${images.length}`; }
    function open(i) { show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
    galleryEl.querySelectorAll("[data-lb]").forEach((el) =>
      el.addEventListener("click", () => open(+el.getAttribute("data-lb")))
    );
    document.getElementById("lbClose").addEventListener("click", close);
    document.getElementById("lbNext").addEventListener("click", () => show(idx + 1));
    document.getElementById("lbPrev").addEventListener("click", () => show(idx - 1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(idx + 1);
      if (e.key === "ArrowLeft") show(idx - 1);
    });

    observeReveals(detailRoot);
  }

  /* ---------- Floating WhatsApp button (todas las páginas) ---------- */
  (function () {
    const fab = document.createElement("a");
    fab.className = "wa-fab";
    fab.href = waGeneral;
    fab.target = "_blank";
    fab.rel = "noopener";
    fab.setAttribute("aria-label", "Escribir a Adrián por WhatsApp");
    fab.innerHTML = `<span class="wa-fab__icon">${IC.wa}</span><span class="wa-fab__label">Hablá con Adrián</span>`;
    document.body.appendChild(fab);
  })();

  /* ---------- init shared ---------- */
  observeReveals(document);
  countUp();
})();

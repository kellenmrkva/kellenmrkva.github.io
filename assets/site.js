(function () {
  const PUBS = window.PUBS || [], TOPICS = window.TOPICS || [];
  const byId = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const boldMe = (s) => esc(s); // name not bolded
  const topicLabel = Object.fromEntries(TOPICS.map((t) => [t.slug, t.label]));
  const SHOW_FLAGS = false; // set to false (or delete the `tbc` lines) once everything is confirmed

  const LINK_LABELS = { paper: "Paper", pdf: "PDF", osf: "Data & code (OSF)", researchgate: "ResearchGate" };

  function entry(p) {
    const li = document.createElement("li");
    li.className = "pub";
    li.id = p.id;
    li.dataset.topics = (p.topics || []).join(" ");

    let cite;
    if (p.section === "published") {
      cite = `${boldMe(p.authors)} (${esc(p.year)}). <span class="title">${esc(p.title)}</span>. <span class="venue">${esc(p.venue)}</span>.`;
      if (p.kind) cite += ` <span class="note">${esc(p.kind)}</span>`;
    } else {
      cite = `<span class="title">${esc(p.title)}</span>${p.authors ? " " + esc("(" + p.authors + ")") : ""}`;
      if (p.status) cite += ` <span class="note">${esc(p.status)}</span>`;
    }
    if (SHOW_FLAGS && p.tbc) cite += `<span class="flag" title="${esc(p.tbc)}">⚑ confirm</span>`;

    const meta = [];
    if (p.summary) meta.push(`<button class="lnk" aria-expanded="false" aria-controls="${p.id}-sum">Summary <span class="car">▸</span></button>`);
    for (const k of ["paper", "pdf", "osf", "researchgate"]) {
      if (p.links && p.links[k]) meta.push(`<a class="lnk" href="${esc(p.links[k])}" target="_blank" rel="noopener">${LINK_LABELS[k]}</a>`);
    }
    const press = (p.press || []).map((pr) => `<a href="${esc(pr.url)}" target="_blank" rel="noopener">${esc(pr.outlet)}${pr.label ? " (" + esc(pr.label) + ")" : ""}</a>`);

    li.innerHTML =
      `<p class="cite">${cite}</p>` +
      (meta.length ? `<div class="meta">${meta.join('<span class="sep">|</span>')}</div>` : "") +
      (press.length ? `<div class="presslinks">In the press: ${press.join(", ")}</div>` : "") +
      (p.awards || []).map((a) => `<div class="award">${esc(a)}</div>`).join("") +
      (p.summary ? `<div class="summary hidden" id="${p.id}-sum">${esc(p.summary)}</div>` : "");

    const b = li.querySelector("button[aria-controls]");
    if (b) b.addEventListener("click", () => {
      const open = b.getAttribute("aria-expanded") === "true";
      b.setAttribute("aria-expanded", String(!open));
      byId(p.id + "-sum").classList.toggle("hidden", open);
    });
    return li;
  }

  function render() {
    for (const sec of ["published", "working", "progress"]) {
      const ul = byId("list-" + sec);
      if (!ul) continue;
      PUBS.filter((p) => p.section === sec).forEach((p) => ul.appendChild(entry(p)));
    }
    const chips = byId("chips");
    if (!chips) return;
    const all = document.createElement("button");
    all.className = "chip"; all.dataset.slug = ""; all.textContent = "All";
    chips.appendChild(all);
    for (const t of TOPICS) {
      const n = PUBS.filter((p) => (p.topics || []).includes(t.slug)).length;
      const c = document.createElement("button");
      c.className = "chip"; c.dataset.slug = t.slug;
      c.innerHTML = `${esc(t.label)}<span class="n">${n}</span>`;
      chips.appendChild(c);
    }
    chips.addEventListener("click", (e) => {
      const c = e.target.closest(".chip");
      if (!c) return;
      const slug = c.dataset.slug;
      const current = (location.hash || "").slice(1);
      const next = slug && slug !== current ? slug : "";
      if (next) location.hash = next; else history.replaceState(null, "", location.pathname + location.search), applyFilter("");
    });
  }

  function applyFilter(slug) {
    if (slug && !topicLabel[slug]) slug = ""; // hash is a paper anchor, not a topic
    document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.slug === slug)));
    let shown = 0;
    document.querySelectorAll(".pub").forEach((li) => {
      const ok = !slug || li.dataset.topics.split(" ").includes(slug);
      li.classList.toggle("hidden", !ok);
      if (ok) shown++;
    });
    for (const sec of ["published", "working", "progress"]) {
      const ul = byId("list-" + sec);
      if (!ul) continue;
      const any = [...ul.children].some((li) => !li.classList.contains("hidden"));
      byId("sec-" + sec).classList.toggle("hidden", !any);
    }
    const note = byId("filternote");
    if (note) note.innerHTML = slug ? `Showing ${shown} item${shown === 1 ? "" : "s"} on <b>${esc(topicLabel[slug])}</b>. <a href="#" id="clearf">Show all</a>` : "";
    const clr = byId("clearf");
    if (clr) clr.addEventListener("click", (e) => { e.preventDefault(); history.replaceState(null, "", location.pathname + location.search); applyFilter(""); });
  }

  function fromHash() {
    const h = (location.hash || "").slice(1);
    if (topicLabel[h]) { applyFilter(h); byId("research-topics")?.scrollIntoView({ block: "start" }); }
    else { applyFilter(""); if (h && byId(h)) byId(h).scrollIntoView({ block: "center" }); }
  }

  render();
  fromHash();
  window.addEventListener("hashchange", fromHash);
})();

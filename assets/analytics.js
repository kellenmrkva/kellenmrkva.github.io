/*
  Visitor stats via GoatCounter (dashboard: https://kellenmrkva.goatcounter.com)
  - Counts page views only on the live site, so previews and testing don't add fake visits.
  - Any element with a data-gc="..." attribute is counted as a click event under that name.
*/
(function () {
  if (location.hostname !== "kellenmrkva.github.io") return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://kellenmrkva.goatcounter.com/count");
  document.head.appendChild(s);

  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("[data-gc]");
    if (!el || !window.goatcounter || !window.goatcounter.count) return;
    window.goatcounter.count({ path: el.getAttribute("data-gc"), title: document.title, event: true });
  }, true);
})();

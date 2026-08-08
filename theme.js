// Minimal theme toggle: remembers choice, otherwise follows OS.
(function () {
  var KEY = "pcw-theme";
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved === "dark" || saved === "light") {
    document.documentElement.setAttribute("data-theme", saved);
  }
  window.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    function label() {
      var cur = document.documentElement.getAttribute("data-theme");
      var dark = cur ? cur === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      btn.textContent = dark ? "☀ Light" : "☾ Dark";
    }
    label();
    btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var dark = cur ? cur === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = dark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      label();
    });
  });
})();

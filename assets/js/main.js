(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById("theme-toggle");
  var menuBtn = document.getElementById("menu-toggle");
  var links = document.getElementById("nav-links");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    if (themeBtn) {
      themeBtn.textContent = theme === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19";
      themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  setTheme(root.getAttribute("data-theme") || "light");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  if (menuBtn && links) {
    menuBtn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();

(function () {
  const KEY = "bwt_lang";
  const btnId = "langToggle";

  function getLang() {
    return localStorage.getItem(KEY) || "en";
  }
  function setLang(v) {
    localStorage.setItem(KEY, v);
  }
  function applyLang(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-lang]").forEach(el => {
      el.style.display = (el.getAttribute("data-lang") === lang) ? "" : "none";
    });
    const btn = document.getElementById(btnId);
    if (btn) btn.textContent = (lang === "en") ? "中文" : "EN";
  }
  function toggle() {
    const next = (getLang() === "en") ? "zh" : "en";
    setLang(next);
    applyLang(next);
  }

  window.BWT_LANG = { getLang, setLang, applyLang, toggle };

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getLang());
    const btn = document.getElementById(btnId);
    if (btn) btn.addEventListener("click", (e) => { e.preventDefault(); toggle(); });
  });
})();

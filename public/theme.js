/* =====================================================
   Starry – Global Theme System
   Loads + applies saved theme on every page
===================================================== */

const THEMES = {
    blue: {
        "--bg-top": "#1e40af",
        "--bg-mid": "#1e3a8a",
        "--bg-deep": "#0f172a",
        "--bg-bottom": "#020617",

        "--accent-blue": "#60a5fa",
        "--accent-cyan": "#22d3ee"
    },

    purple: {
        "--bg-top": "#6d28d9",
        "--bg-mid": "#4c1d95",
        "--bg-deep": "#1e0b3c",
        "--bg-bottom": "#020617",

        "--accent-blue": "#a78bfa",
        "--accent-cyan": "#c4b5fd"
    },

    green: {
        "--bg-top": "#065f46",
        "--bg-mid": "#064e3b",
        "--bg-deep": "#022c22",
        "--bg-bottom": "#020617",

        "--accent-blue": "#34d399",
        "--accent-cyan": "#6ee7b7"
    },

    red: {
        "--bg-top": "#7f1d1d",
        "--bg-mid": "#450a0a",
        "--bg-deep": "#2a0606",
        "--bg-bottom": "#140202",

        "--accent-blue": "#f87171",
        "--accent-cyan": "#fca5a5"
    },

    amoled: {
        "--bg-top": "#000000",
        "--bg-mid": "#000000",
        "--bg-deep": "#000000",
        "--bg-bottom": "#000000",

        "--accent-blue": "#ffffff",
        "--accent-cyan": "#888888"
    }
};

/* Apply theme to :root */
function applyTheme(name) {
    const theme = THEMES[name];
    if (!theme) return;

    Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
}

/* Load saved theme or fallback */
(function loadTheme() {
    let saved = localStorage.getItem("starry-theme");

    if (!saved || !THEMES[saved]) {
        saved = "blue";
        localStorage.setItem("starry-theme", saved);
    }

    applyTheme(saved);
})();

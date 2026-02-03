document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const theme = btn.dataset.theme;
        applyTheme(theme);
        localStorage.setItem("starry-theme", theme);
    });
});

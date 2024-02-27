document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const primaryNav = document.querySelector(".nav__list");
    const toggleButton = document.querySelector(".nav-toggle");

    toggleButton.addEventListener("click", () => {
        const isExpanded = primaryNav.getAttribute("aria-expanded") === "true";
        primaryNav.setAttribute("aria-expanded", !isExpanded);
    });

    document.addEventListener("click", (e) => {
        const isClickInsideNav = primaryNav.contains(e.target);
        const isClickOnToggleButton = toggleButton.contains(e.target);
        if (!isClickInsideNav && !isClickOnToggleButton) {
            primaryNav.setAttribute("aria-expanded", "false");
        }
    });

    // Close nav when pressing ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            primaryNav.setAttribute("aria-expanded", "false");
        }
    });
}); 
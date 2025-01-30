document.addEventListener("DOMContentLoaded", function() {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
        metaThemeColor = document.createElement("meta");
        metaThemeColor.setAttribute("name", "theme-color");
        document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute("content", "#cfff00"); // Grön färg
});

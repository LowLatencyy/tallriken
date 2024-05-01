document.addEventListener('DOMContentLoaded', function() {
    function loadHTMLContent(url, containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            fetch(url)
                .then(response => response.text())
                .then(html => container.innerHTML = html)
                .catch(error => console.error(`Failed to load content from ${url}:`, error));
        }
    }

    // Ladda navigationsmenyn
    loadHTMLContent('navbar.html', 'navbar-container');

    // Ladda sidfoten
    loadHTMLContent('footer.html', 'footer-container');
});

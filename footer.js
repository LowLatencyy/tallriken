document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        fetch('/footer.html')  // Använd absolut sökväg här
            .then(response => response.text())
            .then(html => footerContainer.innerHTML = html)
            .catch(error => console.error('Failed to load footer:', error));
    }
});

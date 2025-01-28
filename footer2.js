// Dynamiskt ladda in footer2 från footer2.html
document.addEventListener("DOMContentLoaded", () => {
    fetch('footer2.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Det gick inte att ladda footern:', error));
});

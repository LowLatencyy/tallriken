document.addEventListener("DOMContentLoaded", async function() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");

    const response = await fetch("articles.json");
    const articles = await response.json();
    const article = articles.find(a => a.slug === slug);

    if (article) {
        document.getElementById("article-title").textContent = article.title;
        document.getElementById("article-image").src = article.image;

        // Lägg till riktig artikeltext
        document.getElementById("article-content").innerHTML = `
            <p>Stekpannor är ett av de viktigaste köksredskapen och det finns flera typer att välja mellan:</p>
            <ul>
                <li><strong>Gjutjärn:</strong> Håller värmen bra och ger fin stekyta.</li>
                <li><strong>Rostfritt stål:</strong> Perfekt för hög värme och såsbaserade rätter.</li>
                <li><strong>Non-stick:</strong> Enkel att rengöra och kräver mindre fett.</li>
            </ul>
            <p>Vilken stekpanna passar dig bäst? Läs vår guide för att hitta den perfekta!</p>
        `;
    } else {
        document.body.innerHTML = "<h1>Artikel hittades inte</h1>";
    }
});

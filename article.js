document.addEventListener("DOMContentLoaded", async function () {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");

    const response = await fetch("articles.json");
    const articles = await response.json();
    const article = articles.find(a => a.slug === slug);

    if (article) {
        document.getElementById("article-title").textContent = article.title;
        document.getElementById("article-image").src = article.image;

        // Se till att det finns content, annars sätt ett standardmeddelande
        document.getElementById("article-content").innerHTML = article.content || "<p>Ingen artikeltext tillgänglig.</p>";

        // Beräkna antal ord och lästid
        const wordCount = (article.content || "").split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);

        // Lägg till lästid i artikeln
        const readTimeElement = document.createElement("p");
        readTimeElement.classList.add("read-time");
        readTimeElement.innerHTML = `⏳ ${readTime} min lästid`;
        document.getElementById("article-content").prepend(readTimeElement);

        // ✅ Lägg till relaterade artiklar
        const relatedContainer = document.createElement("div");
        relatedContainer.classList.add("related-articles");
        relatedContainer.innerHTML = "<h3>Relaterade artiklar</h3>";

        // Filtrera relaterade artiklar (baserat på kategori och taggar)
        const relatedArticles = articles.filter(a =>
            (a.category === article.category || (a.tags && article.tags && a.tags.some(tag => article.tags.includes(tag)))) &&
            a.slug !== article.slug
        );

        // Visa max 3 relaterade artiklar
        relatedArticles.slice(0, 3).forEach(related => {
            const relatedElement = document.createElement("div");
            relatedElement.innerHTML = `<a href="artikel.html?slug=${related.slug}">${related.title}</a>`;
            relatedContainer.appendChild(relatedElement);
        });

        document.getElementById("article-content").appendChild(relatedContainer);

        // ✅ Lägg till "Senaste artiklar"
        const latestContainer = document.createElement("div");
        latestContainer.classList.add("latest-articles");
        latestContainer.innerHTML = "<h3>Senaste artiklar</h3>";

        const latestArticles = articles.slice(-3); // Hämta de tre senaste artiklarna
        latestArticles.forEach(latest => {
            const latestElement = document.createElement("div");
            latestElement.innerHTML = `<a href="artikel.html?slug=${latest.slug}">${latest.title}</a>`;
            latestContainer.appendChild(latestElement);
        });

        document.getElementById("article-content").appendChild(latestContainer);

    } else {
        document.body.innerHTML = "<h1>Artikel hittades inte</h1>";
    }



    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    // Instagram - Kan inte direkt dela länkar på webben, så vi öppnar Instagram-appen istället
    document.getElementById("share-instagram").href = "instagram://app";

    // Messenger
    document.getElementById("share-messenger").href = `fb-messenger://share/?link=${pageUrl}`;

    // Snapchat - Kräver att användaren är inloggad
    document.getElementById("share-snapchat").href = `https://www.snapchat.com/share?url=${pageUrl}`;

    // WhatsApp
    document.getElementById("share-whatsapp").href = `https://api.whatsapp.com/send?text=${pageTitle} ${pageUrl}`;

    // SMS (för mobiler)
    document.getElementById("share-sms").href = `sms:?body=${pageTitle} ${pageUrl}`;
});


// Delningsknappar
document.getElementById("share-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?url=${window.location.href}&text=Kolla in den här artikeln!`;
document.getElementById("share-whatsapp").href = `https://api.whatsapp.com/send?text=Kolla in den här artikeln! ${window.location.href}`;

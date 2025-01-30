document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("articles.json");
    const articles = await response.json();

    // Sortera efter senaste datum
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    const latestArticlesContainer = document.getElementById("latest-articles-container");

    // Visa de tre senaste artiklarna
    articles.slice(0, 3).forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("latest-article");
        articleElement.innerHTML = `
            <h3><a href="artikel.html?slug=${article.slug}">${article.title}</a></h3>
            <p>${article.excerpt}</p>
            <span class="date">${article.date}</span>
        `;
        latestArticlesContainer.appendChild(articleElement);
    });
});

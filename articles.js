document.addEventListener("DOMContentLoaded", async function () {
    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category"); // Hämtar kategori från URL

    const response = await fetch("articles.json"); // Hämta JSON-fil
    const articles = await response.json(); // Konvertera till array

    // Filtrera artiklar om en kategori är vald
    const filteredArticles = selectedCategory ?
        articles.filter(a => a.category === selectedCategory) :
        articles;

    const articlesContainer = document.getElementById("articles-list");
    const categoriesContainer = document.getElementById("categories");

    let categories = new Set();

    filteredArticles.forEach(article => {
        const wordsPerMinute = 200; // Genomsnittlig läshastighet
        const readTime = Math.ceil((article.wordCount || 400) / wordsPerMinute);

        // Skapa artikelkort
        const articleElement = document.createElement("div");
        articleElement.classList.add("article-card");
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h2><a href="artikel.html?slug=${article.slug}">${article.title}</a></h2>
            <p>${article.excerpt}</p>
            <span class="category">${article.category}</span>
            <span class="date">📅 ${article.date}</span>
            <span class="read-time">⏳ ${readTime} min lästid</span>
            <a class="read-more-button" href="artikel.html?slug=${article.slug}">Läs vidare →</a>
        `;

        articlesContainer.appendChild(articleElement);
        categories.add(article.category);
    });

    // Skapa kategorier i menyn
    categories.forEach(category => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="artiklar.html?category=${category}">${category}</a>`;
        categoriesContainer.appendChild(li);
    });
});

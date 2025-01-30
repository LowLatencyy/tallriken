document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("articles.json"); // Hämta JSON-fil
    const articles = await response.json(); // Konvertera till array

    const articlesContainer = document.getElementById("articles-list");
    const categoriesContainer = document.getElementById("categories");

    let categories = new Set();

    articles.forEach(article => {
        // Skapa artikelkort
        const articleElement = document.createElement("div");
        articleElement.classList.add("article-card");
        articleElement.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <h2><a href="artikel.html?slug=${article.slug}">${article.title}</a></h2>
        <p>${article.excerpt}</p>
        <span class="category">${article.category}</span>
        <span class="date">📅 ${article.date}</span>
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

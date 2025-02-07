const apiKey = 'AIzaSyBFecFz9KFsPnw6bjAKv0N0CSbs3Iszlag';
const spreadsheetId = '1RN9SQRzletJnH8BAgJEQCI0BtbpsHQU6Pv2L4FDGXEM';
const dataRange = 'Blad1!A2:K';
const synonymRange = 'Ingredienser!A2:B';
const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${dataRange}?key=${apiKey}`;
const synonymUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${synonymRange}?key=${apiKey}`;

let allData = [];
let currentFilteredData = []; // Ny global variabel för att hålla den aktuellt filtrerade datan
let selectedTags = [];
let isVegFilterActive = false;
let isLangFilterActive = false;
let ingredientSynonyms = {};
let searchForDishes = false; // eller true, beroende på din standardinställning
let primaryIngredients = {};
let nonPrimarySynonyms = {};
let groupedIngredients = {};
// Lägg till dessa nya variabler för sidindelning
let currentPage = 1;
const resultsPerPage = 14;
let totalPages = 0;



// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
}


async function loadData() {
    try {
        // Load the main data as before
        const dataResponse = await fetch(dataUrl);
        const data = await dataResponse.json();
        allData = data.values; // Assume this includes all your recipe data
        console.log('Main data loaded:', allData);

        // Load synonym data
        const synonymResponse = await fetch(synonymUrl);
        const synonymData = await synonymResponse.json();
        primaryIngredients = {}; // Reset the mapping object for primary ingredients
        nonPrimarySynonyms = {}; // Reset the mapping object for non-primary synonyms
        synonymData.values.forEach(row => {
            const ingredient = row[0]?.toLowerCase().trim(); // Ingredient
            const synonyms = row[1]?.toLowerCase().split(',').map(s => s.trim()); // Synonyms
            if (row[2]?.toLowerCase() === 'ja') {
                primaryIngredients[ingredient] = synonyms;
            } else {
                nonPrimarySynonyms[ingredient] = synonyms;
            }
        });
        console.log('Primary ingredients loaded:', primaryIngredients);
        console.log('Non-primary synonyms loaded:', nonPrimarySynonyms);

        // Load data for grouped ingredients
        const groupedIngResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Ingredienser!A2:C?key=${apiKey}`);
        const groupedIngData = await groupedIngResponse.json();
        groupedIngredients = {};
        groupedIngData.values.forEach(row => {
            const searchTerm = row[1]?.toLowerCase().trim(); // Search term from column B
            const ingredientsGroup = row[2]?.toLowerCase().split(',').map(ing => ing.trim()); // Grouped ingredients from column C
            if (ingredientsGroup && ingredientsGroup.length > 0) {
                groupedIngredients[searchTerm] = ingredientsGroup;
            }
        });
        console.log('Grouped ingredients loaded:', groupedIngredients);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



async function loadSynonyms() {
    try {
        const synonymResponse = await fetch(synonymUrl);
        const synonymData = await synonymResponse.json();

        // Logga ut hela synonymData-objektet för att se vad som faktiskt laddas
        console.log('Synonym data:', synonymData);

        // Kontrollera om synonymData.values är definierat och är en array
        if (Array.isArray(synonymData.values)) {
            ingredientSynonyms = {}; // Återställ mappningsobjektet för synonymer

            synonymData.values.forEach(row => {
                // Kontrollera att varje rad har två element
                if (row.length >= 2) {
                    const ingredients = row[0]?.toLowerCase().trim(); // Huvudingredienserna
                    const searchTerms = row[1]?.toLowerCase().split(',').map(s => s.trim()); // Sökorden

                    // Skapa en omvänd lookup där varje sökterm pekar på huvudingrediensen
                    searchTerms.forEach(term => {
                        ingredientSynonyms[term] = ingredients;
                    });
                } else {
                    console.error('Invalid row format:', row);
                }
            });

            console.log('Synonyms and search terms loaded:', ingredientSynonyms);
        } else {
            console.error('synonymData.values is not an array:', synonymData.values);
        }
    } catch (error) {
        console.error('Error loading synonyms:', error);
    }
}



async function performSearch() {
    // Visa loader och overlay
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';

    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }, 1200);

    // Återställ till första sidan vid ny sökning
    currentPage = 1;

    // Hämta sökterm och gör den till gemener
    let searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    console.log('Search term:', searchTerm);
    let filteredData = allData;

    if (searchForDishes) {
        // Filtrera efter maträtter (kolumn 0 = Namn på rätten)
        filteredData = allData.filter(row => row[0]?.toLowerCase().includes(searchTerm));

        if (isVegFilterActive) {
            filteredData = filteredData.filter(row => row[6]?.toLowerCase() === 'ja');
        }
        if (isLangFilterActive) {
            filteredData = filteredData.filter(row => row[7]?.toLowerCase() === 'ja');
        }
    } else {
        // Filtrera efter ingredienser
        let searchIngredients = selectedTags.flatMap(tag => {
            if (groupedIngredients[tag]) {
                return groupedIngredients[tag];
            } else if (ingredientSynonyms[tag]) {
                return ingredientSynonyms[tag].split(',').map(ing => ing.trim());
            } else {
                return [tag];
            }
        });

        console.log('Ingredients to search for:', searchIngredients);

        filteredData = allData.filter(row => {
            const ingredients = row[1]?.toLowerCase().split(',').map(ing => ing.trim());
            return searchIngredients.every(ingredient => ingredients.includes(ingredient));
        });

        if (isVegFilterActive) {
            filteredData = filteredData.filter(row => row[6]?.toLowerCase() === 'ja');
        }
        if (isLangFilterActive) {
            filteredData = filteredData.filter(row => row[7]?.toLowerCase() === 'ja');
        }
    }

    // Blanda resultaten för variation
    filteredData = shuffleArray(filteredData);

    // Spara filtrerad data för paginering
    currentFilteredData = filteredData;
    totalPages = Math.ceil(currentFilteredData.length / resultsPerPage);

    // 🆕 Uppdatera räknaren för antal sökresultat
    let resultCountDiv = document.getElementById('result-count');
    if (filteredData.length > 0) {
        resultCountDiv.style.display = 'block';
        resultCountDiv.innerHTML = `Hittade <strong>${filteredData.length}</strong> resultat.`;
    } else {
        resultCountDiv.style.display = 'none'; // Dölj om inga resultat hittades
    }

    // Kontrollera om det finns några resultat
    if (filteredData.length === 0) {
        document.getElementById('data-container').innerHTML = '';  // Rensar resultatlistan
        document.getElementById('pagination-controls').innerHTML = ''; // Tar bort sidindelning
        document.getElementById('no-results-message').style.display = 'block';  // Visa meddelande och GIF
    } else {
        document.getElementById('no-results-message').style.display = 'none';  // Dölj meddelande
        displayData(currentFilteredData, currentPage);
    }
}





// Fortsätt med resten av din JavaScript-kod här...




function addTagFromButton() {
    const inputField = document.getElementById('searchInput');
    const input = inputField.value.trim().toLowerCase();

    if (searchForDishes) {
        console.log("Lägg till knappen är inaktiv när sökning på maträtter är aktiverad");
        return;
    }

    if (input && !selectedTags.includes(input)) {
        selectedTags.push(input);
        updateTagContainer();
        performSearch();      // Perform the search with the new tag
    }

    inputField.value = ''; // Rensa inputfältet
}

function toggleVegFilter() {
    let vegSwitch = document.getElementById('vegSwitch');
    isVegFilterActive = vegSwitch.checked;
}

function toggleLangFilter() {
    let langSwitch = document.getElementById('langSwitch');
    isLangFilterActive = langSwitch.checked;
}

function toggleSearchMode() {
    const searchModeSwitch = document.getElementById('searchModeSwitch');
    searchForDishes = searchModeSwitch.checked;
    if (searchForDishes) {
        console.log("Sökning på maträtter aktiverad");
    } else {
        console.log("Sökning på ingredienser aktiverad");
    }
}

document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const input = this.value.trim().toLowerCase();

        // Om sökning på maträtter är aktiverad, utför sökningen direkt.
        if (searchForDishes) {
            performSearch();
            return;
        }

        // Lägg till tagg om möjligt och utför sökning.
        if (input && !selectedTags.includes(input)) {
            selectedTags.push(input);
            updateTagContainer();
        }

        performSearch(); // Utför sökningen direkt efter att en tagg har lagts till eller söktermen angivits.
        this.value = ''; // Rensa inputfältet
    }
});







function updateTagContainer() {
    const container = document.querySelector('.tag-container');
    container.innerHTML = selectedTags.map(tag => `
<div class="tag">
    ${tag}
    <button class="tag-close" onclick="removeTag('${tag}')">×</button>
</div>
`).join('');
}

function displayData(data, page) {
    var startIndex = (page - 1) * resultsPerPage;
    var endIndex = startIndex + resultsPerPage;
    var pageData = data.slice(startIndex, endIndex);
    var dataContainer = document.getElementById('data-container');
    dataContainer.classList.add('initial');

    var htmlContent = '';
    pageData.forEach((row, index) => {
        htmlContent += `<div class="matratt">`;
        htmlContent += `<div class="matratt-title title-background"><h2>${row[0]}</h2></div>`; // Maträttens namn

        /* // Knapp för att visa ingredienser
        htmlContent += `<button class="ingrediens-knapp" onclick="toggleIngredienser(this)">Visa Ingredienser</button>`;

        // Rullista för ingredienser med mouseleave-händelse
        htmlContent += `<div class="ingrediens-lista" onmouseleave="hideIngredienser(this)">${row[1].split(', ').join('<br>')}</div>`; */

        htmlContent += row[5]; // Instagram-inlägg
        htmlContent += '</div>';
    });

    document.getElementById('data-container').innerHTML = htmlContent;

    // Processa Instagram-inlägg
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }

    // Visa pagineringskontroller
    displayPaginationControls();

    // Once search is done, hide the loader
    // Consider using a timeout if the search is too fast to show animation
    setTimeout(hideLoader);
}

function displayPaginationControls() {
    var paginationHtml = '';
    const pageWindow = 2; // Antal sidor att visa på varje sida om den aktuella sidan
    let startPage = Math.max(currentPage - pageWindow, 1);
    let endPage = Math.min(currentPage + pageWindow, totalPages);

    // Lägg till länk till första sidan och ellips om det behövs
    if (startPage > 1) {
        paginationHtml += `<button onclick="goToPage(1)">1</button>`;
        if (startPage > 2) paginationHtml += `<span>...</span>`; // Ellips för att visa gap
    }

    // Visa sidnummer nära den aktuella sidan
    for (let i = startPage; i <= endPage; i++) {
        paginationHtml += `<button class="${i === currentPage ? 'current-page' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }

    // Lägg till ellips och länk till sista sidan om det behövs
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) paginationHtml += `<span>...</span>`; // Ellips för att visa gap
        paginationHtml += `<button onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }

    document.getElementById('pagination-controls').innerHTML = paginationHtml;
}

function goToPage(pageNumber) {
    // Visa loadern och överlägget
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';

    // Sätt en timer för att dölja både loadern och överlägget efter 1.2 sekunder
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }, 1200);

    // Uppdatera currentPage till det nya sidnumret
    currentPage = pageNumber;

    // Utför den asynkrona uppdateringen och scrolla upp efteråt
    displayData(currentFilteredData, currentPage)
        .then(() => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';

            setTimeout(() => {
                const searchContainer = document.querySelector('.search-container'); // Hämta sökfältscontainern
                if (searchContainer) {
                    const offsetTop = searchContainer.getBoundingClientRect().top + window.scrollY - 50;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                } else {
                    console.warn("Kunde inte hitta '.search-container' för scrollning.");
                }
            }, 300); // Vänta 300ms innan scrollning för att säkerställa att sidan uppdateras
        })
        .catch(error => {
            console.error('Ett fel uppstod vid uppdatering av sidan: ', error);
        });
}









function toggleIngredienser(button) {
    var ingrediensLista = button.nextElementSibling;
    ingrediensLista.style.display = ingrediensLista.style.display === 'block' ? 'none' : 'block';
}

function hideIngredienser(ingrediensLista) {
    ingrediensLista.style.display = 'none';
}



window.onload = async function () {
    await loadData();
    await loadSynonyms();
    // Eventuella ytterligare initialiseringar eller funktioner som ska köras efter att data och synonymer har laddats
};

window.addEventListener('DOMContentLoaded', function () {
    const searchContainer = document.querySelector('.search-container');
    const tagContainer = document.querySelector('.tag-container');
    let lastScrollTop = 0;


    // Ta bort eller kommentera bort denna del av koden för att förhindra att sökfältet göms vid scrollning
    /*
            window.addEventListener('scroll', function () {
                var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

                if (currentScroll > lastScrollTop) {
                    // Användaren scrollar neråt
                    console.log('Scrolling down');
                    searchContainer.style.opacity = '0';
                    searchContainer.style.visibility = 'hidden';
                    tagContainer.style.opacity = '0';
                    tagContainer.style.visibility = 'hidden';
                } else {
                    // Användaren scrollar uppåt
                    console.log('Scrolling up');
                    searchContainer.style.opacity = '1';
                    searchContainer.style.visibility = 'visible';
                    tagContainer.style.opacity = '1';
                    tagContainer.style.visibility = 'visible';
                }
                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            }, false);
            */
});








function removeTag(tagToRemove) {
    selectedTags = selectedTags.filter(tag => tag !== tagToRemove);
    updateTagContainer(); // Uppdaterar taggkontainern
    performSearch(); // Utför en ny sökning med uppdaterade taggar
}

document.addEventListener('DOMContentLoaded', (event) => {
    const triggerInput = document.querySelector('.nav__trigger-input');
    const searchContainer = document.querySelector('.search-container');
    let lastScrollTop = 0;

    triggerInput.addEventListener('change', () => {
        if (triggerInput.checked) {
            searchContainer.style.zIndex = '-1';
        } else {
            searchContainer.style.zIndex = '1000';
        }
    });

});

function adjustIframeStyles(iframe) {
    const mobileBreakpoint = 768; // Definiera din brytpunkt för mobil
    if (window.innerWidth <= mobileBreakpoint) {
        // Dina nuvarande justeringar
        const parentWidth = iframe.parentElement.offsetWidth;
        const aspectRatio = 4 / 3;
        const height = parentWidth / aspectRatio;

        iframe.style.width = parentWidth + 'px';
        iframe.style.height = height + 'px';
    } else {
        // Här kan du sätta vad som ska gälla för desktop
        iframe.style.width = '100%'; // Återställ bredden
        iframe.style.height = 'auto'; // Återställ höjden
    }

    iframe.style.minHeight = '400px';
    iframe.style.minWidth = '150px'; // Justera min-width här
}

function observeIframes() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.tagName === 'IFRAME' && node.classList.contains('instagram-media')) {
                    adjustIframeStyles(node);
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

window.onload = async function () {
    await loadData();
    await loadSynonyms();
    observeIframes(); // Starta observer för att justera iframes dynamiskt
};


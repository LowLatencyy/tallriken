document.addEventListener('DOMContentLoaded', async function () {
    const apiKey = 'AIzaSyBFecFz9KFsPnw6bjAKv0N0CSbs3Iszlag';
    const spreadsheetId = '1RN9SQRzletJnH8BAgJEQCI0BtbpsHQU6Pv2L4FDGXEM';
    let allData = [];
    const selectedFilters = { country: [], protein: [], mealType: [] };
    let currentPage = 1;
    const resultsPerPage = 14; // eller vilket antal per sida du vill ha
    let totalPages = 0;

    function filterData() {
        const filteredResults = allData.filter(row => {
            // Kontrollera om varje filter är tomt eller om cellen innehåller något av de valda filtren
            const countryMatch = !selectedFilters.country.length || selectedFilters.country.some(f => row[3].toLowerCase().includes(f.toLowerCase()));
            const proteinMatch = !selectedFilters.protein.length || selectedFilters.protein.some(f => row[4].toLowerCase().includes(f.toLowerCase()));
            const mealTypeMatch = !selectedFilters.mealType.length || selectedFilters.mealType.some(f => row[9].toLowerCase().includes(f.toLowerCase()));
            return countryMatch && proteinMatch && mealTypeMatch;
        });
        displayResults(filteredResults);
    }

    // Funktion för att ladda data från Google Sheets
    async function loadData() {
        const dataRange = 'Blad1!A2:J';
        try {
            const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${dataRange}?key=${apiKey}`);
            const data = await response.json();
            allData = data.values;
            console.log('Data loaded', allData);
        } catch (error) {
            console.error('Error loading data', error);
        }
    }

    await loadData();

    // Funktion för att hantera klick på filterknappar
    document.querySelectorAll('.image-button').forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.dataset.filter;
            const category = this.dataset.category;
 // Ändra från 'meal-type' till 'mealType' till exempel

            // Toggle filter i den valda kategorin
            if (selectedFilters[category].includes(filter)) {
                selectedFilters[category] = selectedFilters[category].filter(f => f !== filter);
                this.classList.remove('selected'); // Ta bort markeringsklassen
            } else {
                selectedFilters[category].push(filter);
                this.classList.add('selected'); // Lägg till markeringsklassen
            }

            // Om du vill att resultaten ska uppdateras direkt när en knapp klickas, anropa filterData här
            // filterData(); (Du kan kommentera bort detta om du inte vill ha live uppdatering)
        });
    });


    // Funktion för att utföra sökningen
    document.getElementById('searchBtn').addEventListener('click', function () {
        performSearch();
    });

    function performSearch() {
        const filteredResults = allData.filter(row => {
            const countryMatch = !selectedFilters.country.length || selectedFilters.country.some(f => row[3].toLowerCase().includes(f.toLowerCase()));
            const proteinMatch = !selectedFilters.protein.length || selectedFilters.protein.some(f => row[4].toLowerCase().includes(f.toLowerCase()));
            const mealTypeMatch = !selectedFilters.mealType.length || selectedFilters.mealType.some(f => row[9].toLowerCase().includes(f.toLowerCase()));
            return countryMatch && proteinMatch && mealTypeMatch;
        });
        displayResults(filteredResults);
    }


    function displayResults(results) {
        totalPages = Math.ceil(results.length / resultsPerPage);
        const startIndex = (currentPage - 1) * resultsPerPage;
        const endIndex = startIndex + resultsPerPage;
        const resultsToDisplay = results.slice(startIndex, endIndex);

        const container = document.getElementById('results-container');
        container.innerHTML = resultsToDisplay.length > 0
            ? resultsToDisplay.map(row => `<div>${row.join(', ')}</div>`).join('')
            : '<div>Inga resultat hittades.</div>';

        displayPaginationControls();
    }

    function displayPaginationControls() {
        const paginationContainer = document.getElementById('pagination-controls');
        paginationContainer.innerHTML = ''; // Rensa befintliga pagineringsknappar

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', function () {
                goToPage(i);
            });

            if (currentPage === i) {
                button.classList.add('current-page'); // Lägg till klass för att markera nuvarande sida
            }

            paginationContainer.appendChild(button);
        }
    }
    // Funktion för att gå till en sida
    function goToPage(pageNumber) {
        currentPage = pageNumber;
        performSearch(); // Antaget att performSearch nu anropar displayResults
    }


    // Funktion för att visa fler knappar
    function showMore(containerId) {
        const container = document.getElementById(containerId);
        const hiddenButtons = container.querySelectorAll('.hidden');
        hiddenButtons.forEach(btn => btn.classList.remove('hidden'));
        const showMoreBtn = container.querySelector(`[data-target="${containerId}"]`);
        if (showMoreBtn) showMoreBtn.style.display = 'none';
    }

    // Funktion för att växla "Visa fler" och "Dölj" för knapparna
    function toggleShowMore(showMoreBtn, isExpanded) {
        const containerId = showMoreBtn.dataset.target;
        const container = document.getElementById(containerId);
        const hiddenButtons = container.querySelectorAll('.hidden');

        if (isExpanded) {
            // Dölj elementen och uppdatera knappen
            hiddenButtons.forEach(btn => btn.classList.add('hidden'));
            showMoreBtn.textContent = 'Visa fler';
            showMoreBtn.setAttribute('data-expanded', 'false');
        } else {
            // Visa elementen och uppdatera knappen
            hiddenButtons.forEach(btn => btn.classList.remove('hidden'));
            showMoreBtn.textContent = 'Dölj';
            showMoreBtn.setAttribute('data-expanded', 'true');
        }
    }

    // Lägg till event listeners för "Visa fler"/"Dölj"-knapparna
    document.querySelectorAll('.show-more-btn').forEach(button => {
        button.addEventListener('click', function () {
            const isExpanded = this.getAttribute('data-expanded') === 'true';
            toggleShowMore(this, isExpanded);
        });
    });


});

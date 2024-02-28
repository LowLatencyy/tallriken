document.addEventListener('DOMContentLoaded', async function () {
    const apiKey = 'AIzaSyBFecFz9KFsPnw6bjAKv0N0CSbs3Iszlag';
    const spreadsheetId = '1RN9SQRzletJnH8BAgJEQCI0BtbpsHQU6Pv2L4FDGXEM';
    let allData = [];
    const selectedFilters = { country: [], protein: [], mealType: [] };

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
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.dataset.filter;
            const category = this.dataset.category;

            const index = selectedFilters[category].indexOf(filter);
            if (index > -1) {
                selectedFilters[category].splice(index, 1);
                this.classList.remove('selected');
            } else {
                selectedFilters[category].push(filter);
                this.classList.add('selected');
            }
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
        const container = document.getElementById('results-container');
        container.innerHTML = results.length > 0
            ? results.map(row => `<div>${row.join(', ')}</div>`).join('')
            : '<div>Inga resultat hittades.</div>';
    }

    // Funktion för att visa fler knappar
    function showMore(containerId) {
        const container = document.getElementById(containerId);
        const hiddenButtons = container.querySelectorAll('.hidden');
        hiddenButtons.forEach(btn => btn.classList.remove('hidden'));
        const showMoreBtn = container.querySelector(`[data-target="${containerId}"]`);
        if (showMoreBtn) showMoreBtn.style.display = 'none';
    }

    // Lägg till event listeners för "Visa fler"-knapparna
    document.querySelectorAll('.show-more-btn').forEach(button => {
        button.addEventListener('click', function () {
            const target = this.dataset.target;
            const container = document.getElementById(target);
            const hiddenButtons = container.querySelectorAll('.hidden');
            hiddenButtons.forEach(btn => btn.classList.remove('hidden'));
            this.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', async function () {
    const apiKey = 'AIzaSyBFecFz9KFsPnw6bjAKv0N0CSbs3Iszlag';
    const spreadsheetId = '1RN9SQRzletJnH8BAgJEQCI0BtbpsHQU6Pv2L4FDGXEM';
    let allData = [];
    const selectedFilters = { country: [], protein: [], mealType: [] };

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

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.dataset.filter;
            const category = this.dataset.category;

            // Lägg till eller ta bort filter från den valda kategorin
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

    document.getElementById('searchBtn').addEventListener('click', function () {
        performSearch();
    });

    function performSearch() {
        // Filtrera baserat på valda filter
        const filteredResults = allData.filter(row =>
            (!selectedFilters.country.length || selectedFilters.country.includes(row[3])) &&
            (!selectedFilters.protein.length || selectedFilters.protein.includes(row[4])) &&
            (!selectedFilters.mealType.length || selectedFilters.mealType.includes(row[9]))
        );
        displayResults(filteredResults);
    }

    function displayResults(results) {
        const container = document.getElementById('results-container');
        container.innerHTML = ''; // Rensa tidigare resultat

        results.forEach(row => {
            const element = document.createElement('div');
            element.textContent = row.join(', ');
            container.appendChild(element);
        });
    }
});

function showMore(containerId) {
    const container = document.getElementById(containerId);
    const hiddenButtons = container.querySelectorAll('.hidden');
    hiddenButtons.forEach(btn => {
        btn.classList.remove('hidden');
    });
    // Dölj "Visa fler"-knappen efter att alla knappar visas
    const showMoreBtn = container.querySelector('.show-more-btn');
    showMoreBtn.style.display = 'none';
}

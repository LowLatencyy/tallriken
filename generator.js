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
        const filteredResults = allData.filter(row =>
            selectedFilters.country.every(f => row[3].includes(f)) &&
            selectedFilters.protein.every(f => row[4].includes(f)) &&
            selectedFilters.mealType.every(f => row[9].includes(f))
        );
        displayResults(filteredResults);
    }

    function displayResults(results) {
        const container = document.getElementById('results-container');
        container.innerHTML = results.length > 0
            ? results.map(row => `<div>${row.join(', ')}</div>`).join('')
            : '<div>Inga resultat hittades.</div>';
    }
});

function showMore(containerId) {
    const container = document.getElementById(containerId);
    const hiddenButtons = container.querySelectorAll('.hidden');
    hiddenButtons.forEach(btn => btn.classList.remove('hidden'));
    const showMoreBtn = container.querySelector('.show-more-btn');
    showMoreBtn.style.display = 'none';
}

document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', function () {
        const containerId = this.dataset.target;
        showMore(containerId);
    });
});
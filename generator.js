document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'AIzaSyBFecFz9KFsPnw6bjAKv0N0CSbs3Iszlag';
    const spreadsheetId = '1RN9SQRzletJnH8BAgJEQCI0BtbpsHQU6Pv2L4FDGXEM';
    let allData = [];

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

    loadData();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            const column = this.getAttribute('data-column');
            filterData(filter, column);
        });
    });

    function filterData(filter, column) {
        const columnMap = { D: 3, E: 4, J: 9 }; // Kartläggning av kolumnbokstäver till index (börjar på 0)
        const columnIndex = columnMap[column.toUpperCase()];
        const filteredResults = allData.filter(row => row[columnIndex] === filter);
        displayResults(filteredResults);
    }

    function displayResults(results) {
        const container = document.getElementById('results-container');
        container.innerHTML = results.map(row => `<div>${row.join(', ')}</div>`).join('');
    }
});

function showMore(containerId) {
    const container = document.getElementById(containerId);
    const hiddenButtons = container.querySelectorAll('.filter-btn.hidden');
    hiddenButtons.forEach(btn => btn.style.display = 'inline-block');
    // Dölj "Visa fler"-knappen efter att alla knappar visas
    const showMoreBtn = container.querySelector('.show-more-btn');
    showMoreBtn.style.display = 'none';
}


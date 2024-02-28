document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'AIzaSyBFecFz9KFsPnw6bjAKv0N0CSbs3Iszlag';
    const spreadsheetId = '1RN9SQRzletJnH8BAgJEQCI0BtbpsHQU6Pv2L4FDGXEM';
    const dataRange = 'Blad1!A2:J';

    let allData = [];

    async function loadData() {
        try {
            const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${dataRange}?key=${apiKey}`);
            const data = await response.json();
            allData = data.values;
            console.log('Data loaded', allData);
        } catch (error) {
            console.error('Error loading data', error);
        }
    }

    // Initial laddning av data
    loadData();

    // Ny funktion för att hantera klick på filterknappar
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            filterData([filter]); // Anta att filterData accepterar en array med kriterier
        });
    });

    // Modifierad funktion för att hantera filterval
    function filterData(criteria) {
        // Anta att kriterierna är en array med valda filter
        const filteredResults = allData.filter(row => criteria.every(criterion => row.includes(criterion)));
        displayResults(filteredResults);
    }

    // Funktion för att visa resultat
    function displayResults(results) {
        const container = document.getElementById('results-container'); // Se till att du har detta element i din HTML
        container.innerHTML = ''; // Rensa tidigare resultat

        results.forEach(row => {
            const element = document.createElement('div');
            element.textContent = row.join(', '); // Visa raden som text, justera enligt behov
            container.appendChild(element);
        });
    }
});

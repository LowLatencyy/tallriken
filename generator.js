document.addEventListener('DOMContentLoaded', async function () {
    const apiKey = 'AIzaSyBFecFz9KFsPnw6bjAKv0N0CSbs3Iszlag';
    const spreadsheetId = '1RN9SQRzletJnH8BAgJEQCI0BtbpsHQU6Pv2L4FDGXEM';
    const dataRange = 'Blad1!A2:K';
    const synonymRange = 'Ingredienser!A2:B';
    const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${dataRange}?key=${apiKey}`;
    const synonymUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${synonymRange}?key=${apiKey}`;

    let allData = [];
    let currentPage = 1;
    const resultsPerPage = 14;
    let totalPages = 0;
    const selectedFilters = { country: [], protein: [], mealtype: [] };


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap
        }
        return array;
    }



    function filterData() {
        const filteredResults = allData.filter(row => {
            // Split och trimma varje kategori för att hantera flera värden
            const mealtypes = row[8].toLowerCase().split(',').map(s => s.trim());
            const proteins = row[4].toLowerCase().split(',').map(s => s.trim());
            const countries = row[3].toLowerCase().split(',').map(s => s.trim());

            // Kontrollera om det finns någon matchning för varje filterkategori
            const mealtypeMatch = !selectedFilters.mealtype.length || selectedFilters.mealtype.some(filter => mealtypes.includes(filter.toLowerCase()));
            const proteinMatch = !selectedFilters.protein.length || selectedFilters.protein.some(filter => proteins.includes(filter.toLowerCase()));
            const countryMatch = !selectedFilters.country.length || selectedFilters.country.some(filter => countries.includes(filter.toLowerCase()));

            return mealtypeMatch && proteinMatch && countryMatch;
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

    document.querySelectorAll('.image-button').forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.dataset.filter;
            const category = this.dataset.category;

            if (selectedFilters[category].includes(filter)) {
                selectedFilters[category] = selectedFilters[category].filter(f => f !== filter);
                this.classList.remove('selected');
            } else {
                selectedFilters[category].push(filter);
                this.classList.add('selected');
            }

            console.log(selectedFilters); // Lägg till denna för att se filterstatus
        });
    });



    // Funktion för att utföra sökningen
    document.getElementById('searchBtn').addEventListener('click', function () {
        performSearch();
    });

    function performSearch() {
        // Hämta behållaren där resultat ska visas
        const container = document.getElementById('data-container');
        container.innerHTML = ''; // Rensa tidigare resultat

        console.log('Selected filters:', selectedFilters);
        console.log('Sample data rows:', allData.slice(0, 5));

        const filteredResults = allData.filter(row => {
            // Kontrollera att alla relevanta kolumner finns
            if (!row[3] || !row[4] || !row[8]) {
                return false;
            }
            

            const countryMatch = !selectedFilters.country.length || selectedFilters.country.some(f => row[3].split(',').map(s => s.trim()).includes(f));
            const proteinMatch = !selectedFilters.protein.length || selectedFilters.protein.some(f => row[4].split(',').map(s => s.trim()).includes(f));
            const mealtypeMatch = !selectedFilters.mealtype.length || selectedFilters.mealtype.some(f => row[8].split(',').map(s => s.trim()).includes(f));

            return countryMatch && proteinMatch && mealtypeMatch;
        });

        // Anropa Fisher-Yates shuffle på de filtrerade resultaten för att slumpmässigt ordna dem
        shuffleArray(filteredResults);

        // Visa resultat eller meddela om inga resultat finns
        if (filteredResults.length === 0) {
            container.innerHTML = '<div>Inga matchande recept hittades.</div>';
        } else {
            filteredResults.forEach(row => {
                const instagramCode = row[5];
                const instagramPost = document.createElement('div');
                instagramPost.innerHTML = instagramCode;

                console.log('Instagram Embed Code:', row[5]);

                container.appendChild(instagramPost);
            });

            if (window.instgrm) {
                window.instgrm.Embeds.process();
            } else {
                const script = document.createElement('script');
                script.async = true;
                script.src = "//www.instagram.com/embed.js";
                document.body.appendChild(script);
                script.onload = function () {
                    window.instgrm.Embeds.process();
                };
            }
        }

        // Visa pagineringskontroller om nödvändigt
        displayPaginationControls();

        console.log('Instagram Embed Code:', row[5]);

    }







    function displayResults(results) {
        totalPages = Math.ceil(results.length / resultsPerPage);
        const startIndex = (currentPage - 1) * resultsPerPage;
        const endIndex = startIndex + resultsPerPage;
        const resultsToDisplay = results.slice(startIndex, endIndex);

        const container = document.getElementById('data-container');
        container.innerHTML = resultsToDisplay.length > 0
            ? resultsToDisplay.map(row => {
                const instagramEmbedCode = row[5];  // Instagram-kod från kolumn
                const title = row[0];  // Titeln från kolumn 0
                const ingredients = row[6];  // Ingredienser, anta att de är i kolumn 6

                return `
                    <div class="matratt">
                    <div class="matratt">${instagramEmbedCode}</div>
                    <div class="matratt-title title-background"><h2>${title}</h2></div>
                    <div class="matratt-ingredienser">${ingredients}</div>
                    </div>
                `;
            }).join('')
            : '<div>Inga resultat hittades.</div>';

        displayPaginationControls(); // Visa pagineringskontrollerna
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

    function toggleShowMore(showMoreBtn) {
        const containerId = showMoreBtn.dataset.target;
        const container = document.getElementById(containerId);
        const hiddenButtons = container.querySelectorAll('.hidden');
        const isExpanded = showMoreBtn.dataset.expanded === 'true';
        const image = showMoreBtn.querySelector('img'); // Hämta bilden i knappen

        if (isExpanded) {
            // Om den är expanderad, dölj knapparna och uppdatera texten
            hiddenButtons.forEach(btn => btn.style.display = 'none');
            // showMoreBtn.textContent = 'Visa fler';
            image.src = 'images/plustecken-svart.svg'; // Sätt till plus-ikonen
            image.alt = 'Visa fler';
            showMoreBtn.dataset.expanded = 'false';
        } else {
            // Om den inte är expanderad, visa knapparna och uppdatera texten
            hiddenButtons.forEach(btn => btn.style.display = 'inline-block');
            // showMoreBtn.textContent = 'Dölj';
            image.src = 'images/minustecken-svart.svg'; // Sätt till minus-ikonen
            image.alt = 'Dölj';
            showMoreBtn.dataset.expanded = 'true';
        }
    }

    // Lägg till event listeners för "Visa fler"/"Dölj"-knapparna
    document.querySelectorAll('.show-more-btn').forEach(button => {
        button.addEventListener('click', function () {
            toggleShowMore(this);
        });
    });



});
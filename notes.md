kod för att randomisera sökresultatet, lägg in den i tex index filen längst upp i script. den ligger redan där bortkommenterad: function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // Swap
            }
        }

och den här kodraden ska också ligga nere i performsearch funktioenn, där den redan ligger bortkommenterade: /* shuffleArray(filteredData); */ // Blanda resultaten slumpmässigt direkt efter filtrering och innan data sparas
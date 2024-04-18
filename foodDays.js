const foodDays = [
    { date: '2024-04-18', image: 'images/Food-Days/pannkakor.jpg', title: 'Pannkaksdagen', description: 'Idag är det pannkaksdagen! Passa på att njuta av pannkakor med sylt och grädde.' },
    { date: '2024-10-06', image: 'nudlar.jpg', title: 'Nudeldagen', description: 'Fira nudeldagen med dina favoritnudlar!' }
    // Lägg till fler matdagar här
];

function displayFoodDay() {
    const today = new Date().toISOString().slice(0, 10);
    const todayFoodDay = foodDays.find(day => day.date === today);
    const container = document.getElementById('foodDayContainer');

    if (todayFoodDay) {
        container.innerHTML = `
            <h2>${todayFoodDay.title}</h2>
            <img src="${todayFoodDay.image}" alt="${todayFoodDay.title}">
            <p>${todayFoodDay.description}</p>
        `;
    } else {
        container.innerHTML = '<p>Ingen speciell matdag idag.</p>';
    }
}

document.addEventListener('DOMContentLoaded', displayFoodDay);

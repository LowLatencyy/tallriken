const foodDays = [
    { date: '2024-01-25', image: 'kanelbulle.jpg', title: 'Kanelbullens dag', description: 'Fira med en eller flera saftiga kanelbullar på Kanelbullens dag!' },
    { date: '2024-02-25', image: 'semla.jpg', title: 'Fettisdagen', description: 'Fettisdagen är här! Njut av en utsökt semla.' },
    { date: '2024-03-05', image: 'pannkakor.jpg', title: 'Pannkaksdagen', description: 'Idag är det Pannkaksdagen! Passa på att njuta av pannkakor med sylt och grädde.' },
    { date: '2024-04-18', image: 'images/Food-Days/vaffla.jpg', title: 'Våffeldagen', description: 'Våffeldagen sammanfaller med Marie bebådelsedag. Fira med nygräddade våfflor!' },
    { date: '2024-04-12', image: 'surstromming.jpg', title: 'Surströmmingspremiären', description: 'Surströmmingspremiären äger rum på tredje torsdagen i augusti. Vågar du prova?' },
    { date: '2024-06-06', image: 'sill.jpg', title: 'Sillens dag', description: 'Sillens dag infaller på Sveriges nationaldag. Fira med sill och nubbe!' },
    { date: '2024-08-08', image: 'kräftor.jpg', title: 'Kräftpremiären', description: 'Kräftpremiären är starten på kräftfiskesäsongen i Sverige. Dags för kräftskiva!' },
    { date: '2024-10-04', image: 'kanelbulle.jpg', title: 'Kanelbullens dag', description: 'Inget firar starten på hösten som en färsk kanelbulle på Kanelbullens dag.' },
    { date: '2024-11-06', image: 'gustavus.jpg', title: 'Gustav Adolfsdagen', description: 'Gustav Adolfsdagen, ofta firad med en Gustav Adolf-bakelse i samband med minnet av kung Gustav II Adolf.' },
    { date: '2024-12-13', image: 'lussekatt.jpg', title: 'Luciadagen', description: 'Luciadagen är en av de mest stämningsfulla dagarna i Sverige. Fira med lussekatter och varmt glögg.' },
    { date: '2024-11-11', image: 'kakor.jpg', title: 'Fars dag', description: 'I Sverige firas Fars dag med kaffe och kaka. En mysig fikastund med familjen!' },
    { date: '2024-02-28', image: 'fisk.jpg', title: 'Fiskens dag', description: 'Norges Fiskens dag, en dag för att uppmärksamma och njuta av havets läckerheter.' },
    { date: '2024-09-04', image: 'karjalanpiirakka.jpg', title: 'Karjalanpiirakan päivä', description: 'I Finland firar man Karjalanpiirakan päivä med dessa traditionella piroger.' },
    { date: '2024-07-10', image: 'potatis.jpg', title: 'Potatisens dag', description: 'Potatisens dag firas i både Sverige och Finland, en hyllning till denna mångsidiga rotfrukt.' },
    { date: '2024-10-29', image: 'svamp.jpg', title: 'Svampens dag', description: 'En dag tillägnad svampar i hela Norden. Utforska skogen eller njut av en svampmåltid.' }
];


function displayFoodDay() {
    const today = new Date().toISOString().slice(0, 10);
    const todayFoodDay = foodDays.find(day => day.date === today);
    const container = document.getElementById('foodDayContainer');
    const headlineBackground = container.querySelector('.headline-background h2'); // Hämtar h2 inom headline-background
    const image = container.querySelector('img');
    const description = container.querySelector('p');

    if (todayFoodDay) {
        headlineBackground.innerText = todayFoodDay.title;
        image.src = todayFoodDay.image;
        image.alt = todayFoodDay.title;
        description.innerText = todayFoodDay.description;
    } else {
        container.innerHTML = '<p>Ingen speciell matdag idag.</p>';
    }
}

document.addEventListener('DOMContentLoaded', displayFoodDay);

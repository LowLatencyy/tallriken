const foodDays = [

   
    { date: '2024-01-01', image: 'pizza.jpg', title: 'Pizzadagen', description: 'Internationella pizzadagen firas över hela världen.' },
    { date: '2024-01-25', image: 'irish_coffee.jpg', title: 'Irish Coffee Day', description: 'Internationell dag för Irish Coffee.' },
    { date: '2024-01-26', image: 'indian_flag.jpg', title: 'Indiens nationaldag', description: 'Indiens republikdag.' },
    { date: '2024-02-02', image: 'crepes.jpg', title: 'Crêpesdagen', description: 'Internationellt firande med crêpes.' },
    { date: '2024-02-05', image: 'nutella.jpg', title: 'Nutellans Dag', description: 'En dag dedikerad till alla Nutella-älskare.' },
    { date: '2024-02-09', image: 'pizza.jpg', title: 'Pizzadagen', description: 'Internationell dag för pizzaentusiaster.' },
    { date: '2024-02-12', image: 'lentil_soup.jpg', title: 'Linssoppans dag', description: 'En dag att fira med varm och näringsrik linssoppa.' },
    { date: '2024-02-13', image: 'semlor.jpg', title: 'Fettisdagen', description: 'Sverige firar med semlor på Fettisdagen.' },
    { date: '2024-02-22', image: 'margarita.jpg', title: 'Margarita Day', description: 'Internationell Margarita Dag.' },
    { date: '2024-02-28', image: 'chili.jpg', title: 'Chili Day', description: 'En dag att hylla alla sorter av chili.' },
    { date: '2024-03-01', image: 'peanut_butter.jpg', title: 'Peanut Butter Lovers’ Day', description: 'En dag för alla som älskar jordnötssmör.' },
    { date: '2024-03-14', image: 'pie.jpg', title: 'Pi-dagen', description: 'Firande av matematikens Pi (π) med paj.' },
    { date: '2024-03-17', image: 'st_patricks_day.jpg', title: 'S:t Patricks Dag', description: 'Irländsk högtid firad världen över.' },
    { date: '2024-03-25', image: 'waffles.jpg', title: 'Våffeldagen', description: 'Svensk våffeldag, också känd som Vårfrudagen.' },
    { date: '2024-03-25', image: 'greek_flag.jpg', title: 'Greklands nationaldag', description: 'Grekland firar sin självständighet från Osmanska riket.' },
    { date: '2024-04-01', image: 'sill.jpg', title: 'Fössta tossdan i mass', description: 'Svensk dag där man traditionellt äter sill.' },
    { date: '2024-04-04', image: 'carrots.jpg', title: 'Morotens dag', description: 'En dag att uppmärksamma den mångsidiga och näringsrika moroten.' },
    { date: '2024-04-07', image: 'beer.jpg', title: 'Beer Day', description: 'Internationell öldag.' },
    { date: '2024-04-12', image: 'liquorice.jpg', title: 'Lakritsdagen', description: 'Internationell dag för lakritsälskare.' },
    { date: '2024-04-13', image: 'thai_new_year.jpg', title: 'Thailands nyår', description: 'Songkran, Thailands vattenfestival och nyår.' },
    { date: '2024-05-03', image: 'grill.jpg', title: 'Grillens dag', description: 'Grillen är framme, gallret är rengjort - nu är det äntligen grillens dag!' },
    { date: '2024-05-05', image: 'kebab.jpg', title: 'Internationella kebabdagen', description: 'Det finns otroligt mycket variation på hemmagjord kebab.' },
    { date: '2024-05-05', image: 'nettles.jpg', title: 'Nässlans dag', description: 'Brännässlan är mest känd som ogräs och sommarplåga.' },
    { date: '2024-05-06', image: 'home_baked.jpg', title: 'Hembakatdagen', description: 'Äppelkakor, schackrutor, hallongrottor och fluffiga muffins.' },
    { date: '2024-04-21', image: 'images/Food-Days/chokladboll.jpg', title: 'Chokladbollens dag', description: 'Svensk dag för att njuta av chokladbollar.' },
    { date: '2024-05-13', image: 'apple_pie.jpg', title: 'Apple Pie Day', description: 'Internationell dag för att fira med äppelpaj.' },
    { date: '2024-05-15', image: 'cardamom_buns.jpg', title: 'Kardemummabullens dag', description: 'Finns det något godare än en nybakad kardemummabulle?' },
    { date: '2024-05-17', image: 'norwegian_flag.jpg', title: 'Norges nationaldag', description: 'Norge firar sin konstitution.' },
    { date: '2024-05-22', image: 'picnic.jpg', title: 'Picknickens dag', description: 'Lagom till att vi börjar krypa ut från våra hålor.' },
    { date: '2024-05-24', image: 'smorgastarta.jpg', title: 'Smörgåstårtans dag', description: 'En dag att njuta av den svenska smörgåstårtan.' },
    { date: '2024-05-27', image: 'muffins.jpg', title: 'Muffinsdagen', description: 'Muffinsdagen, 27 maj' },
    { date: '2024-05-28', image: 'hamburger.jpg', title: 'Hamburgarens dag', description: 'Internationellt firande av hamburgare.' },
    { date: '2024-06-02', image: 'italian_flag.jpg', title: 'Italiens nationaldag', description: 'Firande av Italiens republikdag.' },
    { date: '2024-06-06', image: 'swedish_flag.jpg', title: 'Sveriges nationaldag', description: 'Sveriges nationaldag.' },
    { date: '2024-06-06', image: 'milk.jpg', title: 'Mjölkens dag', description: 'Tycker du om mjölk så kan du fira med ett extra glas.' },
    { date: '2024-06-06', image: 'fruit.jpg', title: 'Fruktens dag', description: 'Frukt är godis som man brukar säga.' },
    { date: '2024-06-06', image: 'herring.jpg', title: 'Sillens dag', description: 'Här hittar du våra goa sillrecept – med läcker twist.' },
    { date: '2024-06-06', image: 'new_potatoes.jpg', title: 'Färskpotatisens dag', description: 'Lagom till sommaren så har färskpotatisen sin dag!' },
    { date: '2024-06-18', image: 'sushi.jpg', title: 'International Sushi Day', description: 'Internationell dag för sushiälskare.' },
    { date: '2024-06-23', image: 'sausage.jpg', title: 'Korvens dag', description: 'En dag dedikerad till alla sorters korvar.' },
    { date: '2024-07-03', image: 'chocolate.jpg', title: 'International Chocolate Day', description: 'Internationell dag för chokladälskare.' },
    { date: '2024-07-04', image: 'usa_independence.jpg', title: 'Amerikas nationaldag', description: 'Firande av USA:s självständighet från Storbritannien.' },
    { date: '2024-07-11', image: 'blueberry_muffins.jpg', title: 'Blueberry Muffins Day', description: 'En dag att fira blåbärsmuffins.' },
    { date: '2024-07-13', image: 'pitepalt.jpg', title: 'Paltdagen', description: 'Hur ska man fira den här dagen bättre än att göra sig en ordentlig laddning med Pitepalt.' },
    { date: '2024-07-14', image: 'bastille.jpg', title: 'Bastilledagen', description: 'Fransk nationaldag, ofta firad med fransk mat.' },
    { date: '2024-07-17', image: 'beer.jpg', title: 'Ölets dag', description: 'Tycker du öl är gott så kommer du älska vår ölskola.' },
    { date: '2024-07-23', image: 'hotdog.jpg', title: 'Varmkorvens dag', description: 'Låt oss fira den här korviga dagen med en klassisk tunnbrödsrulle.' },
    { date: '2024-07-29', image: 'lasagna.jpg', title: 'Lasagnes dag', description: 'Internationell dag för att uppskatta lasagne.' },
    { date: '2024-08-08', image: 'crayfish.jpg', title: 'Kräftpremiären', description: 'Starten på kräftfiskesäsongen i Sverige.' },
    { date: '2024-08-19', image: 'potato.jpg', title: 'Potato Day', description: 'Internationell dag för att hylla potatisen.' },
    { date: '2024-08-23', image: 'meatballs.jpg', title: 'Köttbullens dag', description: 'En dag för att fira köttbullar, en klassiker i många länder.' },
    { date: '2024-09-04', image: 'macadamia.jpg', title: 'Macadamia Nut Day', description: 'En dag dedikerad till macadamianötter.' },
    { date: '2024-09-16', image: 'guacamole.jpg', title: 'Guacamole Day', description: 'Internationell dag för att fira med guacamole.' },
    { date: '2024-09-16', image: 'mexican_flag.jpg', title: 'Mexikos nationaldag', description: 'Firande av Mexikos självständighet från Spanien.' },
    { date: '2024-09-29', image: 'coffee.jpg', title: 'International Coffee Day', description: 'Internationell kaffedag.' },
    { date: '2024-10-01', image: 'vegetarian.jpg', title: 'Internationella vegetariska dagen', description: 'Internationell dag för att uppmärksamma vegetarisk kost.' },
    { date: '2024-10-04', image: 'cinnamon_buns.jpg', title: 'Kanelbullens dag', description: 'Svensk dag för att fira med kanelbullar.' },
    { date: '2024-10-04', image: 'tacos.jpg', title: 'Taco-dagen', description: 'En dag att uppmärksamma och njuta av tacos i alla dess former.' },
    { date: '2024-10-09', image: 'south_korean_flag.jpg', title: 'Sydkoreas nationaldag', description: 'Hangul-dagen, firandet av det koreanska alfabetets skapande.' },
    { date: '2024-10-16', image: 'bread.jpg', title: 'World Bread Day', description: 'Internationell dag för att hylla bröd i alla dess former.' },
    { date: '2024-10-25', image: 'pasta.jpg', title: 'Världspastadagen', description: 'Internationellt firande av pasta.' },
    { date: '2024-11-01', image: 'vegan.jpg', title: 'Vegan Day', description: 'Internationell vegan dag för att främja vegansk kost.' },
    { date: '2024-11-06', image: 'gustavus.jpg', title: 'Gustav Adolfsdagen', description: 'Gustav Adolfsdagen, ofta firad med en Gustav Adolf-bakelse.' },
    { date: '2024-11-07', image: 'kladdkaka.jpg', title: 'Kladdkakans dag', description: 'En dag att njuta av Sveriges mest älskade chokladkaka.' },
    { date: '2024-12-06', image: 'finnish_flag.jpg', title: 'Finlands nationaldag', description: 'Finland firar sin självständighet från Ryssland.' },
    { date: '2024-12-10', image: 'gingerbread.jpg', title: 'Gingerbread House Day', description: 'Internationell dag för att bygga och dekorera pepparkakshus.' },
    { date: '2024-12-13', image: 'lussekatt.jpg', title: 'Luciadagen', description: 'Luciadagen firas i Sverige med lussekatter och sång.' },
    { date: '2024-12-23', image: 'japanese_flag.jpg', title: 'Japans nationaldag', description: 'Firande av kejsarens födelsedag och Japans nationaldag.' },
    { date: '2024-12-24', image: 'christmas_eve.jpg', title: 'Julafton', description: 'Julafton firas över hela världen med traditionell mat och gemenskap.' }



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

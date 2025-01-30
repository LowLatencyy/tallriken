const foodDays = [

    { date: '2025-01-30', image: 'images/Food-Days/pizza.svg', title: 'Nyårsdagen & Internationella Pizzadagen', description: 'Många startar året med en pizza, antingen från pizzerian eller hemmagjord.' },
    { date: '2025-01-05', image: 'images/Food-Days/trettondagsafton.jpg', title: 'Trettondagsafton', description: 'Kvällen innan Trettondagen, ofta med lite extra god mat och samvaro.' },
    { date: '2025-01-06', image: 'images/Food-Days/trettondagen.jpg', title: 'Trettondagen', description: 'En av årets helgdagar, en bra anledning att laga något extra gott.' },
    { date: '2025-01-12', image: 'images/Food-Days/marsipan.jpg', title: 'Marsipanens dag', description: 'Perfekt dag för att njuta av marsipan, kanske i en bakelse eller som godis.' },
    { date: '2025-01-13', image: 'images/Food-Days/tjugondagjul.jpg', title: 'Tjugondag jul', description: 'Julen rundas av – dags att äta upp de sista resterna av julgodiset.' },
    { date: '2025-01-19', image: 'images/Food-Days/popcorn.jpg', title: 'Internationella Popcorndagen', description: 'En bra ursäkt att poppa en skål smörigt eller karamelliserat popcorn.' },

    { date: '2025-02-01', image: 'images/Food-Days/vegetariskt.jpg', title: 'Vegetariska dagen', description: 'En dag att lyfta fram grön mat – varför inte testa en ny vegetarisk rätt?' },
    { date: '2025-02-02', image: 'images/Food-Days/smoothie.jpg', title: 'Smoothiens dag', description: 'Starta dagen med en smoothie – enkelt och fullproppat med vitaminer.' },
    { date: '2025-02-03', image: 'images/Food-Days/morotskaka.jpg', title: 'Morotskakans dag', description: 'Saftig morotskaka med frosting är en favorit hos många.' },
    { date: '2025-02-08', image: 'images/Food-Days/agg.jpg', title: 'Ägghalvans dag', description: 'Ägghalvor med kaviar eller majonnäs – enkelt och gott.' },
    { date: '2025-02-10', image: 'images/Food-Days/baljvaxter.jpg', title: 'Baljväxtens dag', description: 'Baljväxter som linser och bönor är både nyttiga och mättande.' },
    { date: '2025-02-14', image: 'images/Food-Days/hjarta.jpg', title: 'Alla hjärtans dag', description: 'Många firar med något gott – choklad, en middag eller fika.' },
    { date: '2025-02-19', image: 'images/Food-Days/knackebrod.jpg', title: 'Knäckebrödets dag', description: 'Ett av Sveriges mest klassiska bröd, gott med smör och ost.' },
    { date: '2025-02-25', image: 'images/Food-Days/grapefrukt.jpg', title: 'Grapefruktens dag', description: 'Syrlig och uppfriskande – en bra start på dagen.' },
    { date: '2025-02-26', image: 'images/Food-Days/husmanskost.jpg', title: 'Husmanskostens dag', description: 'Köttbullar, raggmunk eller ärtsoppa – klassisk svensk mat.' },
    { date: '2025-03-02', image: 'images/Food-Days/fastlagsbullar.jpg', title: 'Fastlagssöndagen', description: 'Startskottet för semmelsäsongen, dags att njuta av en klassisk fastlagsbulle.' },
    { date: '2025-03-03', image: 'images/Food-Days/mandelkubb.jpg', title: 'Mandelkubbens dag', description: 'En gammaldags fikaklassiker som är perfekt med en kopp kaffe.' },
    { date: '2025-03-04', image: 'images/Food-Days/semla.jpg', title: 'Fettisdagen', description: 'Dags för semlor! Klassisk med mandelmassa, eller kanske en ny variant?' },
    { date: '2025-03-04', image: 'images/Food-Days/pannkakor.jpg', title: 'Internationella pannkaksdagen', description: 'Tunna svenska pannkakor eller amerikanska fluffiga – vilken väljer du?' },
    { date: '2025-03-04', image: 'images/Food-Days/bananbrod.jpg', title: 'Banandagen', description: 'Perfekt dag att baka bananbröd på de där bruna bananerna.' },
    { date: '2025-03-06', image: 'images/Food-Days/massipantarta.jpg', title: 'Fössta Tossdan i Mass', description: 'Smålänningarnas egen högtid – fira med en rejäl bit massipantåta.' },
    { date: '2025-03-09', image: 'images/Food-Days/tomatsas.jpg', title: 'Tomatsåsens dag', description: 'Grunden till mycket god mat – testa att göra en riktig långkokt tomatsås.' },
    { date: '2025-03-12', image: 'images/Food-Days/korv.jpg', title: 'Alla korvars dag', description: 'Grillad, kokt, i gryta – korv kan varieras på många sätt.' },
    { date: '2025-03-13', image: 'images/Food-Days/mazarin.jpg', title: 'Mazarindagen', description: 'Mördeg och mandelmassa – en perfekt liten kaka till kaffet.' },
    { date: '2025-03-23', image: 'images/Food-Days/matlada.jpg', title: 'Matlådans dag', description: 'Hemlagad lunch är både godare och billigare – här är en bra anledning att fylla frysen.' },
    { date: '2025-03-24', image: 'images/Food-Days/glass.jpg', title: 'Europeiska dagen för hantverksmässigt tillverkad glass', description: 'Fira med en riktigt bra glass – gärna från ett lokalt glassmakeri.' },
    { date: '2025-03-25', image: 'images/Food-Days/waffles.jpg', title: 'Våffeldagen', description: 'Dags för frasiga våfflor med sylt och grädde, eller varför inte en matig variant?' },

    { date: '2025-04-04', image: 'images/Food-Days/morot.jpg', title: 'Morotens dag', description: 'Moroten är både nyttig och mångsidig – varför inte göra en morotskaka eller soppa?' },
    { date: '2025-04-12', image: 'images/Food-Days/lakrits.jpg', title: 'Lakritsdagen', description: 'Sött eller salt? Lakrits delar folk, men är älskat av många.' },
    { date: '2025-04-12', image: 'images/Food-Days/linssoppa.jpg', title: 'Linssoppans dag', description: 'En värmande och näringsrik soppa – perfekt för en kall dag.' },
    { date: '2025-04-17', image: 'images/Food-Days/skartorsdag.jpg', title: 'Skärtorsdagen', description: 'Påsken närmar sig – dags att börja ladda med god mat.' },
    { date: '2025-04-18', image: 'images/Food-Days/langfredag.jpg', title: 'Långfredagen', description: 'En dag för lugn och stillhet – kanske ett långkok på spisen?' },
    { date: '2025-04-19', image: 'images/Food-Days/paskmat.jpg', title: 'Påskafton', description: 'Påskbordet dukas upp – ägg, sill och lax hör till klassikerna.' },
    { date: '2025-04-19', image: 'images/Food-Days/surdeg.jpg', title: 'Surdegsdagen', description: 'Baka ett riktigt segt och smakrikt surdegsbröd – tålamod lönar sig.' },
    { date: '2025-04-20', image: 'images/Food-Days/paskdag.jpg', title: 'Påskdagen', description: 'Mera påskmat och kanske de sista godisäggen innan vardagen börjar igen.' },
    { date: '2025-04-20', image: 'images/Food-Days/polkagris.jpg', title: 'Polkagrisens dag', description: 'En riktig svensk klassiker från Gränna – perfekt att krossa över glass.' },
    { date: '2025-04-21', image: 'images/Food-Days/annandagpask.jpg', title: 'Annandag påsk', description: 'En extra ledig dag för att njuta av påskens rester.' },
    { date: '2025-04-30', image: 'images/Food-Days/valborg.jpg', title: 'Valborgsmässoafton', description: 'Våren firas in – ofta med grill och en god middag.' },
    { date: '2025-05-01', image: 'images/Food-Days/budapestbakelse.jpg', title: 'Budapestbakelsens dag', description: 'Maräng, grädde och mandariner – en luftig favorit på fikabordet.' },
    { date: '2025-05-02', image: 'images/Food-Days/grilla.jpg', title: 'Grillens dag', description: 'Startskottet för grillsäsongen! Dags att tända kolen och njuta av god mat utomhus.' },
    { date: '2025-05-05', image: 'images/Food-Days/kebab.jpg', title: 'Internationella kebabdagen', description: 'Oavsett om du gillar rulle, spett eller på tallrik – kebab har sin egen dag idag.' },
    { date: '2025-05-06', image: 'images/Food-Days/hembakat.jpg', title: 'Hembakatdagen', description: 'Få saker slår doften av nybakat – passa på att baka något gott idag.' },
    { date: '2025-05-10', image: 'images/Food-Days/tunnbrod.jpg', title: 'Tunnbrödets dag', description: 'Tunt, segt eller knaprigt – tunnbröd är en svensk klassiker.' },
    { date: '2025-05-10', image: 'images/Food-Days/tunnbrodsrulle.jpg', title: 'Tunnbrödsrullens dag', description: 'Korv med mos i tunnbröd – en ikonisk svensk snabbmatsklassiker.' },
    { date: '2025-05-11', image: 'images/Food-Days/chokladboll.jpg', title: 'Chokladbollens dag', description: 'Havregryn, kakao, smör och socker – enkel och god fika som alla kan göra.' },
    { date: '2025-05-15', image: 'images/Food-Days/kardemummabulle.jpg', title: 'Kardemummabullens dag', description: 'Mjuk och kryddig bulle med mycket smak av kardemumma.' },
    { date: '2025-05-22', image: 'images/Food-Days/picknick.jpg', title: 'Picknickens dag', description: 'Packa korgen och njut av mat utomhus – sommaren är på väg!' },
    { date: '2025-05-25', image: 'images/Food-Days/morsdag.jpg', title: 'Mors dag', description: 'Fira mamma med något gott – kanske en lyxig tårta eller frukost på sängen?' },
    { date: '2025-05-27', image: 'images/Food-Days/ost.jpg', title: 'Ostens dag', description: 'Perfekt dag att testa en ny ost eller njuta av en riktigt bra ostbricka.' },
    { date: '2025-05-27', image: 'images/Food-Days/muffins.jpg', title: 'Muffinsdagen', description: 'Söta eller matiga – muffins går att variera i oändlighet.' },
    { date: '2025-05-28', image: 'images/Food-Days/hamburgare.jpg', title: 'Internationella burgardagen', description: 'Saftiga burgare med goda tillbehör – hemmagjort slår alltid snabbmat.' },

    { date: '2025-06-01', image: 'images/Food-Days/mjolk.jpg', title: 'Mjölkens dag', description: 'Mjölk har länge varit en viktig del av den svenska kosten.' },
    { date: '2025-06-06', image: 'images/Food-Days/farskpotatis.jpg', title: 'Färskpotatisens dag', description: 'Svensk sommar på en tallrik – färskpotatis med smör och dill.' },
    { date: '2025-06-06', image: 'images/Food-Days/sill.jpg', title: 'Sillens dag', description: 'En klassiker på midsommarbordet, men god året runt.' },
    { date: '2025-06-06', image: 'images/Food-Days/sverige.jpg', title: 'Sveriges nationaldag', description: 'Fira med svenska smaker som jordgubbar, sill och knäckebröd.' },
    { date: '2025-06-07', image: 'images/Food-Days/donut.jpg', title: 'Internationella donutdagen', description: 'Glaserad, fylld eller klassisk – en dag för alla som älskar donuts.' },
    { date: '2025-06-18', image: 'images/Food-Days/picknick.jpg', title: 'Internationella picknickdagen', description: 'Fixa en god matsäck och hitta en mysig plats i solen.' },
    { date: '2025-06-18', image: 'images/Food-Days/sushi.jpg', title: 'Internationella sushidagen', description: 'Sushi i alla former – nigiri, maki eller sashimi?' },
    { date: '2025-06-21', image: 'images/Food-Days/midsommar.jpg', title: 'Midsommarafton', description: 'Jordgubbar, sill och nubbe – svensk sommar när den är som bäst.' },
    { date: '2025-06-22', image: 'images/Food-Days/midsommardagen.jpg', title: 'Midsommardagen', description: 'Dagen efter midsommarafton – perfekt för en lugn brunch.' },
    { date: '2025-06-26', image: 'images/Food-Days/chokladpudding.jpg', title: 'Chokladpuddingens dag', description: 'Krämig och chokladig – perfekt dessert för alla åldrar.' },

    { date: '2025-07-13', image: 'images/Food-Days/palt.jpg', title: 'Paltdagen', description: 'Norrlands stolthet – palt serveras traditionellt med smör och lingon.' },
    { date: '2025-07-23', image: 'images/Food-Days/hotdog.jpg', title: 'Varmkorvens dag', description: 'En av våra mest populära snabbmatsklassiker – lika god grillad som kokt.' },
    { date: '2025-07-29', image: 'images/Food-Days/lasagne.jpg', title: 'Lasagnens dag', description: 'Fyllig pasta med ost och mustig sås – en rätt som alltid går hem.' },

    { date: '2025-08-02', image: 'images/Food-Days/senap.jpg', title: 'Senapens dag', description: 'Från stark till söt – senap passar till mer än bara korv.' },
    { date: '2025-08-03', image: 'images/Food-Days/vattenmelon.jpg', title: 'Vattenmelonens dag', description: 'Saftig och svalkande – perfekt för varma sommardagar.' },
    { date: '2025-08-07', image: 'images/Food-Days/kraftor.jpg', title: 'Kräftpremiären', description: 'Starten på kräftsäsongen – fira med skaldjur, dill och sång.' },
    { date: '2025-08-09', image: 'images/Food-Days/rulltarta.jpg', title: 'Rulltårtans dag', description: 'Luftig och rullad med sylt eller smörkräm – enkel men god fika.' },
    { date: '2025-08-15', image: 'images/Food-Days/surstromming.jpg', title: 'Surströmmingens dag', description: 'Den omdiskuterade delikatessen – en dag för de riktigt inbitna fansen.' },
    { date: '2025-08-22', image: 'images/Food-Days/musli.jpg', title: 'Internationella müslidagen', description: 'En klassisk start på dagen – fylld med frön, gryn och torkad frukt.' },
    { date: '2025-08-23', image: 'images/Food-Days/kottbullar.jpg', title: 'Köttbullens dag', description: 'En av Sveriges mest älskade rätter – bäst med potatis och lingon.' },
    { date: '2025-08-30', image: 'images/Food-Days/frö.jpg', title: 'Fröets dag', description: 'Där många av våra maträtter har sin början.' },

    { date: '2025-09-06', image: 'images/Food-Days/ostron.jpg', title: 'Ostronets dag', description: 'Lyxigt och havssmakande – bäst med citron och en droppe tabasco.' },
    { date: '2025-09-06', image: 'images/Food-Days/bacon.jpg', title: 'Internationella bacondagen', description: 'Krispigt, salt och omöjligt att motstå – bacon förgyller nästan allt.' },
    { date: '2025-09-07', image: 'images/Food-Days/svamp.jpg', title: 'Svampens dag', description: 'Skogens guld plockas och tillagas i mustiga rätter och soppor.' },
    { date: '2025-09-07', image: 'images/Food-Days/salami.jpg', title: 'Salamins dag', description: 'Lufttorkad och smakrik – perfekt till charkbrickan eller pizzan.' },
    { date: '2025-09-11', image: 'images/Food-Days/kebab.jpg', title: 'Kebabens dag', description: 'Kryddigt, saftigt och mättande – en favorit i rulle eller på tallrik.' },
    { date: '2025-09-18', image: 'images/Food-Days/surkal.jpg', title: 'Surkålens dag', description: 'En klassiker i det tyska köket – syrligt, fermenterat och hälsosamt.' },
    { date: '2025-09-21', image: 'images/Food-Days/brunch.jpg', title: 'Brunchens dag', description: 'När frukost möter lunch – en dag för långa och goda måltider.' },
    { date: '2025-09-25', image: 'images/Food-Days/applen.jpg', title: 'Äpplets dag', description: 'Krispigt och friskt – passar lika bra i paj som att äta som det är.' },
    { date: '2025-09-26', image: 'images/Food-Days/janssons.jpg', title: 'Janssons-dagen', description: 'Den klassiska gratängen med potatis, ansjovis och grädde hyllas idag.' },
    { date: '2025-09-27', image: 'images/Food-Days/skolmjolk.jpg', title: 'Skolmjölkens dag', description: 'En påminnelse om mjölkens roll i skolbespisningen genom åren.' },
    { date: '2025-09-29', image: 'images/Food-Days/kaffe.jpg', title: 'Kaffets dag', description: 'Sveriges mest älskade dryck – en dag för alla kaffedrickare.' },

    { date: '2025-10-01', image: 'images/Food-Days/vegetarisk.jpg', title: 'Vegetariska världsdagen', description: 'Ett tillfälle att prova mer grönt och laga helt växtbaserade rätter.' },
    { date: '2025-10-04', image: 'images/Food-Days/kanelbullar.jpg', title: 'Kanelbullens dag', description: 'En svensk favorit – bäst nybakad med ett glas kall mjölk.' },
    { date: '2025-10-05', image: 'images/Food-Days/graddtarta.jpg', title: 'Gräddtårtans dag', description: 'Fluffig grädde, bär och sockerkaksbotten – klassiskt och gott.' },
    { date: '2025-10-10', image: 'images/Food-Days/grot.jpg', title: 'Grötens dag', description: 'En näringsrik och mättande frukost – servera med bär eller sylt.' },
    { date: '2025-10-10', image: 'images/Food-Days/agg.jpg', title: 'Äggets dag', description: 'Ett av våra mest mångsidiga livsmedel – ät det kokt, stekt eller i omelett.' },
    { date: '2025-10-14', image: 'images/Food-Days/rakmacka.jpg', title: 'Räkmackans dag', description: 'Ett berg av handskalade räkor på en smörad skiva bröd – svårslaget.' },
    { date: '2025-10-16', image: 'images/Food-Days/grynkorv.jpg', title: 'Grynkorvens dag', description: 'En västsvensk specialitet gjord på fläsk, nötkött och korngryn.' },
    { date: '2025-10-16', image: 'images/Food-Days/maltid.jpg', title: 'Måltidens dag', description: 'En dag att uppmärksamma god och näringsrik mat i alla former.' },
    { date: '2025-10-18', image: 'images/Food-Days/chokladmuffins.jpg', title: 'Chokladmuffinsens dag', description: 'Saftiga och chokladiga – bäst med en kopp kaffe.' },
    { date: '2025-10-25', image: 'images/Food-Days/pasta.jpg', title: 'Världspastadagen', description: 'Hylla pastan med en riktigt god och krämig rätt.' },
    { date: '2025-10-26', image: 'images/Food-Days/potatis.jpg', title: 'Potatisens dag', description: 'Potatis kan varieras i oändlighet – ett av våra viktigaste livsmedel.' },
    { date: '2025-10-31', image: 'images/Food-Days/halloween.jpg', title: 'Halloween', description: 'Perfekt tillfälle att laga rysligt goda och kreativa rätter.' },
    { date: '2025-10-31', image: 'images/Food-Days/lutfisk.jpg', title: 'Lutfiskens dag', description: 'En klassiker på julbordet – en smak som delar många.' },

    { date: '2025-11-01', image: 'images/Food-Days/vegan.jpg', title: 'Internationella vegandagen', description: 'En dag för att uppmärksamma vegansk mat och hållbar kosthållning.' },
    { date: '2025-11-01', image: 'images/Food-Days/allahelgon.jpg', title: 'Alla helgons afton', description: 'En dag för att minnas nära och kära, ofta med en stillsam middag.' },
    { date: '2025-11-02', image: 'images/Food-Days/allahelgon.jpg', title: 'Alla helgons dag', description: 'En högtid för eftertanke och en traditionell familjemåltid.' },
    { date: '2025-11-07', image: 'images/Food-Days/kladdkaka.jpg', title: 'Kladdkakans dag', description: 'Sveriges kanske mest älskade chokladkaka – kladdig och perfekt med grädde.' },
    { date: '2025-11-09', image: 'images/Food-Days/farsdag.jpg', title: 'Fars dag', description: 'Fira pappa med en god middag eller hans favoritbakverk.' },
    { date: '2025-11-10', image: 'images/Food-Days/gas.jpg', title: 'Mårtensafton', description: 'Traditionell dag för gåsamiddag med klassisk skånsk svartsoppa.' },
    { date: '2025-11-11', image: 'images/Food-Days/choklad.jpg', title: 'Chokladens dag', description: 'Perfekt ursäkt att njuta av en bit riktigt bra choklad.' },
    { date: '2025-11-13', image: 'images/Food-Days/smorgastarta.jpg', title: 'Smörgåstårtans dag', description: 'Lyxig och festlig – en svensk klassiker fylld med goda smaker.' },
    { date: '2025-11-14', image: 'images/Food-Days/ostkaka.jpg', title: 'Ostkakans dag', description: 'Den småländska specialiteten serveras gärna med grädde och sylt.' },
    { date: '2025-11-16', image: 'images/Food-Days/mangkultur.jpg', title: 'Mångkulturella matdagen', description: 'En dag för att hylla matkultur från hela världen.' },
    { date: '2025-11-17', image: 'images/Food-Days/napoleon.jpg', title: 'Napoleonbakelsens dag', description: 'Spröd smördeg, vaniljkräm och glasyr – en elegant klassiker.' },
    { date: '2025-11-18', image: 'images/Food-Days/raggmunk.jpg', title: 'Raggmunkens dag', description: 'Stek en krispig raggmunk och servera med knaperstekt fläsk.' },
    { date: '2025-11-22', image: 'images/Food-Days/wienerbrod.jpg', title: 'Wienerbrödets dag', description: 'Fluffig deg, smör och vaniljkräm – lika gott till fikat som till frukost.' },
    { date: '2025-11-27', image: 'images/Food-Days/thanksgiving.jpg', title: 'Thanksgiving', description: 'En högtid fylld av mat och tacksamhet – ofta firad med kalkonmiddag.' },
    { date: '2025-11-30', image: 'images/Food-Days/advent.jpg', title: 'Första advent', description: 'Tiden för julbak och adventsfika inleds med pepparkakor och glögg.' },
    { date: '2025-11-30', image: 'images/Food-Days/kaldolmar.jpg', title: 'Kåldolmens dag', description: 'En svensk rätt med rötter i Turkiet, serveras ofta med potatis och lingon.' },

    { date: '2025-12-01', image: 'images/Food-Days/glogg.jpg', title: 'Glöggens dag', description: 'Julens signaturdryck – värmande och kryddig med smak av vinter.' },
    { date: '2025-12-07', image: 'images/Food-Days/advent.jpg', title: 'Andra advent', description: 'Fortsätt adventsfirandet med julbak och lussebullar.' },
    { date: '2025-12-09', image: 'images/Food-Days/pepparkaka.jpg', title: 'Pepparkakans dag', description: 'Knaprig och kryddig – perfekt med blåmögelost eller bara som den är.' },
    { date: '2025-12-13', image: 'images/Food-Days/lucia.jpg', title: 'Luciadagen', description: 'Lussebullar, glögg och Luciafirande i vintermörkret.' },
    { date: '2025-12-14', image: 'images/Food-Days/advent.jpg', title: 'Tredje advent', description: 'Baka något gott och tänd det tredje ljuset i adventsljusstaken.' },
    { date: '2025-12-18', image: 'images/Food-Days/kaka.jpg', title: 'Kakans dag', description: 'En dag för alla kakälskare – från småkakor till kladdiga brownies.' },
    { date: '2025-12-21', image: 'images/Food-Days/advent.jpg', title: 'Fjärde advent', description: 'Nu är det dags att runda av advent och ladda upp för julen.' },
    { date: '2025-12-21', image: 'images/Food-Days/skumtomte.jpg', title: 'Skumtomtens dag', description: 'Julens mest nostalgiska godis får sin egen dag.' },
    { date: '2025-12-24', image: 'images/Food-Days/jul.jpg', title: 'Julafton', description: 'Julbordets höjdpunkt – skinka, köttbullar, sill och allt därtill.' },
    { date: '2025-12-25', image: 'images/Food-Days/juldagen.jpg', title: 'Juldagen', description: 'Efter en lång julafton njuter många av en lugn dag med julmat.' },
    { date: '2025-12-26', image: 'images/Food-Days/annandagjul.jpg', title: 'Annandag jul', description: 'Traditionellt en dag för rester från julbordet och långpromenader.' },
    { date: '2025-12-31', image: 'images/Food-Days/nyar.jpg', title: 'Nyårsafton', description: 'En kväll för festliga middagar, skaldjur och bubbel.' }






];




function displayFoodDay() {
    const today = new Date();
    const formattedDate = today.getDate() + '/' + (today.getMonth() + 1); // Formaterar till "DD/MM"

    const todayISO = today.toISOString().slice(0, 10);
    const todayFoodDay = foodDays.find(day => day.date === todayISO);

    const container = document.getElementById('foodDayContainer');
    const headlineBackground = container.querySelector('.headline-background h2'); // Hämtar h2 inom headline-background
    const image = container.querySelector('#foodDayContainer img');
    const description = container.querySelector('p');

    if (todayFoodDay) {
        headlineBackground.innerText = `${formattedDate} ${todayFoodDay.title}`; // Lägger till dagens datum före titeln
        image.src = todayFoodDay.image;
        image.alt = todayFoodDay.title;
        description.innerText = todayFoodDay.description;
    } else {
        container.innerHTML = '<p></p>';
    }
}

document.addEventListener('DOMContentLoaded', displayFoodDay);

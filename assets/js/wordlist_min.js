const WORDLIST=[{id:1,categoryFr:"Animal",wordFr:"abeille",categoryEn:"Animal",wordEn:"bee",categoryIt:"Animale",wordIt:"ape",categoryNl:"Dier",wordNl:"bij",categoryDe:"Tier",wordDe:"biene"},{id:2,categoryFr:"Animal",wordFr:"chien",categoryEn:"Animal",wordEn:"dog",categoryIt:"Animale",wordIt:"cane",categoryNl:"Dier",wordNl:"hond",categoryDe:"Tier",wordDe:"hund"},{id:3,categoryFr:"Animal",wordFr:"ablette",categoryEn:"Animal",wordEn:"bleak",categoryIt:"Animale",wordIt:"spoglio",categoryNl:"Dier",wordNl:"kil",categoryDe:"Tier",wordDe:"kahl"},{id:4,categoryFr:"Animal",wordFr:"agneau",categoryEn:"Animal",wordEn:"lamb",categoryIt:"Animale",wordIt:"agnello",categoryNl:"Dier",wordNl:"lam",categoryDe:"Tier",wordDe:"lamm"},{id:5,categoryFr:"Animal",wordFr:"crocodile",categoryEn:"Animal",wordEn:"crocodile",categoryIt:"Animale",wordIt:"coccodrillo",categoryNl:"Dier",wordNl:"krokodil",categoryDe:"Tier",wordDe:"krokodil"},{id:6,categoryFr:"Vêtements",wordFr:"chaussure",categoryEn:"Clothes",wordEn:"shoe",categoryIt:"Vestiti",wordIt:"scarpa",categoryNl:"Kleren",wordNl:"schoen",categoryDe:"Kleider",wordDe:"schuh"},{id:7,categoryFr:"Vêtements",wordFr:"veste",categoryEn:"Clothes",wordEn:"jacket",categoryIt:"Vestiti",wordIt:"giacca",categoryNl:"Kleren",wordNl:"jasje",categoryDe:"Kleider",wordDe:"jacke"},{id:8,categoryFr:"Vêtements",wordFr:"chemise",categoryEn:"Clothes",wordEn:"shirt",categoryIt:"Vestiti",wordIt:"camicia",categoryNl:"Kleren",wordNl:"shirt",categoryDe:"Kleider",wordDe:"shirt"},{id:9,categoryFr:"Vêtements",wordFr:"chaussette",categoryEn:"Clothes",wordEn:"sock",categoryIt:"Vestiti",wordIt:"calzino",categoryNl:"Kleren",wordNl:"sok",categoryDe:"Kleider",wordDe:"socke"},{id:10,categoryFr:"Vêtements",wordFr:"cravate",categoryEn:"Clothes",wordEn:"tie",categoryIt:"Vestiti",wordIt:"legare",categoryNl:"Kleren",wordNl:"binden",categoryDe:"Kleider",wordDe:"binden"},{id:11,categoryFr:"Nourriture",wordFr:"pommes",categoryEn:"Food",wordEn:"apples",categoryIt:"Cibo",wordIt:"mele",categoryNl:"Voedsel",wordNl:"appels",categoryDe:"Lebensmittel",wordDe:"äpfel"},{id:12,categoryFr:"Nourriture",wordFr:"viande",categoryEn:"Food",wordEn:"meat",categoryIt:"Cibo",wordIt:"carne",categoryNl:"Voedsel",wordNl:"vlees",categoryDe:"Lebensmittel",wordDe:"fleisch"},{id:13,categoryFr:"Nourriture",wordFr:"pommes de terre",categoryEn:"Food",wordEn:"potatoes",categoryIt:"Cibo",wordIt:"patate",categoryNl:"Voedsel",wordNl:"aardappelen",categoryDe:"Lebensmittel",wordDe:"kartoffeln"},{id:14,categoryFr:"Nourriture",wordFr:"bonbons",categoryEn:"Food",wordEn:"candies",categoryIt:"Cibo",wordIt:"caramelle",categoryNl:"Voedsel",wordNl:"snoepjes",categoryDe:"Lebensmittel",wordDe:"bonbons"},{id:15,categoryFr:"Nourriture",wordFr:"tiramisu",categoryEn:"Food",wordEn:"tiramisu",categoryIt:"Cibo",wordIt:"tiramisù",categoryNl:"Voedsel",wordNl:"tiramisu",categoryDe:"Lebensmittel",wordDe:"tiramisu"},{id:16,categoryFr:"Ordinateur",wordFr:"clavier",categoryEn:"Computer",wordEn:"keyboard",categoryIt:"Computer",wordIt:"clavier",categoryNl:"Computer",wordNl:"toetsenbord",categoryDe:"Rechner",wordDe:"klaviatur"},{id:17,categoryFr:"Transport",wordFr:"voiture",categoryEn:"Transport",wordEn:"car",categoryIt:"Trasporto",wordIt:"auto",categoryNl:"Vervoer",wordNl:"auto",categoryDe:"Transport",wordDe:"wagen"},{id:18,categoryFr:"Travail",wordFr:"informaticien",categoryEn:"Jobs",wordEn:"computer scientist",categoryIt:"Lavori",wordIt:"informatico",categoryNl:"Werk",wordNl:"computer wetenschapper",categoryDe:"Arbeitsplätze",wordDe:"informatiker"},{id:19,categoryFr:"Sports",wordFr:"alpinisme",categoryEn:"Sports",wordEn:"mountaineering",categoryIt:"Sport",wordIt:"alpinismo",categoryNl:"Sport",wordNl:"bergbeklimmen",categoryDe:"Sport",wordDe:"bergsteigen"},{id:20,categoryFr:"Corps humain",wordFr:"bouche",categoryEn:"Body",wordEn:"mouth",categoryIt:"Corpo",wordIt:"bocca",categoryNl:"Lichaam",wordNl:"mond",categoryDe:"Körper",wordDe:"mund"},{id:21,categoryFr:"Cuisine",wordFr:"four",categoryEn:"Kitchen",wordEn:"oven",categoryIt:"Cibo",wordIt:"forno",categoryNl:"Keuken",wordNl:"oven",categoryDe:"Essen",wordDe:"ofen"},{id:22,categoryFr:"Jardin",wordFr:"pelouse",categoryEn:"Garden",wordEn:"lawn",categoryIt:"Giardino",wordIt:"prato",categoryNl:"Tuin",wordNl:"grasveld",categoryDe:"Garten",wordDe:"rasen"},{id:23,categoryFr:"Bâtiment",wordFr:"église",categoryEn:"Building",wordEn:"church",categoryIt:"Costruzione",wordIt:"chiesa",categoryNl:"Gebouw",wordNl:"kerk",categoryDe:"Gebäude",wordDe:"kirche"},{id:24,categoryFr:"Musique",wordFr:"guitare",categoryEn:"Music",wordEn:"guitar",categoryIt:"Musica",wordIt:"chitarra",categoryNl:"Muziek",wordNl:"gitaar",categoryDe:"Musik",wordDe:"gitarre"},{id:25,categoryFr:"Pays",wordFr:"belgique",categoryEn:"Country",wordEn:"belgium",categoryIt:"Nazione",wordIt:"belgio",categoryNl:"Land",wordNl:"belgië",categoryDe:"Land",wordDe:"belgien"},{id:26,categoryFr:"Meuble",wordFr:"garde-robe",categoryEn:"Furniture",wordEn:"wardrobe",categoryIt:"Mobili",wordIt:"armadio",categoryNl:"Meubilair",wordNl:"kledingkast",categoryDe:"Möbel",wordDe:"schrank"},{id:27,categoryFr:"Animal",wordFr:"calamar",categoryEn:"Animal",wordEn:"squid",categoryIt:"Animale",wordIt:"calamaro",categoryNl:"Dier",wordNl:"inktvis",categoryDe:"Tier",wordDe:"tintenfisch"},{id:28,categoryFr:"Animal",wordFr:"canard",categoryEn:"Animal",wordEn:"duck",categoryIt:"Animale",wordIt:"anatra",categoryNl:"Dier",wordNl:"eend",categoryDe:"Tier",wordDe:"ente"},{id:29,categoryFr:"Animal",wordFr:"écureuil",categoryEn:"Animal",wordEn:"squirrel",categoryIt:"Animale",wordIt:"scoiattolo",categoryNl:"Dier",wordNl:"eekhoorn",categoryDe:"Tier",wordDe:"eichhörnchen"},{id:30,categoryFr:"Animal",wordFr:"hérisson",categoryEn:"Animal",wordEn:"hedgehog",categoryIt:"Animale",wordIt:"riccio",categoryNl:"Dier",wordNl:"egel",categoryDe:"Tier",wordDe:"igel"},{id:31,categoryFr:"Animal",wordFr:"moustique",categoryEn:"Animal",wordEn:"mosquito",categoryIt:"Animale",wordIt:"zanzara",categoryNl:"Dier",wordNl:"mug",categoryDe:"Tier",wordDe:"Stechmücke"},{id:32,categoryFr:"Vêtements",wordFr:"slip",categoryEn:"Clothes",wordEn:"slip",categoryIt:"Vestiti",wordIt:"scivolo",categoryNl:"Kleren",wordNl:"slip",categoryDe:"Kleider",wordDe:"Schlupf"},{id:33,categoryFr:"Vêtements",wordFr:"pull",categoryEn:"Clothes",wordEn:"pullover",categoryIt:"Vestiti",wordIt:"ponticello",categoryNl:"Kleren",wordNl:"jumper",categoryDe:"Kleider",wordDe:"Springerin"},{id:34,categoryFr:"Vêtements",wordFr:"robe",categoryEn:"Clothes",wordEn:"dress",categoryIt:"Vestiti",wordIt:"vestito",categoryNl:"Kleren",wordNl:"jurk",categoryDe:"Kleider",wordDe:"Kleid"},{id:35,categoryFr:"Vêtements",wordFr:"jupe",categoryEn:"Clothes",wordEn:"skirt",categoryIt:"Vestiti",wordIt:"gonna",categoryNl:"Kleren",wordNl:"rok",categoryDe:"Kleider",wordDe:"Rock"},{id:36,categoryFr:"Vêtements",wordFr:"casquette",categoryEn:"Clothes",wordEn:"cap",categoryIt:"Vestiti",wordIt:"tappo",categoryNl:"Kleren",wordNl:"pet",categoryDe:"Kleider",wordDe:"Kappe"},{id:37,categoryFr:"Nourriture",wordFr:"poires",categoryEn:"Food",wordEn:"pears",categoryIt:"Cibo",wordIt:"pere",categoryNl:"Voedsel",wordNl:"peren",categoryDe:"Lebensmittel",wordDe:"Birnen"},{id:38,categoryFr:"Nourriture",wordFr:"spaghetti bolognaise",categoryEn:"Food",wordEn:"spaghetti bolognese",categoryIt:"Cibo",wordIt:"spaghetti alla bolognese",categoryNl:"Voedsel",wordNl:"spaghetti bolognese",categoryDe:"Lebensmittel",wordDe:"Spaghetti Bolognese"},{id:39,categoryFr:"Nourriture",wordFr:"steak frites",categoryEn:"Food",wordEn:"steak and chips",categoryIt:"Cibo",wordIt:"bistecca e patatine fritte",categoryNl:"Voedsel",wordNl:"steak en frieten",categoryDe:"Lebensmittel",wordDe:"Steak und Pommes frites"},{id:40,categoryFr:"Nourriture",wordFr:"brochette de poulet",categoryEn:"Food",wordEn:"chicken brochette",categoryIt:"Cibo",wordIt:"brochette di pollo",categoryNl:"Voedsel",wordNl:"kip brochette",categoryDe:"Lebensmittel",wordDe:"Hähnchenspieb"},{id:41,categoryFr:"Nourriture",wordFr:"croquette au parmesan",categoryEn:"Food",wordEn:"parmesan croquette",categoryIt:"Cibo",wordIt:"crocchetta di parmigiano",categoryNl:"Voedsel",wordNl:"parmezaanse kroket",categoryDe:"Lebensmittel",wordDe:"Parmesankrokette"},{id:42,categoryFr:"Ordinateur",wordFr:"processeur",categoryEn:"Computer",wordEn:"processor",categoryIt:"Computer",wordIt:"processore",categoryNl:"Computer",wordNl:"processor",categoryDe:"Rechner",wordDe:"prozessor"},{id:43,categoryFr:"Ordinateur",wordFr:"logiciel",categoryEn:"Computer",wordEn:"software",categoryIt:"Computer",wordIt:"software",categoryNl:"Computer",wordNl:"software",categoryDe:"Rechner",wordDe:"software"},{id:44,categoryFr:"Ordinateur",wordFr:"imprimante",categoryEn:"Computer",wordEn:"printer",categoryIt:"Computer",wordIt:"stampante",categoryNl:"Computer",wordNl:"printer",categoryDe:"Rechner",wordDe:"drucker"},{id:45,categoryFr:"Ordinateur",wordFr:"infographie",categoryEn:"Computer",wordEn:"infographics",categoryIt:"Computer",wordIt:"infografica",categoryNl:"Computer",wordNl:"infographics",categoryDe:"Rechner",wordDe:"Infografiken"},{id:46,categoryFr:"Ordinateur",wordFr:"émulateur",categoryEn:"Computer",wordEn:"emulator",categoryIt:"Computer",wordIt:"emulatore",categoryNl:"Computer",wordNl:"emulator",categoryDe:"Rechner",wordDe:"emulator"},{id:47,categoryFr:"Ordinateur",wordFr:"réseau informatique",categoryEn:"Computer",wordEn:"computer network",categoryIt:"Computer",wordIt:"rete di computer",categoryNl:"Computer",wordNl:"computernetwerk",categoryDe:"Rechner",wordDe:"Computernetzwerk"},{id:48,categoryFr:"Ordinateur",wordFr:"virtualisation",categoryEn:"Computer",wordEn:"virtualization",categoryIt:"Computer",wordIt:"virtualizzazione",categoryNl:"Computer",wordNl:"virtualisatie",categoryDe:"Rechner",wordDe:"Virtualisierung"},{id:49,categoryFr:"Transport",wordFr:"bus",categoryEn:"Transport",wordEn:"bus",categoryIt:"Transport",wordIt:"autobus",categoryNl:"Transport",wordNl:"bus",categoryDe:"Transport",wordDe:"bus"},{id:51,categoryFr:"Transport",wordFr:"hélicoptère",categoryEn:"Transport",wordEn:"helicopter",categoryIt:"Transport",wordIt:"elicottero",categoryNl:"Transport",wordNl:"helikopter",categoryDe:"Transport",wordDe:"hubschrauber"},{id:52,categoryFr:"Transport",wordFr:"train",categoryEn:"Transport",wordEn:"train",categoryIt:"Transport",wordIt:"treno",categoryNl:"Transport",wordNl:"trein",categoryDe:"Transport",wordDe:"zug"},{id:53,categoryFr:"Transport",wordFr:"métro",categoryEn:"Transport",wordEn:"metro",categoryIt:"Transport",wordIt:"metro",categoryNl:"Transport",wordNl:"metro",categoryDe:"Transport",wordDe:"metro"},{id:54,categoryFr:"Transport",wordFr:"avion",categoryEn:"Transport",wordEn:"aeroplane",categoryIt:"Transport",wordIt:"aereo",categoryNl:"Transport",wordNl:"vliegtuig",categoryDe:"Transport",wordDe:"flugzeug"},{id:55,categoryFr:"Transport",wordFr:"tram",categoryEn:"Transport",wordEn:"tramway",categoryIt:"Transport",wordIt:"tram",categoryNl:"Transport",wordNl:"tram",categoryDe:"Transport",wordDe:"strabenbahn"},{id:56,categoryFr:"Transport",wordFr:"camion",categoryEn:"Transport",wordEn:"truck",categoryIt:"Transport",wordIt:"camion",categoryNl:"Transport",wordNl:"vrachtwagen",categoryDe:"Transport",wordDe:"lastwagen"}];
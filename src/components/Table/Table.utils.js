import React from "react";

export const data = [
  { id: 1, name: "Smart phone", price: 400 },
  { id: 2, name: "TV", price: 1200 },
  { id: 3, name: "Tablet with a really long name", price: 850 }
];

export const columns = [
  { dataField: "id", text: "Product ID" },
  { dataField: "name", text: "Product Name", sort: true },
  {
    dataField: "price",
    text: "Product Price",
    sort: true,
    headerAlign: "right",
    align: "right",
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
      // console.log({ a, b, order, dataField, rowA, rowB });
      if (order === "desc") {
        return b - a;
      }
      return a - b;
    }
  }
];

export const dataBig = [
  {
    id: "5d0253a1c84a5c0edf67edd9",
    name: "Faulkner Henson",
    gender: "male",
    email: "faulknerhenson@uplinx.com",
    price: 354
  },
  {
    id: "5d0253a184537cc938db419e",
    name: "Haley Cotton",
    gender: "female",
    email: "haleycotton@uplinx.com",
    price: 9289
  },
  {
    id: "5d0253a1fefb5059b897ba4a",
    name: "Lynda Kline",
    gender: "female",
    email: "lyndakline@uplinx.com",
    price: 257
  },
  {
    id: "5d0253a14cf017a0cbacdb81",
    name: "Blanca Willis",
    gender: "female",
    email: "blancawillis@uplinx.com",
    price: 3147
  },
  {
    id: "5d0253a1c5c434396fae6f27",
    name: "Fry Hartman",
    gender: "male",
    email: "fryhartman@uplinx.com",
    price: 7583
  },
  {
    id: "5d0253a1abae62020bb2bde5",
    name: "King Rosa",
    gender: "male",
    email: "kingrosa@uplinx.com",
    price: 8536
  },
  {
    id: "5d0253a11748b858f2fac6a8",
    name: "Madeleine Wooten",
    gender: "female",
    email: "madeleinewooten@uplinx.com",
    price: 2811
  },
  {
    id: "5d0253a16533a69bff741560",
    name: "Julie Burke",
    gender: "female",
    email: "julieburke@uplinx.com",
    price: 5743
  },
  {
    id: "5d0253a1405096d318ae3d46",
    name: "Mclean Olson",
    gender: "male",
    email: "mcleanolson@uplinx.com",
    price: 5642
  },
  {
    id: "5d0253a1473b86aa60e665e7",
    name: "Howe Donaldson",
    gender: "male",
    email: "howedonaldson@uplinx.com",
    price: 4190
  },
  {
    id: "5d0253a18110f62386af698e",
    name: "Adeline Ford",
    gender: "female",
    email: "adelineford@uplinx.com",
    price: 9941
  },
  {
    id: "5d0253a1190662e83b2068b2",
    name: "Alejandra Alexander",
    gender: "female",
    email: "alejandraalexander@uplinx.com",
    price: 8148
  },
  {
    id: "5d0253a1a90394efc3dd9ab7",
    name: "Leola Ayala",
    gender: "female",
    email: "leolaayala@uplinx.com",
    price: 2601
  },
  {
    id: "5d0253a105dae3bf9638b142",
    name: "Conway Chang",
    gender: "male",
    email: "conwaychang@uplinx.com",
    price: 4828
  },
  {
    id: "5d0253a1977c1e311abd906d",
    name: "Nola Roman",
    gender: "female",
    email: "nolaroman@uplinx.com",
    price: 5965
  },
  {
    id: "5d0253a1b4784cf433c21fac",
    name: "Guerrero Beasley",
    gender: "male",
    email: "guerrerobeasley@uplinx.com",
    price: 252
  },
  {
    id: "5d0253a1c7f3993882f308a9",
    name: "Sutton Acosta",
    gender: "male",
    email: "suttonacosta@uplinx.com",
    price: 1565
  },
  {
    id: "5d0253a1a406e29a29104f31",
    name: "Bush Guy",
    gender: "male",
    email: "bushguy@uplinx.com",
    price: 4808
  },
  {
    id: "5d0253a1e2c3065720983b07",
    name: "Meagan Houston",
    gender: "female",
    email: "meaganhouston@uplinx.com",
    price: 2097
  },
  {
    id: "5d0253a1bf33266de3ad3e9f",
    name: "Mathews Jimenez",
    gender: "male",
    email: "mathewsjimenez@uplinx.com",
    price: 1343
  },
  {
    id: "5d0253a1b1a49ed5e8517ef6",
    name: "Rollins Ortiz",
    gender: "male",
    email: "rollinsortiz@uplinx.com",
    price: 8109
  },
  {
    id: "5d0253a15fe6187ee78f262c",
    name: "Althea Chen",
    gender: "female",
    email: "altheachen@uplinx.com",
    price: 1136
  },
  {
    id: "5d0253a1e6f345a92a85bf04",
    name: "Pollard Carrillo",
    gender: "male",
    email: "pollardcarrillo@uplinx.com",
    price: 5090
  },
  {
    id: "5d0253a1ea310470d3432b09",
    name: "Marcie Holden",
    gender: "female",
    email: "marcieholden@uplinx.com",
    price: 2533
  },
  {
    id: "5d0253a1471f1f2239fc31ac",
    name: "Callie Farrell",
    gender: "female",
    email: "calliefarrell@uplinx.com",
    price: 4049
  },
  {
    id: "5d0253a1f359a316002961a8",
    name: "Lilia Harper",
    gender: "female",
    email: "liliaharper@uplinx.com",
    price: 9858
  },
  {
    id: "5d0253a1747163ad1e2648e7",
    name: "Leah Mcfadden",
    gender: "female",
    email: "leahmcfadden@uplinx.com",
    price: 852
  },
  {
    id: "5d0253a19eace37e775b24a1",
    name: "Stewart Buckner",
    gender: "male",
    email: "stewartbuckner@uplinx.com",
    price: 6985
  },
  {
    id: "5d0253a1060e802bf907587e",
    name: "Brennan Palmer",
    gender: "male",
    email: "brennanpalmer@uplinx.com",
    price: 9428
  },
  {
    id: "5d0253a1480c4376fd9d2910",
    name: "Pearl Mcfarland",
    gender: "female",
    email: "pearlmcfarland@uplinx.com",
    price: 8142
  },
  {
    id: "5d0253a142bd87125f5e4cc5",
    name: "Bradford Rivas",
    gender: "male",
    email: "bradfordrivas@uplinx.com",
    price: 3699
  },
  {
    id: "5d0253a1787a2cebe968fe79",
    name: "Coffey Simpson",
    gender: "male",
    email: "coffeysimpson@uplinx.com",
    price: 6395
  },
  {
    id: "5d0253a1bc81d2116d3c6e31",
    name: "Carolina Herring",
    gender: "female",
    email: "carolinaherring@uplinx.com",
    price: 7643
  },
  {
    id: "5d0253a19f8dc655ce8cb371",
    name: "Compton Duncan",
    gender: "male",
    email: "comptonduncan@uplinx.com",
    price: 1906
  },
  {
    id: "5d0253a1ed8db78567cf5cd0",
    name: "Kinney Calhoun",
    gender: "male",
    email: "kinneycalhoun@uplinx.com",
    price: 9351
  },
  {
    id: "5d0253a12165b57971dd6836",
    name: "Catherine Thomas",
    gender: "female",
    email: "catherinethomas@uplinx.com",
    price: 3766
  },
  {
    id: "5d0253a1413034b7b6cd73fb",
    name: "Celia Banks",
    gender: "female",
    email: "celiabanks@uplinx.com",
    price: 1833
  },
  {
    id: "5d0253a1fc07bbffea5d0ef9",
    name: "Tanisha Haney",
    gender: "female",
    email: "tanishahaney@uplinx.com",
    price: 7725
  },
  {
    id: "5d0253a10f1e9181d47c2363",
    name: "Priscilla Hawkins",
    gender: "female",
    email: "priscillahawkins@uplinx.com",
    price: 8550
  },
  {
    id: "5d0253a13d713d0db620ac05",
    name: "Natalia Klein",
    gender: "female",
    email: "nataliaklein@uplinx.com",
    price: 4925
  },
  {
    id: "5d0253a18cbef1d78c00c27d",
    name: "Smith Workman",
    gender: "male",
    email: "smithworkman@uplinx.com",
    price: 1713
  },
  {
    id: "5d0253a1d41efe37f06b4d9f",
    name: "Johnnie Ingram",
    gender: "female",
    email: "johnnieingram@uplinx.com",
    price: 6718
  },
  {
    id: "5d0253a1db8878c5f55f7794",
    name: "Kate Marks",
    gender: "female",
    email: "katemarks@uplinx.com",
    price: 3561
  },
  {
    id: "5d0253a126e54ab6a96918f8",
    name: "Dillard Stevens",
    gender: "male",
    email: "dillardstevens@uplinx.com",
    price: 4284
  },
  {
    id: "5d0253a174eb911c7b9eb16d",
    name: "Tamika Anderson",
    gender: "female",
    email: "tamikaanderson@uplinx.com",
    price: 1971
  },
  {
    id: "5d0253a1eb5445577bec9cc7",
    name: "Peggy Melendez",
    gender: "female",
    email: "peggymelendez@uplinx.com",
    price: 3308
  },
  {
    id: "5d0253a10b11b6159ac45e72",
    name: "Kaufman Mills",
    gender: "male",
    email: "kaufmanmills@uplinx.com",
    price: 8578
  },
  {
    id: "5d0253a1c0f848ee1da47d10",
    name: "Forbes Cruz",
    gender: "male",
    email: "forbescruz@uplinx.com",
    price: 6059
  },
  {
    id: "5d0253a1813cf8cb22f2d7fe",
    name: "Perry Quinn",
    gender: "male",
    email: "perryquinn@uplinx.com",
    price: 8514
  },
  {
    id: "5d0253a18c49ff0751ffb3be",
    name: "Crosby Mays",
    gender: "male",
    email: "crosbymays@uplinx.com",
    price: 4563
  },
  {
    id: "5d0253a1289637982485bacf",
    name: "Alyson Pickett",
    gender: "female",
    email: "alysonpickett@uplinx.com",
    price: 8019
  },
  {
    id: "5d0253a1dbae46c523eb6450",
    name: "Lavonne Bright",
    gender: "female",
    email: "lavonnebright@uplinx.com",
    price: 3102
  },
  {
    id: "5d0253a12e4fc76366612a5a",
    name: "Sherri Bryan",
    gender: "female",
    email: "sherribryan@uplinx.com",
    price: 145
  },
  {
    id: "5d0253a1cc7b6534e150c82e",
    name: "Battle Murray",
    gender: "male",
    email: "battlemurray@uplinx.com",
    price: 9924
  },
  {
    id: "5d0253a1bae7ba51702f174e",
    name: "Marcy Moses",
    gender: "female",
    email: "marcymoses@uplinx.com",
    price: 604
  },
  {
    id: "5d0253a1946f994d7a486f76",
    name: "Pierce Hebert",
    gender: "male",
    email: "piercehebert@uplinx.com",
    price: 7949
  },
  {
    id: "5d0253a1a4686bf47d329a7a",
    name: "Rojas Norton",
    gender: "male",
    email: "rojasnorton@uplinx.com",
    price: 1462
  },
  {
    id: "5d0253a15301f36065e28d0b",
    name: "Gilmore Castillo",
    gender: "male",
    email: "gilmorecastillo@uplinx.com",
    price: 8501
  },
  {
    id: "5d0253a1f9789561641998ea",
    name: "Janette Dickerson",
    gender: "female",
    email: "janettedickerson@uplinx.com",
    price: 8347
  },
  {
    id: "5d0253a1cade4884a1fb6fea",
    name: "Selma Wells",
    gender: "female",
    email: "selmawells@uplinx.com",
    price: 2246
  },
  {
    id: "5d0253a11cebf0087ec0983e",
    name: "Huff Campos",
    gender: "male",
    email: "huffcampos@uplinx.com",
    price: 2500
  },
  {
    id: "5d0253a13a9bc418d64c14a5",
    name: "Gwen Garner",
    gender: "female",
    email: "gwengarner@uplinx.com",
    price: 9762
  },
  {
    id: "5d0253a1beeb34217bef39fc",
    name: "Jodi Powers",
    gender: "female",
    email: "jodipowers@uplinx.com",
    price: 6099
  },
  {
    id: "5d0253a11bbfe805fa10f47d",
    name: "Annette Ochoa",
    gender: "female",
    email: "annetteochoa@uplinx.com",
    price: 5316
  },
  {
    id: "5d0253a1b7f54d1ac67fdf63",
    name: "Jacobs Manning",
    gender: "male",
    email: "jacobsmanning@uplinx.com",
    price: 5616
  },
  {
    id: "5d0253a171ff361388fd8a56",
    name: "Letha Shannon",
    gender: "female",
    email: "lethashannon@uplinx.com",
    price: 7786
  },
  {
    id: "5d0253a13ac984e3d72a0cd8",
    name: "Kendra Evans",
    gender: "female",
    email: "kendraevans@uplinx.com",
    price: 4329
  },
  {
    id: "5d0253a1a7fcba15b048ae3b",
    name: "Corinne Mcneil",
    gender: "female",
    email: "corinnemcneil@uplinx.com",
    price: 466
  },
  {
    id: "5d0253a1125e7bd6bc38af74",
    name: "Greta Lynch",
    gender: "female",
    email: "gretalynch@uplinx.com",
    price: 4964
  },
  {
    id: "5d0253a1b33915179b5b7264",
    name: "Levy Sampson",
    gender: "male",
    email: "levysampson@uplinx.com",
    price: 3930
  },
  {
    id: "5d0253a1f5ec1c10b39b65d9",
    name: "Isabel Mccullough",
    gender: "female",
    email: "isabelmccullough@uplinx.com",
    price: 4008
  },
  {
    id: "5d0253a1c2ccf65e6ee1b93b",
    name: "Coleman Walker",
    gender: "male",
    email: "colemanwalker@uplinx.com",
    price: 1789
  },
  {
    id: "5d0253a1049436a71c543386",
    name: "Nixon Roberts",
    gender: "male",
    email: "nixonroberts@uplinx.com",
    price: 2896
  },
  {
    id: "5d0253a1361f893d15bf3ee0",
    name: "Bean Benton",
    gender: "male",
    email: "beanbenton@uplinx.com",
    price: 4894
  },
  {
    id: "5d0253a1cacfc51bc3ec3605",
    name: "Dena Pena",
    gender: "female",
    email: "denapena@uplinx.com",
    price: 2495
  },
  {
    id: "5d0253a15be3eb4480ab866b",
    name: "Paul Cardenas",
    gender: "male",
    email: "paulcardenas@uplinx.com",
    price: 7669
  },
  {
    id: "5d0253a1ffd7a41fb24d3cb9",
    name: "Franco Briggs",
    gender: "male",
    email: "francobriggs@uplinx.com",
    price: 6522
  },
  {
    id: "5d0253a1b6f76ed3efac78e5",
    name: "Joan Navarro",
    gender: "female",
    email: "joannavarro@uplinx.com",
    price: 4083
  },
  {
    id: "5d0253a1a7e05392d96d455e",
    name: "Geneva Elliott",
    gender: "female",
    email: "genevaelliott@uplinx.com",
    price: 8585
  },
  {
    id: "5d0253a1ee5e17e6820a2ebf",
    name: "Hunter Sharp",
    gender: "male",
    email: "huntersharp@uplinx.com",
    price: 533
  },
  {
    id: "5d0253a14eb735cadae281bb",
    name: "Lidia Garrett",
    gender: "female",
    email: "lidiagarrett@uplinx.com",
    price: 9341
  },
  {
    id: "5d0253a1b6ada9d6859f9f45",
    name: "Parks Collins",
    gender: "male",
    email: "parkscollins@uplinx.com",
    price: 3749
  },
  {
    id: "5d0253a16142285b913f1b1f",
    name: "Bertha Noel",
    gender: "female",
    email: "berthanoel@uplinx.com",
    price: 1881
  },
  {
    id: "5d0253a1a09dc63f884b58ab",
    name: "Roxie Terry",
    gender: "female",
    email: "roxieterry@uplinx.com",
    price: 2811
  },
  {
    id: "5d0253a1dab5e7d9df40922c",
    name: "Brandie Bender",
    gender: "female",
    email: "brandiebender@uplinx.com",
    price: 6278
  },
  {
    id: "5d0253a150b023c3c6188da7",
    name: "Gallagher Padilla",
    gender: "male",
    email: "gallagherpadilla@uplinx.com",
    price: 1949
  },
  {
    id: "5d0253a1d017b7346b3fa4f8",
    name: "Prince Browning",
    gender: "male",
    email: "princebrowning@uplinx.com",
    price: 1111
  },
  {
    id: "5d0253a1c55b5cb12a6144e8",
    name: "Joanne Dejesus",
    gender: "female",
    email: "joannedejesus@uplinx.com",
    price: 6689
  },
  {
    id: "5d0253a1cb9ab9e24bb6b23b",
    name: "Robyn Bradford",
    gender: "female",
    email: "robynbradford@uplinx.com",
    price: 79
  },
  {
    id: "5d0253a1ad965f7aa90a4a07",
    name: "Dixie Barrett",
    gender: "female",
    email: "dixiebarrett@uplinx.com",
    price: 2511
  },
  {
    id: "5d0253a18890fd0c4bd417db",
    name: "Isabelle Michael",
    gender: "female",
    email: "isabellemichael@uplinx.com",
    price: 9514
  },
  {
    id: "5d0253a1e0717d889cc0efb7",
    name: "Walls Kinney",
    gender: "male",
    email: "wallskinney@uplinx.com",
    price: 1289
  },
  {
    id: "5d0253a1908de9ea3ca24b32",
    name: "Aimee Melton",
    gender: "female",
    email: "aimeemelton@uplinx.com",
    price: 5960
  },
  {
    id: "5d0253a16b337c8bcd650183",
    name: "Roberta Robbins",
    gender: "female",
    email: "robertarobbins@uplinx.com",
    price: 2323
  },
  {
    id: "5d0253a147ea3dd00dc8bbe1",
    name: "Karyn Middleton",
    gender: "female",
    email: "karynmiddleton@uplinx.com",
    price: 3340
  },
  {
    id: "5d0253a1eb8477e2c83e35eb",
    name: "Powell Lewis",
    gender: "male",
    email: "powelllewis@uplinx.com",
    price: 3177
  },
  {
    id: "5d0253a169f96f1706441083",
    name: "Winters Pruitt",
    gender: "male",
    email: "winterspruitt@uplinx.com",
    price: 7466
  },
  {
    id: "5d0253a1495c7b636f47eb1f",
    name: "Morrow Best",
    gender: "male",
    email: "morrowbest@uplinx.com",
    price: 2405
  },
  {
    id: "5d0253a17b58efba09248fff",
    name: "Jenifer Donovan",
    gender: "female",
    email: "jeniferdonovan@uplinx.com",
    price: 4169
  },
  {
    id: "5d0253a10306a85e3c060e87",
    name: "Bond Blankenship",
    gender: "male",
    email: "bondblankenship@uplinx.com",
    price: 7311
  }
];

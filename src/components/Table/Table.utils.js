import React from "react";

export const data = [
  { id: 1, name: "Faulkner Henson", gender: "male", age: 35 },
  { id: 2, name: "Haley Cotton", gender: "female", age: 92 },
  { id: 3, name: "Lynda Kline", gender: "female", age: 25 }
];

export const columns = [
  { field: "id", header: "User ID" },
  { field: "name", header: "Full Name", sort: true },
  {
    field: "age",
    header: "User Age",
    align: "right",
    sort: (a, b, order) => (order === "desc" ? b - a : a - b)
  }
];

export const dataBig = [
  {
    id: "5d08c7db074e8fc627cbbe3e",
    name: "Geneva Delacruz",
    gender: "female",
    email: "genevadelacruz@waterbaby.com",
    age: 85
  },
  {
    id: "5d08c7db0edf13b84cd18c6e",
    name: "Pace Hopper",
    gender: "male",
    email: "pacehopper@waterbaby.com",
    age: 83
  },
  {
    id: "5d08c7db01e5fe8f0acee8e3",
    name: "Hickman Browning",
    gender: "male",
    email: "hickmanbrowning@waterbaby.com",
    age: 42
  },
  {
    id: "5d08c7dbbc555f9cdccecf91",
    name: "Prince Bell",
    gender: "male",
    email: "princebell@waterbaby.com",
    age: 37
  },
  {
    id: "5d08c7dbf889283d194eb531",
    name: "Mccall Silva",
    gender: "male",
    email: "mccallsilva@waterbaby.com",
    age: 90
  },
  {
    id: "5d08c7dbbe9a18f2c3d55786",
    name: "Thornton Grant",
    gender: "male",
    email: "thorntongrant@waterbaby.com",
    age: 46
  },
  {
    id: "5d08c7dbe49e5bd19207f1ba",
    name: "Lynne Butler",
    gender: "female",
    email: "lynnebutler@waterbaby.com",
    age: 99
  },
  {
    id: "5d08c7db91edde331b52901e",
    name: "Weaver Rivas",
    gender: "male",
    email: "weaverrivas@waterbaby.com",
    age: 32
  },
  {
    id: "5d08c7db42409e252a224ab4",
    name: "Kristi Little",
    gender: "female",
    email: "kristilittle@waterbaby.com",
    age: 62
  },
  {
    id: "5d08c7dbeb4f21e66955f65a",
    name: "Roach Kane",
    gender: "male",
    email: "roachkane@waterbaby.com",
    age: 41
  },
  {
    id: "5d08c7dbae2f60cd2801def0",
    name: "Christian Abbott",
    gender: "female",
    email: "christianabbott@waterbaby.com",
    age: 91
  },
  {
    id: "5d08c7db66152ceac456c651",
    name: "Kitty Estrada",
    gender: "female",
    email: "kittyestrada@waterbaby.com",
    age: 44
  },
  {
    id: "5d08c7dbdc1f35b2f367c766",
    name: "Adrienne Foster",
    gender: "female",
    email: "adriennefoster@waterbaby.com",
    age: 21
  },
  {
    id: "5d08c7db6a01975cc9b02ff0",
    name: "Frazier Waters",
    gender: "male",
    email: "frazierwaters@waterbaby.com",
    age: 40
  },
  {
    id: "5d08c7dbf1dba691377645a9",
    name: "Lidia Carpenter",
    gender: "female",
    email: "lidiacarpenter@waterbaby.com",
    age: 60
  },
  {
    id: "5d08c7db1e851782ae3b1f0e",
    name: "Lopez Webb",
    gender: "male",
    email: "lopezwebb@waterbaby.com",
    age: 86
  },
  {
    id: "5d08c7db51b8386843bde4d1",
    name: "Rebecca Brewer",
    gender: "female",
    email: "rebeccabrewer@waterbaby.com",
    age: 62
  },
  {
    id: "5d08c7dbb04aa986fdbef2e3",
    name: "Sampson Hickman",
    gender: "male",
    email: "sampsonhickman@waterbaby.com",
    age: 46
  },
  {
    id: "5d08c7db92ee7f44b6803e99",
    name: "Clare Stephens",
    gender: "female",
    email: "clarestephens@waterbaby.com",
    age: 25
  },
  {
    id: "5d08c7db18cad7eeac3010bd",
    name: "Jenifer Quinn",
    gender: "female",
    email: "jeniferquinn@waterbaby.com",
    age: 31
  },
  {
    id: "5d08c7db356c205ed4096ef5",
    name: "Alvarado Turner",
    gender: "male",
    email: "alvaradoturner@waterbaby.com",
    age: 36
  },
  {
    id: "5d08c7db26cd23e367ca31fc",
    name: "Claudette Duran",
    gender: "female",
    email: "claudetteduran@waterbaby.com",
    age: 76
  },
  {
    id: "5d08c7db917db6300caabd6f",
    name: "Mendez Doyle",
    gender: "male",
    email: "mendezdoyle@waterbaby.com",
    age: 87
  },
  {
    id: "5d08c7db5949337ab3a83755",
    name: "Krystal Mooney",
    gender: "female",
    email: "krystalmooney@waterbaby.com",
    age: 27
  },
  {
    id: "5d08c7db608e52f2cc705bd5",
    name: "Miranda Meyer",
    gender: "female",
    email: "mirandameyer@waterbaby.com",
    age: 34
  },
  {
    id: "5d08c7dbaaef19a19c5a537e",
    name: "Hammond York",
    gender: "male",
    email: "hammondyork@waterbaby.com",
    age: 48
  },
  {
    id: "5d08c7dbdf41f666697108a0",
    name: "Hilary Leblanc",
    gender: "female",
    email: "hilaryleblanc@waterbaby.com",
    age: 33
  },
  {
    id: "5d08c7db255eef10dcad9e43",
    name: "Edwina Compton",
    gender: "female",
    email: "edwinacompton@waterbaby.com",
    age: 89
  },
  {
    id: "5d08c7db5c495b0fecf60457",
    name: "Joseph Chavez",
    gender: "male",
    email: "josephchavez@waterbaby.com",
    age: 37
  },
  {
    id: "5d08c7dbcdd77e210c885ce5",
    name: "Huber Howard",
    gender: "male",
    email: "huberhoward@waterbaby.com",
    age: 49
  },
  {
    id: "5d08c7db0a9d7145291f344b",
    name: "Leanna Mcdowell",
    gender: "female",
    email: "leannamcdowell@waterbaby.com",
    age: 67
  },
  {
    id: "5d08c7dbe49cc99d7c1f41f8",
    name: "May Mckinney",
    gender: "male",
    email: "maymckinney@waterbaby.com",
    age: 85
  },
  {
    id: "5d08c7db519dc8e0edbfef7d",
    name: "Lupe Campbell",
    gender: "female",
    email: "lupecampbell@waterbaby.com",
    age: 85
  },
  {
    id: "5d08c7dba2d6459e32366844",
    name: "Bette Weiss",
    gender: "female",
    email: "betteweiss@waterbaby.com",
    age: 87
  },
  {
    id: "5d08c7dbacd54da11d729f59",
    name: "Amparo Livingston",
    gender: "female",
    email: "amparolivingston@waterbaby.com",
    age: 26
  },
  {
    id: "5d08c7dbe2c2faf0120c5065",
    name: "Hopper Wilder",
    gender: "male",
    email: "hopperwilder@waterbaby.com",
    age: 68
  },
  {
    id: "5d08c7db376ddeae10d9300a",
    name: "Sykes Owens",
    gender: "male",
    email: "sykesowens@waterbaby.com",
    age: 31
  },
  {
    id: "5d08c7db845686a64d916aa9",
    name: "Constance Schroeder",
    gender: "female",
    email: "constanceschroeder@waterbaby.com",
    age: 24
  },
  {
    id: "5d08c7db04657a3fefbac473",
    name: "Janice Newman",
    gender: "female",
    email: "janicenewman@waterbaby.com",
    age: 58
  },
  {
    id: "5d08c7dbaf58e84adb0d44b5",
    name: "Suarez Hall",
    gender: "male",
    email: "suarezhall@waterbaby.com",
    age: 54
  },
  {
    id: "5d08c7dbc33a4775ee1f4fee",
    name: "Ella Williams",
    gender: "female",
    email: "ellawilliams@waterbaby.com",
    age: 91
  },
  {
    id: "5d08c7db4d4fe1edc2e4f502",
    name: "Valdez Bass",
    gender: "male",
    email: "valdezbass@waterbaby.com",
    age: 75
  },
  {
    id: "5d08c7db0e8a4ec1f1937594",
    name: "Leila Brown",
    gender: "female",
    email: "leilabrown@waterbaby.com",
    age: 32
  },
  {
    id: "5d08c7dbc9f0498790903791",
    name: "Abbott Powell",
    gender: "male",
    email: "abbottpowell@waterbaby.com",
    age: 97
  },
  {
    id: "5d08c7dbdbba748718a57d3c",
    name: "Russo Weeks",
    gender: "male",
    email: "russoweeks@waterbaby.com",
    age: 35
  },
  {
    id: "5d08c7db118b3edd8a0a33a0",
    name: "Savage Gonzalez",
    gender: "male",
    email: "savagegonzalez@waterbaby.com",
    age: 45
  },
  {
    id: "5d08c7db59f27dc78230b8e6",
    name: "Enid Figueroa",
    gender: "female",
    email: "enidfigueroa@waterbaby.com",
    age: 27
  },
  {
    id: "5d08c7dbd482a407c20b9a79",
    name: "Downs Tucker",
    gender: "male",
    email: "downstucker@waterbaby.com",
    age: 26
  },
  {
    id: "5d08c7dbdc89e16a46d89a18",
    name: "Jessica Berry",
    gender: "female",
    email: "jessicaberry@waterbaby.com",
    age: 18
  },
  {
    id: "5d08c7db217efd8546bd5ebb",
    name: "Melissa Daniel",
    gender: "female",
    email: "melissadaniel@waterbaby.com",
    age: 78
  },
  {
    id: "5d08c7dbac2fde5cf690d5cd",
    name: "Robbie Stewart",
    gender: "female",
    email: "robbiestewart@waterbaby.com",
    age: 62
  },
  {
    id: "5d08c7db48fe81fda8aae6d0",
    name: "Horne Wheeler",
    gender: "male",
    email: "hornewheeler@waterbaby.com",
    age: 28
  },
  {
    id: "5d08c7db423158a9e7377666",
    name: "Wilkerson Copeland",
    gender: "male",
    email: "wilkersoncopeland@waterbaby.com",
    age: 25
  },
  {
    id: "5d08c7dba04ddc08f24f0675",
    name: "Waller Sexton",
    gender: "male",
    email: "wallersexton@waterbaby.com",
    age: 50
  },
  {
    id: "5d08c7dbff0f7c8cf6eebc0f",
    name: "Maryanne Whitfield",
    gender: "female",
    email: "maryannewhitfield@waterbaby.com",
    age: 40
  },
  {
    id: "5d08c7db311103e4ead951d5",
    name: "Minnie Lopez",
    gender: "female",
    email: "minnielopez@waterbaby.com",
    age: 77
  },
  {
    id: "5d08c7db09ce0013474d5e02",
    name: "Darla Levine",
    gender: "female",
    email: "darlalevine@waterbaby.com",
    age: 45
  },
  {
    id: "5d08c7db59f44de45f42deb1",
    name: "Rivas Ware",
    gender: "male",
    email: "rivasware@waterbaby.com",
    age: 22
  },
  {
    id: "5d08c7db3c2d84b902ad8309",
    name: "Pickett Douglas",
    gender: "male",
    email: "pickettdouglas@waterbaby.com",
    age: 78
  },
  {
    id: "5d08c7db8a7bd9fd768de201",
    name: "Alexis Ellison",
    gender: "female",
    email: "alexisellison@waterbaby.com",
    age: 66
  },
  {
    id: "5d08c7db79aff66105ebbc4f",
    name: "Winters Ortega",
    gender: "male",
    email: "wintersortega@waterbaby.com",
    age: 28
  },
  {
    id: "5d08c7dbc87666f1612900ea",
    name: "Ayala Houston",
    gender: "male",
    email: "ayalahouston@waterbaby.com",
    age: 99
  },
  {
    id: "5d08c7db0914f5b9ec45350c",
    name: "Lucile Pratt",
    gender: "female",
    email: "lucilepratt@waterbaby.com",
    age: 32
  },
  {
    id: "5d08c7db33bbe9e62dd2ed48",
    name: "Calderon Koch",
    gender: "male",
    email: "calderonkoch@waterbaby.com",
    age: 52
  },
  {
    id: "5d08c7dbbbec01f3a7cee0cc",
    name: "Priscilla Owen",
    gender: "female",
    email: "priscillaowen@waterbaby.com",
    age: 71
  },
  {
    id: "5d08c7dbf56eb8a93a1021a2",
    name: "Brenda Bruce",
    gender: "female",
    email: "brendabruce@waterbaby.com",
    age: 66
  },
  {
    id: "5d08c7dbd4d8deaa9803a696",
    name: "Tisha Harrington",
    gender: "female",
    email: "tishaharrington@waterbaby.com",
    age: 18
  },
  {
    id: "5d08c7db5fa3c698447d1e89",
    name: "Peterson Dale",
    gender: "male",
    email: "petersondale@waterbaby.com",
    age: 18
  },
  {
    id: "5d08c7db1e33ce22efb0e153",
    name: "Cummings Deleon",
    gender: "male",
    email: "cummingsdeleon@waterbaby.com",
    age: 97
  },
  {
    id: "5d08c7db821e56028993a048",
    name: "David Small",
    gender: "male",
    email: "davidsmall@waterbaby.com",
    age: 72
  },
  {
    id: "5d08c7db5016fdb5af20e469",
    name: "Whitfield Fox",
    gender: "male",
    email: "whitfieldfox@waterbaby.com",
    age: 21
  },
  {
    id: "5d08c7db8dc11cead0f5da05",
    name: "Sally Stanton",
    gender: "female",
    email: "sallystanton@waterbaby.com",
    age: 65
  },
  {
    id: "5d08c7dbc3d9f7734644cffb",
    name: "Oliver Hale",
    gender: "male",
    email: "oliverhale@waterbaby.com",
    age: 29
  },
  {
    id: "5d08c7db342ed1d1affb316d",
    name: "Melisa Hess",
    gender: "female",
    email: "melisahess@waterbaby.com",
    age: 18
  },
  {
    id: "5d08c7dbdb9409b4b744d532",
    name: "Maureen Holder",
    gender: "female",
    email: "maureenholder@waterbaby.com",
    age: 88
  },
  {
    id: "5d08c7db24f3874b6ff85894",
    name: "Carmela Sykes",
    gender: "female",
    email: "carmelasykes@waterbaby.com",
    age: 32
  },
  {
    id: "5d08c7db0dcda3c4f57ded2f",
    name: "Gross Joyce",
    gender: "male",
    email: "grossjoyce@waterbaby.com",
    age: 32
  },
  {
    id: "5d08c7dbbe20a24b1f445118",
    name: "Nola Anthony",
    gender: "female",
    email: "nolaanthony@waterbaby.com",
    age: 91
  },
  {
    id: "5d08c7dbd0500baef7ef329f",
    name: "Mcclure Cash",
    gender: "male",
    email: "mcclurecash@waterbaby.com",
    age: 75
  },
  {
    id: "5d08c7db8d8b94888a1f55a1",
    name: "Cara Skinner",
    gender: "female",
    email: "caraskinner@waterbaby.com",
    age: 53
  },
  {
    id: "5d08c7db8d48e073f5cb5646",
    name: "Jana Gates",
    gender: "female",
    email: "janagates@waterbaby.com",
    age: 65
  },
  {
    id: "5d08c7db54e175d19d11ed76",
    name: "Theresa Woodward",
    gender: "female",
    email: "theresawoodward@waterbaby.com",
    age: 32
  },
  {
    id: "5d08c7db495fc95a482af249",
    name: "Hannah Franco",
    gender: "female",
    email: "hannahfranco@waterbaby.com",
    age: 65
  },
  {
    id: "5d08c7db0860b60470d48b95",
    name: "Alexandra Miles",
    gender: "female",
    email: "alexandramiles@waterbaby.com",
    age: 40
  },
  {
    id: "5d08c7db696c85c4f359558e",
    name: "Cantrell Peck",
    gender: "male",
    email: "cantrellpeck@waterbaby.com",
    age: 96
  },
  {
    id: "5d08c7db83636d67fff5f32a",
    name: "Doyle Wiggins",
    gender: "male",
    email: "doylewiggins@waterbaby.com",
    age: 85
  },
  {
    id: "5d08c7db2f6b8df874786d54",
    name: "Brady Randolph",
    gender: "male",
    email: "bradyrandolph@waterbaby.com",
    age: 96
  },
  {
    id: "5d08c7dbdef9081f46c7b999",
    name: "Robertson Larsen",
    gender: "male",
    email: "robertsonlarsen@waterbaby.com",
    age: 42
  },
  {
    id: "5d08c7db83e2db6c88271bc9",
    name: "Blankenship Chen",
    gender: "male",
    email: "blankenshipchen@waterbaby.com",
    age: 72
  },
  {
    id: "5d08c7db38d40d0f31ef7365",
    name: "Mariana Molina",
    gender: "female",
    email: "marianamolina@waterbaby.com",
    age: 88
  },
  {
    id: "5d08c7db396e3c2fbb6f4318",
    name: "Tommie Nelson",
    gender: "female",
    email: "tommienelson@waterbaby.com",
    age: 80
  },
  {
    id: "5d08c7dbaa23d9caa43615a0",
    name: "Vargas Walker",
    gender: "male",
    email: "vargaswalker@waterbaby.com",
    age: 18
  },
  {
    id: "5d08c7db02be324083d84a06",
    name: "Regina Savage",
    gender: "female",
    email: "reginasavage@waterbaby.com",
    age: 29
  },
  {
    id: "5d08c7db4fe8b93d714032dd",
    name: "Letha Petersen",
    gender: "female",
    email: "lethapetersen@waterbaby.com",
    age: 35
  },
  {
    id: "5d08c7db730b1099fa493b9c",
    name: "Kathryn Love",
    gender: "female",
    email: "kathrynlove@waterbaby.com",
    age: 63
  },
  {
    id: "5d08c7db602a75f353d79c95",
    name: "Alyssa Sloan",
    gender: "female",
    email: "alyssasloan@waterbaby.com",
    age: 43
  },
  {
    id: "5d08c7db270eba3ae35ffb5f",
    name: "Robyn Hurley",
    gender: "female",
    email: "robynhurley@waterbaby.com",
    age: 83
  },
  {
    id: "5d08c7dbcf0ffdd63c02ba50",
    name: "Jeannette Young",
    gender: "female",
    email: "jeannetteyoung@waterbaby.com",
    age: 89
  },
  {
    id: "5d08c7db1bcc025423cda7e3",
    name: "Manuela Patel",
    gender: "female",
    email: "manuelapatel@waterbaby.com",
    age: 84
  },
  {
    id: "5d08c7dbeed7560d58e181fd",
    name: "Maxwell Neal",
    gender: "male",
    email: "maxwellneal@waterbaby.com",
    age: 77
  }
];

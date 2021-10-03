cityList = [
  {
    name: "Paris",
    briefDescr: "La ville lumière",
    picture: "img/torre-eiffel-3.jpg",
  },
  {
    name: "Barcelona",
    briefDescr: "Discover Gaudi",
    picture: "https://images.unsplash.com/photo-1561407531-2b7ccd6b66b2",
  },
  {
    name: "Berlin",
    briefDescr: "The best clubs",
    picture: "https://images.unsplash.com/photo-1622182438074-b163bdf8f16c",
  }
];

eventList = [
  {
    city: "Paris",
    name: "Boardgame night",
    placeName: "LE NID - Cocon Ludique",
    placeURL: "http://lenid-coconludique.com",
    dateAndTime: "06.11.2021 / 6pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "Come to enjoy an evening playing board games with nice people!",
    pictureURL: "https://images.unsplash.com/photo-1585504198199-20277593b94f"
  },
  {
    city: "Paris",
    name: "Cheese and Wine",
    placeName: "Wine Tasting in Paris",
    placeURL: "https://wine-tasting-in-paris.com",
    dateAndTime: "12.11.2021 / 7pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "A unique opportunity to discover and taste great French wine!",
    pictureURL: "https://www.istockphoto.com/es/foto/elegante-mesa-para-el-almuerzo-gm182436845-11776455"
  },
  {
    city: "Paris",
    name: "Afterwork AlumnEye",
    placeName: "Le Strogoff",
    placeURL: "https://www.eventbrite.com/e/billets-afterwork-alumneye-43-paris-170401583724?keep_tld=1",
    dateAndTime: "13.10.2021 / 6:30pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "ZE French meeting point for the financial youth professionals",
    pictureURL: "https://images.unsplash.com/photo-1485872299829-c673f5194813"
  },
  {
    city: "Paris",
    name: "Organic food",
    placeName: "Supernature",
    placeURL: "https://en.parisinfo.com/paris-restaurant/70956/Supernature",
    dateAndTime: "03.10.2021 / 6pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "Supernature offers simple dishes made with fresh and healthy ingredients, mostly organic or local.",
    pictureURL: "https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_532/bol-porridge-bar-l-630x405-l-%C2%A9-bol-porridge-bar-dr/18437518-4-fre-FR/Bol-Porridge-Bar-l-630x405-l-%C2%A9-Bol-Porridge-Bar-DR.jpg"
  },
  {
    city: "Barcelona",
    name: "El Arrebato",
    placeName: "Barts Club",
    placeURL: "https://www.barcelona-metropolitan.com/events/el-arrebato/?occ_dtstart=2021-10-03T19:30",
    dateAndTime: "07.11.2021 / 7:30pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "Javier Labandón of El Arrebato is one of the most charismatic figures on the Spanish music scene today. ",
    pictureURL: "https://www.barcelona-metropolitan.com/downloads/37158/download/Screenshot%202021-08-30%20at%2011.03.48.png"
  },
  {
    city: "Barcelona",
    name: "Visit of the Sagrada Familia",
    placeName: "Sagrada Familia",
    placeURL: "https://sagradafamilia.org/en/",
    dateAndTime: "13.11.2021 / 7pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "A unique opportunity to discover and taste great French wine!",
    pictureURL: "https://images.unsplash.com/flagged/photo-1570533136641-42082acf8d0c"
  },
  {
    city: "Barcelona",
    name: "Visit the Barça museum",
    placeName: "FC Barcelona",
    placeURL: "https://www.fcbarcelona.com/en/tickets/camp-nou-experience",
    dateAndTime: "20.10.2021 / 11am", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "Take part in our Barça Stadium Tour & Museum!",
    pictureURL: "https://images.unsplash.com/photo-1526048516912-b0432b1633ad"
  },
  {
    city: "Barcelona",
    name: "Castellers",
    placeName: "Plaça del Consell de la Vila",
    placeURL: "https://castellscat.cat/ca/agenda?a=2021&m=11&p=189",
    dateAndTime: "28.11.2021 / 6pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "Attend the impressive human tower event (Castellers) in the center of Barcelona!",
    pictureURL: "https://images.unsplash.com/photo-1552385430-53e6f2028760?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
  },
  {
    city: "Berlin",
    name: "ZU/FLUCHT",
    placeName: "future Exile Museum",
    placeURL: "https://www.visitberlin.de/en/event/zuflucht",
    dateAndTime: "16.11.2021 / 3pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "ZU/FLUCHT is an open-air exhibition on the way to the Exilmuseum, which is to be built at Anhalter Bahnhof in the next few years.",
    pictureURL: "https://www.visitberlin.de/system/files/styles/visitberlin_content_image_medium_visitberlin_desktop_1x/private/event_images/vb-218-01088815-0cf0-4448-a6da-4b57a552bc10.jpg.webp?itok=wOSNE7jB"
  },
  {
    city: "Berlin",
    name: "Listen to the organ instrument",
    placeName: "Landesmusikrat",
    placeURL: "https://www.visitberlin.de/en/event/organ-year-2021",
    dateAndTime: "07.11.2021 / 10am", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "The organ is the instrument of the year 2021! It is thus the first keyboard instrument to be declared Instrument of the Year.",
    pictureURL: "https://www.visitberlin.de/system/files/styles/visitberlin_content_image_medium_visitberlin_desktop_1x/private/event_images/vb-18-fb5d80a3-d4c7-49b7-8d12-60d9b798191a.jpg.webp?itok=Vv4CWVYq"
  },
  {
    city: "Berlin",
    name: "Computer games museum",
    placeName: "Computerspielemuseum",
    placeURL: "https://www.computerspielemuseum.de",
    dateAndTime: "13.10.2021 / 6:30pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "The first computer game museum in the world was founded here in Berlin. An iconic time trip for the whole family through 60 years of history of the games can start.",
    pictureURL: "https://www.visitberlin.de/system/files/styles/visitberlin_gallery_item_visitberlin_desktop_1x/private/event_images/vb-52-6bc3d495-8c36-40e0-8e34-8592432e91a5.jpg.webp?itok=IJBT9BIP"
  },
  {
    city: "Berlin",
    name: "Beer gardens",
    placeName: "Tiergarten park",
    placeURL: "https://www.visitberlin.de/en/tiergarten",
    dateAndTime: "20.11.2021 / 4pm", /* For the moment, a simple string. Could be improve with date format */
    briefDescr: "Shaded gems by the water or popular meeting places in the neighbourhood.",
    pictureURL: "https://images.unsplash.com/photo-1626636547294-dd9861e50270?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
  },
]
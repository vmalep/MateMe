const cards = document.querySelector(".cards");
/* const cityList = require("./cityList"); */

/* const cityList = [
  {
    name: "Paris",
    briefDescr: "La ville lumière",
    picture: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f"
  },
  {
    name: "Barcelona",
    briefDescr: "Discover Gaudi",
    picture: "https://images.unsplash.com/photo-1561407531-2b7ccd6b66b2"
  },
  {
    name: "Berlin",
    briefDescr: "The best clubs",
    picture: "https://images.unsplash.com/photo-1622182438074-b163bdf8f16c"
  }
]; */

console.log(cityList);

function createCard(title, imageUrl, briefDescr) {
  const card = document.createElement("a");
  card.classList.add("card");
  card.href = `city.html?city=${title}`;
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  /*   const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg); */

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  cardHeader.append(cardTitle);

  // Create the cardBody div, add the class card-body and add it to the card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardBody.appendChild(cardImg);

  // Create the cardTitle h2, add the class card-title,
  /*   const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  cardBody.append(cardTitle); */

  const cardBriefDescr = document.createElement("p");
  cardBriefDescr.classList.add("card-brief-descr");
  cardBriefDescr.innerHTML = briefDescr;
  cardBody.append(cardBriefDescr);

  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody
  /* const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = "Adopt Now";
  cardBody.append(cardButton); */
}

/* Step 4: Create a for loop, for each element of the array, 
 call the function createCard with the corresponding parameter */

for (let i = 0; i < cityList.length; i++) {
  createCard(cityList[i].name, cityList[i].picture, cityList[i].briefDescr);
}

const cards = document.querySelector(".city-cards");
/* console.log(cityList); */

function createMobileCard(title, imageUrl) {

  /* Creation of the mobile first city card */
  const card = document.createElement("a");
  card.classList.add("city-card");
  card.href = `city.html?city=${title}`;
  cards.appendChild(card);
  
  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  card.appendChild(cardImg);
  
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  cardImg.appendChild(cardTitle);

}
  /* Creation of the large city card */
  function createLargeCard(title, imageUrl) {

  const cityCardLarge = document.createElement("div");
  cityCardLarge.classList.add("city-card-large");
  cards.appendChild(cityCardLarge);

  const cityCardTextLarge = document.createElement("div");
  cityCardTextLarge.classList.add("city-card-text-large");
  cityCardLarge.appendChild(cityCardTextLarge);

  const cardTitleLarge = document.createElement("h2");
  cardTitleLarge.classList.add("card-title");
  cardTitleLarge.innerHTML = title;
  cityCardTextLarge.appendChild(cardTitleLarge);

  const anchorLarge = document.createElement("a");
  anchorLarge.href = `city.html?city=${title}`;
  cityCardTextLarge.appendChild(anchorLarge);

  const buttonCity = document.createElement("button");
  buttonCity.classList.add("button-city");
  buttonCity.innerHTML = "Check the events!";
  anchorLarge.appendChild(buttonCity);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cityCardLarge.appendChild(cardImg);
}

for (let i = 0; i < cityList.length; i++) {
  createMobileCard(cityList[i].name, cityList[i].picture);
  /* console.log("Adding " + cityList[i].name); */
}

for (let i = 0; i < cityList.length; i++) {
  createLargeCard(cityList[i].name, cityList[i].picture);
  /* console.log("Adding Large " + cityList[i].name); */
}
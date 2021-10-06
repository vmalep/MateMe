const cards = document.querySelector(".city-cards");
/* console.log(cityList); */

function createCard(title, imageUrl) {
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
for (let i = 0; i < cityList.length; i++) {
  createCard(cityList[i].name, cityList[i].picture);
  console.log("Adding " + cityList[i].name);
}
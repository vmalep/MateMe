const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);

let cityName = "";

/* Getting the city parameter from the url */
if (urlParams.has("city")) {
  cityName = urlParams.get("city");
} else console.log("city note defined");

/* console.log(cityName); */

const cityData = cityList.filter(city => city.name == cityName);
/* https://medium.com/@melaniecp/filtering-an-arrays-objects-based-on-a-value-in-a-key-value-array-using-filter-and-includes-27268968308f */

const eventData = eventList.filter(event => event.city == cityName);
console.log(eventData);

const cityBody = document.querySelector(".city-body");
cityBody.style.backgroundImage = `url(${cityData[0].picture})`;
const cityH2 = document.querySelector(".city-h2");
cityH2.innerHTML = cityName;

const eventListDiv = document.getElementById("event-list");

function createMobileCard(name, placeName, placeURL, dateAndTime, eventId) {

  /* const [name, placeName, placeURL, dateAndTime, eventId] = eventData; */

  console.log("event name: " + name);

  /* Creation of the mobile first city card */
  const event1 = document.createElement("section");
  event1.classList.add("event1");
  eventListDiv.appendChild(event1);

  const part1 = document.createElement("div");
  part1.classList.add("part1");
  event1.appendChild(part1);

  const cityH3 = document.createElement("h3");
  cityH3.classList.add("city-h3");
  cityH3.innerHTML = name;
  part1.appendChild(cityH3);

  const div3 = document.createElement("div");
  part1.appendChild(div3);

  const where1 = document.createElement("span");
  where1.classList.add("where1");
  div3.appendChild(where1);


  const fa1 = document.createElement("i");
  fa1.style.fontSize = "24px";
  fa1.classList.add("fa");
  fa1.innerHTML = "&#xf041;";
  where1.appendChild(fa1);

  const aCity = document.createElement("a");
  aCity.classList.add("a-city");
  aCity.href = placeURL;
  aCity.innerText = placeName;
  where1.appendChild(aCity);

  const part2 = document.createElement("div");
  part2.classList.add("part2");
  event1.appendChild(part2);

  const anchorEvent = document.createElement("a");
  anchorEvent.href = `event.html?city=${cityName}&eventId=${eventId}`;
  part2.appendChild(anchorEvent);

  const buttonEvent1 = document.createElement("button");
  buttonEvent1.classList.add("buttonevent1");
  buttonEvent1.innerHTML = "Join!";
  anchorEvent.appendChild(buttonEvent1);

  const divDate= document.createElement("div");
  divDate.classList.add("div-date");
  part2.appendChild(divDate);

  const fa2 = document.createElement("i");
  fa2.style.fontSize = "24px";
  fa2.classList.add("fa");
  fa2.innerHTML = "&#xf274;";
  divDate.appendChild(fa2);
  
  const pDate = document.createElement("p");
  pDate.innerHTML = dateAndTime;
  divDate.appendChild(pDate);
  

}

for (let i = 0; i < eventData.length; i++) {
  createMobileCard(eventData[i].name, eventData[i].placeName, eventData[i].placeURL, eventData[i].dateAndTime, eventData[i].eventId);
  console.log("Adding " + eventData[i].name);
}
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

console.log(cityData);

const eventData = eventList.filter(event => event.city == cityName);
console.log(eventData);
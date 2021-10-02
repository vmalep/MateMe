const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);

let cityName = "";

/* Getting the city parameter from the url */
if (urlParams.has("city")) {
  cityName = urlParams.get("city");
} else console.log("city note defined");

console.log(cityName);
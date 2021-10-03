const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);

let cityName = "";
let eventName = "";

/* Getting the city parameter from the url */
if (urlParams.has("city")) {
  cityName = urlParams.get("city");
} else console.log("city note defined");

if (urlParams.has("event")) {
  eventName = urlParams.get("event");
} else console.log("event note defined");

console.log(cityName + eventName);

/* console.log(urlParams.get("event")); //returns US */
/* console.log(urlParams.append("status", "true")); //returns ?q=losAngeles&country=US&status=true */

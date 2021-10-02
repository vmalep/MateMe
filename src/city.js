const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);

let cityName = "";

if (urlParams.has("city")) {
  cityName = urlParams.get("city");
} else console.log("city note defined");

console.log(cityName);

/* const fileUrl = "./cityList.txt"; // provide file location

fetch(fileUrl)
  .then((r) => r.text())
  .then((t) => console.log(t)); */

/* console.log(urlParams.get("event")); //returns US */
/* console.log(urlParams.append("status", "true")); //returns ?q=losAngeles&country=US&status=true */

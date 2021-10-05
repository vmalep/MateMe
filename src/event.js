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

/*

// ALL .innerHTML

// Title of Event     
document.querySelector(".event-title")   

// Paragraph that describes the event      
document.querySelector(".display-event-description")

// Date input     
document.getElementById("event-date-input") 

// Location input    
document.getElementById("event-location-input") 

// To add to group size
document.getElementById("joined-and-join") 

// Join button
document.getElementById("event-join-btn")

*/
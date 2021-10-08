const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);

let cityName = "";
let eventId = "";

/* Getting the city parameter from the url */
if (urlParams.has("city")) {
  cityName = urlParams.get("city");
} else console.log("city note defined");

if (urlParams.has("eventId")) {
  eventId = urlParams.get("eventId");
} else console.log("event note defined");

console.log(cityName + eventId);

const cityData = cityList.filter(city => city.name == cityName);
const eventData = eventList.filter(event => event.eventId == eventId)[0];

console.log(eventData.pictureURL);

document.getElementById("event-body-id").style.backgroundImage = `url(${eventData.pictureURL})`;
document.getElementById("creator-of-event").innerHTML = "Jane";
document.querySelector(".event-title").innerHTML = eventData.name;
document.querySelector(".display-event-description").innerHTML = eventData.briefDescr;
document.getElementById("event-date-input").innerHTML = eventData.dateAndTime;
document.getElementById("event-location-input").innerHTML = eventData.placeName;

/* console.log(urlParams.get("event")); //returns US */
/* console.log(urlParams.append("status", "true")); //returns ?q=losAngeles&country=US&status=true */

// Join button
const eventJoinButton = document.getElementById("event-join-btn");

eventJoinButton.addEventListener("click", function() {
      let countUser = document.getElementById("joined-counter");
      let inputName = document.getElementById("member-name");
      let inputMail = document.getElementById("member-email");
      let number = countUser.innerHTML;
      if (inputName && inputName.value && inputMail && inputMail.value) {
        number++;
        countUser.innerHTML = number;
        alert("See you later alligator!");
        inputName.value = "";
        inputMail.value ="";
      } 
      else {
        alert("Your mates wanna know ya name. Please enter and try again!")
      }
});



/*
// ALL .innerHTML

// Title of Event     
  document.querySelector(".event-title");

// Paragraph that describes the event      
  document.querySelector(".display-event-description");

// Date input     
  document.getElementById("event-date-input");

// Location input    
  document.getElementById("event-location-input");

// To add to group size
  document.getElementById("joined-and-join");

// NO more innerHTML

// Google maps
  const gMap = document.getElementById("gMap");
  gMap.src = "https://";

// User input-fields

  //name
    document.getElementById("member-name");

  //email
    document.getElementById("member-name");



// Join button
  document.getElementById("event-join-btn");

*/
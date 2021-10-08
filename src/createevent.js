let button = document.getElementById("button");

 button.addEventListener("click", function (event) {
	// Prevent default page reloading
	event.preventDefault();

  let newEvent = [];

	newEvent.name = document.getElementById("createeventcity").value;
	newEvent.dateAndTime = document.getElementById("createeventdate").value;
  newEvent.briefDescr = document.getElementById("messagecreateevent").value;
 
  eventList.push(newEvent);

  /* console.log(eventList); */

 });


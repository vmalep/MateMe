let button = document.getElementById("button");

 button.addEventListener("click", function (event) {
	// Prevent default page reloading
	event.preventDefault();
/*     console.log(eventList); */

    let newEvent = [];

	newEvent.name = document.getElementById("createeventcity").value;
	newEvent.dateAndTime = document.getElementById("createeventdate").value;
    newEvent.briefDescr = document.getElementById("messagecreateevent").value;
 
    eventList.push(newEvent);

  /*   {
        city: "Barcelona",
        name: "El Arrebato",
        placeName: "Barts Club",
        placeURL: "https://www.barcelona-metropolitan.com/events/el-arrebato/?occ_dtstart=2021-10-03T19:30",
        dateAndTime: 
        briefDescr: 
        pictureURL: 
      }, */
      console.log(eventList);

 });


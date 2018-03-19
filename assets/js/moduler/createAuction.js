function createAuction() {
  // Get all informaion from the inputs in the page
  let Titel = document.getElementById('Titel').value;
  let Beskrivning = document.getElementById('Beskrivning').value;
  let Utropspris = document.getElementById('Utropspris').value;
  let Startdatum = document.getElementById('Startdatum').value;
  let Slutdatum = document.getElementById('Slutdatum').value;

  // create JSON object with all data
  let data =  {
    "AuktionID": 30,
    "Titel": Titel,
    "Beskrivning": Beskrivning,
    "Utropspris": Utropspris,
    "Startdatum": Startdatum,
    "Slutdatum": Slutdatum,
    "Gruppkod": 300
  };

  // set url
  let url = "http://nackowskis.azurewebsites.net/api/auktion/300";

  // if all fields are filled, tell the user to do that
  // else post the data using the api.postData from api.js file 
  if(Titel == "" || Beskrivning == "" || Utropspris == "" || Startdatum == "" || Slutdatum == "") {
    alert("Fyll i alla fält");
  } else {
    api.postData(url,data);
    alert("Ny auktion skapad")
  }
} // end createAuction Function

// Run Function when user click on the button
var Skapaauktion = document.getElementById("Skapaauktion");
Skapaauktion.addEventListener("click", createAuction);

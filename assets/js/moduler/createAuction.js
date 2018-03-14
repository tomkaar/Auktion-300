function createAuction() {
  let Titel = document.getElementById('Titel').value;
  let Beskrivning = document.getElementById('Beskrivning').value;
  let Utropspris = document.getElementById('Utropspris').value;
  let Startdatum = document.getElementById('Startdatum').value;
  let Slutdatum = document.getElementById('Slutdatum').value;
let data =  { "AuktionID": 30,
"Titel": Titel,
"Beskrivning": Beskrivning,
"Utropspris": Utropspris,
"Startdatum": Startdatum,
"Slutdatum": Slutdatum,
"Gruppkod": 300}
let url = "http://nackowskis.azurewebsites.net/api/auktion/300";
  console.log(Titel + Beskrivning + Utropspris + Startdatum + Slutdatum);
  console.log(data);
  console.log(url);
api.postData(url,data);
}

var Skapaauktion = document.getElementById("Skapaauktion");
Skapaauktion.addEventListener("click",createAuction);




/*http://nackowskis.azurewebsites.net/api/auktion/300 */

/*
Titel
Beskrivning
Utropspris
Startdatum
Slutdatum
Skapaauktion */

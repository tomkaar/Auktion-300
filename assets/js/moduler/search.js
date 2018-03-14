
// få aktuellt datum för att bestämma öppna och stänga auktioner
		var today = new Date(); // få aktuellt datum
		var dd = today.getDate(); // få dag
		var mm = today.getMonth()+1; // få månad januari är 0 som standard
        var yyyy = today.getFullYear(); // få år
        
        // gör dag i två siffror, som standard dag är '1' så gör det 01
		if(dd<10){
			dd='0'+dd;
        } 
        // gör månad i två siffror, som standard månad är '1' så gör det 01
		if(mm<10){
			mm='0'+mm;
		}		 
		var today = yyyy+'-'+mm+'-'+dd; // format datum
		
var dataSet=[];
var t;
$(document).ready(function() {
    t = $('#example').DataTable(); // skapa data
} );

//   function append(parent, el) {
//     return parent.appendChild(el);
//   }

  var i = 0;
  const dataf = document.getElementById('data');
  const url = 'https://nackowskis.azurewebsites.net/api/Auktion/300'; // förbereda

  fetch(url) // hämta data från url
  .then((resp) => resp.json()) // läs json svar
  .then(function(data) {
    let auktions = data; // få json data

    // iterera över data
    auktions.map(function(auktion) {
	  dataSet[i] = auktion.AuktionID;
	  var status = "open";
	  if(auktion.SlutDatum <= today) // om det stängs
        status = 'closed';
        
        // lägg till rad till data
	  t.row.add( [
            auktion.AuktionID,
            auktion.Titel,
            auktion.Beskrivning,
            auktion.StartDatum,
            auktion.SlutDatum,
			auktion.Gruppkod,
			auktion.Utropspris,
			status
        ] ).draw( false ); // uppdateringstabell
		i++;
    })
  })
  // catch error
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });   

		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10){
			dd='0'+dd;
		} 
		if(mm<10){
			mm='0'+mm;
		}		 
		var today = yyyy+'-'+mm+'-'+dd;
		
var dataSet=[];
var t;
$(document).ready(function() {
    t = $('#example').DataTable();
} );

  function append(parent, el) {
    return parent.appendChild(el);
  }
  var i = 0;
  const dataf = document.getElementById('data');
  const url = 'https://nackowskis.azurewebsites.net/api/Auktion/300';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let auktions = data;
    auktions.map(function(auktion) {
	  dataSet[i] = auktion.AuktionID;
	  var status = "open";
	  if(auktion.SlutDatum <= today)
		status = 'closed';
	  t.row.add( [
            auktion.AuktionID,
            auktion.Titel,
            auktion.Beskrivning,
            auktion.StartDatum,
            auktion.SlutDatum,
			auktion.Gruppkod,
			auktion.Utropspris,
			status
        ] ).draw( false );
		i++;
    })
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });   
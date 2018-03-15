async function search () {
	var data = await api.fetchData('https://nackowskis.azurewebsites.net/api/Auktion/300');

	var sok = document.getElementById('sok').value;

	var selected = document.getElementById("filterSelect").value;

	// filtrera data
	var filter = data.filter(auktion => auktion.Titel.toUpperCase().includes(sok.toUpperCase()) );


	if(selected =='UtropsPris'){
		var sort = filter.sort((a,b)=>a.Utropspris > b.Utropspris);
	} 
	else {
			var sort = filter.sort((a,b)=>a.SlutDatum > b.SlutDatum);
	}
	
	if (selected == "Titel"){
		var sort = filter.sort((a,b)=>a.Titel > b.Titel);
	}

	buildData(sort);

}
document.getElementById('click').addEventListener('click', search);

document.getElementById('sok').addEventListener('keydown', function (keyDown){
	let name = keyDown.keyCode 
	if(name == 13){
		search();
	}
});

search();
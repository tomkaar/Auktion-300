async function search () {
	// fetch data from API
	var data = await api.fetchData('https://nackowskis.azurewebsites.net/api/Auktion/300');

	// get input from user 		sok = input field text 		selected = Dropdown
	var sok = document.getElementById('sok').value;
	var selected = document.getElementById("filterSelect").value;

	// filter data
	var filter = data.filter(auktion => auktion.Titel.toUpperCase().includes(sok.toUpperCase()) );

	// Sort data
	if(selected =='UtropsPris'){
		var sort = filter.sort((a,b)=>a.Utropspris > b.Utropspris);
	}
	else if (selected == 'SlutDatum') {
		var sort = filter.sort((a,b)=>a.SlutDatum > b.SlutDatum);
	}
	else{
		var sort = filter.sort((a,b)=>a.Titel > b.Titel);
	}

	// send filtered and sorted data to buildData function that "prints" the data on screen
	buildData(sort);
} // end search function

// Run function on start
search();

// Run function when click on Search button or when user press enter inside the input
document.getElementById('click').addEventListener('click', search);
document.getElementById('sok').addEventListener('keydown', function (keyDown){
	// Every key has a number and we need to test if the key we press is 13 (Enter)
	let thisKeyCode = keyDown.keyCode
	if(thisKeyCode == 13){ search(); }
});

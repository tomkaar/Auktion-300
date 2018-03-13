

async function buildData() {
    
var auctionAPI = "http://nackowskis.azurewebsites.net/api/Auktion/300";
    
    var data = await api.fetchData(auctionAPI);
    console.log(data);
    var numberInArr = data.length;
    // console.log(numberinArr);
    for(let i = 0; i < numberInArr; i++){
    console.log(data[i]);
    
    let title = document.createElement('h3');
    title.textContent = data[i].Titel;
    let description = document.createElement('p');
    description.textContent = data[i].Beskrivning
    let startDate = document.createElement('p');
    startDate.textContent = "Start datum"+ " " + data[i].StartDatum;
    let endDate = document.createElement('p');
    endDate.textContent = "Slut datum"+ " " +  data[i].SlutDatum;
    let startPrice = document.createElement('h3');
    startPrice.textContent = data[i].Utropspris + ';- sek'
    
    

    document.getElementById('content').appendChild(title);     
    document.getElementById('content').appendChild(description);
    document.getElementById('content').appendChild(startPrice);      
    document.getElementById('content').appendChild(startDate);   
    document.getElementById('content').appendChild(endDate);
    }

}

 buildData()




//  api.postData(url, data);
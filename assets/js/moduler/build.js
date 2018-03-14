

async function buildData() {
    
    var auctionAPI = "http://nackowskis.azurewebsites.net/api/Auktion/300";
    
    var data = await api.fetchData(auctionAPI);
    console.log(data);
    var numberInArr = data.length;
    // console.log(numberinArr);
    for(let i = 0; i < numberInArr; i++){
    console.log(data[i]);
    let content = document.getElementById('content');
    let container = document.createElement('div');
    let title = document.createElement('h3');
    title.textContent = data[i].Titel;
    let description = document.createElement('p');
    description.textContent = data[i].Beskrivning
    let startDate = document.createElement('p');
    startDate.textContent = "Start datum"+ " " + data[i].StartDatum;
    let endDate = document.createElement('p');
    endDate.textContent = "Slut datum"+ " " +  data[i].SlutDatum;
    let startPrice = document.createElement('h3');
    let currentBid = document.createElement('p');
    let currentHighest = document.createElement('p');
    currentHighest.textContent = "Nuvarande högsta bud";
    startPrice.textContent = data[i].Utropspris + ';- sek'
    let bidButton = document.createElement('button')
    let inputBid = document.createElement('input');

    bidButton.textContent = "Placera bud";
    console.log(bidButton);

    content.appendChild(title);  
    content.appendChild(description); 
    content.appendChild(startPrice);
    content.appendChild(currentHighest);
    content.appendChild(currentBid);
    content.appendChild(startDate);
    content.appendChild(endDate);
    content.appendChild(bidButton);
    content.appendChild(inputBid);

    content.appendChild(container);



    // var userInputBid = document.getElementsByTagName('button').addEventlistner('click', function () {
    //    document.getElementById('button').innerHTML 
    // });


    }

}

 buildData()

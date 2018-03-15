

async function buildData(data) {

    let content = document.getElementById('content');
    content.innerHTML = "";

    var numberInArr = data.length;
    for(let i = 0; i < numberInArr; i++){
    // console.log(data[i]);
    //Get bids
    let bid = await bud.getBids(data[i].AuktionID)
    // console.log(bid);
    //Sort bids
    let higherBid;
    if(bid == 0){

        higherBid = data[i].Utropspris;

    } else {

        let number = bid.sort((current, val)=> (current.Summa < val.Summa));

        higherBid = number[0].Summa;
    };

    // console.log(higherBid);

    let auctionsId = data[i].AuktionID;
    let container = document.createElement('div');

    let title = document.createElement('h3');
    title.textContent = data[i].Titel;
    title.setAttribute('class', 'title')
    
    let description = document.createElement('p');
    description.textContent = data[i].Beskrivning
    description.setAttribute('class', 'description');
    
    let startDate = document.createElement('p');
    startDate.textContent = "Start datum"+ " " + data[i].StartDatum;
    startDate.setAttribute('class', 'startDate')
    let endDate = document.createElement('p');
    endDate.textContent = "Slut datum"+ " " +  data[i].SlutDatum;
    endDate.setAttribute('class', 'endDate')
    
    
    let startPrice = document.createElement('h3');
    startPrice.textContent = data[i].Utropspris + ';- sek';
    startPrice.setAttribute('class', 'startPrice')
    
    let currentBid = document.createElement('p');
    currentBid.textContent = higherBid + ";-" + " sek";
    currentBid.setAttribute('class', 'currentBid');
    
    let currentHighest = document.createElement('p');
    currentHighest.textContent = "Nuvarande högsta bud";
    currentHighest.setAttribute('class', 'currentHighest');
    
    let bidButton = document.createElement('button');
    bidButton.textContent = "Placera bud";
    bidButton.setAttribute('class', 'bidButton');
    
    let inputBid = document.createElement('input');
    inputBid.setAttribute('type', 'number');
    inputBid.setAttribute('pattern', '^[0-9]+$');
    inputBid.setAttribute('class', 'inputBid');



    bidButton.textContent = "Placera bud";
    // console.log(bidButton);
        bidButton.addEventListener("click", function(e){
          let currentInputBid = inputBid.value
          if(currentInputBid == ""){
            alert("Du måste ange ett bud");
        }
        else {

            if(currentInputBid > higherBid){
                bud.newBid(auctionsId, higherBid, currentInputBid)
                alert("Ditt bud är registrerat")
            }

            else {
               alert("Ditt bud är för lågt")
            } 

        }
  
        });
       inputBid.addEventListener('keydown', function (keyDown){
            let name = keyDown.keyCode 
            if(name == 13){
                let currentInputBid = inputBid.value
                if(currentInputBid == ""){
                  alert("Du måste ange ett bud");
              }
              else {
      
                  if(currentInputBid > higherBid){
                      bud.newBid(auctionsId, higherBid, currentInputBid)
                      alert("Ditt bud är registrerat")
                  }
      
                  else {
                     alert("Ditt bud är för lågt")
                  } 
      
              }
        
            }
        });

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(startPrice);
    content.appendChild(currentBid);
    content.appendChild(currentHighest);
    content.appendChild(currentBid);
    content.appendChild(startDate);
    content.appendChild(endDate);
    content.appendChild(bidButton);
    content.appendChild(inputBid);

    content.appendChild(container);






    }

}



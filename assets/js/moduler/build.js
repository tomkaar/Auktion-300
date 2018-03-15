

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

    let description = document.createElement('p');
    description.textContent = data[i].Beskrivning

    let startDate = document.createElement('p');
    startDate.textContent = "Start datum"+ " " + data[i].StartDatum;

    let endDate = document.createElement('p');
    endDate.textContent = "Slut datum"+ " " +  data[i].SlutDatum;

    let startPrice = document.createElement('h3');
    let currentBid = document.createElement('p');
    currentBid.textContent = higherBid + ";-" + " sek";
    let currentHighest = document.createElement('p');
    currentHighest.textContent = "Nuvarande högsta bud";
    startPrice.textContent = data[i].Utropspris + ';- sek';
    var bidButton = document.createElement('button');
    // console.log(bidButton);
    let inputBid = document.createElement('input');
    inputBid.setAttribute('type', 'number');
    inputBid.setAttribute('pattern', '^[0-9]+$');



    bidButton.textContent = "Placera bud";
    // console.log(bidButton);
        bidButton.addEventListener("click", function(e){
          let currentInputBid = inputBid.value
          if(currentInputBid == ""){
            // console.log("freakin empty");
        }
        else {

            if(currentInputBid >= higherBid){
                bud.newBid(auctionsId, higherBid, currentInputBid)
                console.log("")
            }

            else {
                // console.log("Cheap ass");
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

 buildData()

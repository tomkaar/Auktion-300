// buildData Function - Print everything on screen.
// This function is called from the search() function inside search.js file
async function buildData(data) {

  // content position + clear previous content
  let content = document.getElementById('content');
  content.innerHTML = "";

  // loop everything
  for(let i = 0; i < data.length; i++){
    // Dates - find difference between today and Auction Date
    // If Diff is >= 0 the auction has ended
    let today = new Date();
    let newDate = new Date(data[i].SlutDatum);
    let dateDiff = newDate-today;

    // fetch bids for this auction item
    let bid = await bud.getBids(data[i].AuktionID)

    // Find the highest bid or set var higherBid to Utropspris
    let higherBid;
    if(bid == 0){
      higherBid = data[i].Utropspris;
    } else {
      let number = bid.sort((current, val)=> (current.Summa < val.Summa));
      higherBid = number[0].Summa;
    };

    // Create elements to print everytihng on screen
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

    // when click on bid button
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
    }); // end addEventListener

    // when click enter inside bid input
    inputBid.addEventListener('keydown', function (keyDown){
      let name = keyDown.keyCode
      if(name == 13){
        let currentInputBid = inputBid.value
        if(currentInputBid == ""){
          alert("Du måste ange ett bud");
        }
        else{
          if(currentInputBid > higherBid){
            bud.newBid(auctionsId, higherBid, currentInputBid)
            alert("Ditt bud är registrerat")
          }
          else{
           alert("Ditt bud är för lågt")
          }
        }
      }
    }); // end addEventListener

    // append everything to content div inside HTML document
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(startPrice);
    content.appendChild(currentBid);
    content.appendChild(currentHighest);
    content.appendChild(currentBid);
    content.appendChild(startDate);
    content.appendChild(endDate);

    // if auction item is still open -> print, else -> tell the user that the auction is closed
    if(dateDiff >= 0){
      content.appendChild(bidButton);
      content.appendChild(inputBid);
    } else{
      let expiredAuction = document.createElement('h4');
      expiredAuction.textContent = "Utgången vara";
      content.appendChild(expiredAuction);
    }

    // append created container to content in HTML document
    content.appendChild(container);
  } // end for loop
} // end build function

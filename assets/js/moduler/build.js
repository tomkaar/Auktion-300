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
    container.setAttribute("class", "item");

    let title = document.createElement('h3');
    title.textContent = data[i].Titel;
    title.setAttribute('class', 'title')

    let description = document.createElement('p');
    description.textContent = data[i].Beskrivning
    description.setAttribute('class', 'description');


    let startTid = new Date(data[i].StartDatum).toString().split(' ');
    let slutTid = new Date(data[i].SlutDatum).toString().split(' ');

    let startDate = document.createElement('p');
    startDate.innerHTML = "<strong>Start datum:</strong>"+ " " + startTid[0] + " " + startTid[2] + " " + startTid[1];
    startDate.setAttribute('class', 'startDate')
    let endDate = document.createElement('p');
    endDate.innerHTML = "<strong>Slut datum:</strong>"+ " " + slutTid[0] + " " + slutTid[2] + " " + slutTid[1];
    endDate.setAttribute('class', 'endDate')


    let startPrice = document.createElement('h3');
    startPrice.textContent = data[i].Utropspris + ';- sek';
    startPrice.setAttribute('class', 'startPrice')

    let currentBid = document.createElement('h3');
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
    inputBid.setAttribute('placeholder', 'Bud...');

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
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(startPrice);
    container.appendChild(currentBid);
    container.appendChild(currentHighest);
    container.appendChild(currentBid);
    container.appendChild(startDate);
    container.appendChild(endDate);

    // if auction item is still open -> print, else -> tell the user that the auction is closed
    if(dateDiff >= 0){
      container.appendChild(bidButton);
      container.appendChild(inputBid);
    } else{
      let expiredAuction = document.createElement('h4');
      expiredAuction.textContent = "Utgången vara";
      container.appendChild(expiredAuction);
      expiredAuction.setAttribute("class", "expire");
    }

    // append created container to content in HTML document
    content.appendChild(container);
  } // end for loop
} // end build function

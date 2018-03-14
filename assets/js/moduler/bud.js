var bud = ( function(){

  async function publicGetBids(AuktionID){
    let url = "http://nackowskis.azurewebsites.net/api/bud/300/" + AuktionID;
    let promise = await api.fetchData(url);
    console.log(promise);
  }

  // compare highest bid and users bid
  // only post if users bid is higher then the current highest bid.
  async function publicNewBid(AuktionID, hogstaBud, summa){

    if(summa <= hogstaBud){
      console.log("Ditt bud måste vara högre än summan!");
      return false;
    } else {
      console.log("Du har lagt ett bud!");

      let data = {
        "BudID": 1,
        "Summa": summa,
        "AuktionID": AuktionID
      }

      let url = "http://nackowskis.azurewebsites.net/api/Bud/300/" + AuktionID;
      api.postData(url, data);

      return true;
    }


  }

  return{
    getBids: publicGetBids,
    newBid: publicNewBid
  }

})();



// bud.getBids(AuktionID);
// bud.newBid(AuktionID, Price);

// bud.getBids(3);
// bud.newBid(3, 150, 149);

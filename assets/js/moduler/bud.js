var bud = ( function(){

  async function publicGetBids(AuktionID){
    let url = "http://nackowskis.azurewebsites.net/api/bud/300/" + AuktionID;
    let promise = await api.fetchData(url);
    return promise;
  }

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

  async function publicRemoveBid(BudId){
    let url = "http://nackowskis.azurewebsites.net/api/bud/300/" + BudId;
    api.deleteData(url);
  }

  return{
    getBids: publicGetBids,
    newBid: publicNewBid,
    removeBid: publicRemoveBid
  }

})();


//
// How to use it
//

// bud.getBids(AuktionID);
// bud.newBid(AuktionID, Price);

// bud.newBids(AuktionID, hogstaBud, Summa);
// bud.newBid(3, 150, 149);

// bud.removeBid(budID);
// bud.removeBid(596);

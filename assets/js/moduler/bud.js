var bud = ( function(){

  async function publicGetBids(AuktionID){
    let url = "http://nackowskis.azurewebsites.net/api/bud/300/" + AuktionID;
    let promise = await api.fetchData(url);
    console.log(promise);
  }

  async function publicNewBid(AuktionID, summa){

    let data = {
      "BudID": 1,
      "Summa": summa,
      "AuktionID": AuktionID
    }

    let url = "http://nackowskis.azurewebsites.net/api/Bud/300/" + AuktionID;
    api.postData(url, data);
  }

  return{
    getBids: publicGetBids,
    newBid: publicNewBid
  }
})();




// bud.getBids(3);
// bud.newBid(3, 4200);

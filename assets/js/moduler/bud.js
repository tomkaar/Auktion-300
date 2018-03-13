var bud = ( function(){

  async function getBids(AuktionID){
    let url = "http://nackowskis.azurewebsites.net/api/bud/300/" + AuktionID;
    var promise = await api.fetchData(url);
    console.log(promise);
  }

  return{
    getBids: getBids
  }
})();


bud.getBids(3);


async function buildData() {
    
var auctionAPI = "http://nackowskis.azurewebsites.net/api/Auktion/300";

    var data = await api.fetchData(auctionAPI);
    console.log(data);
}

 buildData()
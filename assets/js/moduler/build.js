
async function buildData() {
    
var auctionAPI = "http://nackowskis.azurewebsites.net/api/Auktion/300";
    
    var data = await api.fetchData(auctionAPI);
    console.log(data);

    var numberInArr = data.length;
    // console.log(numberinArr);
    for(let i = 0; i < numberInArr; i++){

        console.log(data[i]);
       
        
        
    }

}

 buildData()




//  api.postData(url, data);
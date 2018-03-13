var testApi = ( function(){

  async function publicTestFetch(){
    var promise = await fetch("http://nackowskis.azurewebsites.net/api/Auktion/300");
    var data = await promise.json();
    console.log( data );
  }

  async function publicTestPost(url, jsonData){
    fetch("http://nackowskis.azurewebsites.net/api/Auktion",{
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then( function(data) {
      console.log('Request success: ', 'posten skapad');
    });
  }

  async function publicTestDelete(number){
    fetch("http://nackowskis.azurewebsites.net/api/Auktion/300/" + number, { method: 'DELETE'} ).then( function(){
      console.log("DELETED!");
    });
  }

  return {
    fetch: publicTestFetch,
    post: publicTestPost,
    delete: publicTestDelete
  }

})();



var testData = {
  "AuktionID": 31,
  "Titel": "Picasso",
  "Beskrivning": "En Tavla",
  "StartDatum": new Date("2018-03-13"),
  "SlutDatum": new Date("2018-03-31"),
  "Gruppkod": 300,
  "Utropspris": 50
}



// testApi.fetch();
// testApi.post(testData);
// testApi.delete(70);

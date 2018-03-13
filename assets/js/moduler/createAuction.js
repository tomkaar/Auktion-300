fetch(url,{
 method: 'POST',
 body: JSON.stringify(minJSONDataFörObjektet),
 headers: {
 'Accept': 'application/json, text/plain, */*',
 'Content-Type': 'application/json'
 }
 }).then(function (data) {
 console.log('Request success: ', 'posten skapad');
})

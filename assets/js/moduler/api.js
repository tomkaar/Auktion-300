var api = ( function(){

  async function fetchData(url){
    var promise = await fetch(url);
    var data = await promise.json();
    return data;
  }

  async function postData(url, data){
    fetch(url,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then( function(data) {
      console.log('Request success:');
    });
  }

  return{
    fetchData: fetchData,
    postData: postData
  }

})();



// to get stuff use
// api.fetchData(url);

// to post stuff use
// api.postData(url, data);

var api = ( function(){

  async function publicFetchData(url){
    var promise = await fetch(url);
    var data = await promise.json();
    return data;
  }

  async function publicPostData(url, data){
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

  async function publicDeleteData(url){
    fetch(url,{
      method: 'DELETE'
    }).then( function(data) {
      
      console.log('Deleted!');
    });
  }

  return{
    fetchData: publicFetchData,
    postData: publicPostData,
    deleteData: publicDeleteData
  }

})();



// to get stuff use
// api.fetchData(url);

// to post stuff use
// api.postData(url, data);

// to delete stuff
// api.deleteData(url);

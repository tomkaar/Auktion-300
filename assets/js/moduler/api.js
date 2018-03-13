var api = ( function(){

  async function fetchData(url){
    var promise = await fetch(url);
    var data = await promise.json();
    return data;
  }

  return{
    fetchData: fetchData
  }

})();



// to get stuff use
// api.fetchData(url);

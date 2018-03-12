var testApi = ( function(){

  async function publicTestFetch(){

    var promise = await fetch("http://nackowskis.azurewebsites.net/api/Auktion/300");
    var data = await promise.json();
    console.log( data );
  }

  return { test: publicTestFetch }

})();

testApi.test();

function readyFn( jQuery ) {
    console.log("here we go")

  // function to generate 3 nonequal random nums. n=how many elements you want the array to generate //
  function getXRandomInts(min, max, n) {
    array = [];
    while (array.length < n){
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (num !== array[0] && num !== array[1]){
        array.push(num);
      }
    }
    return array;
  }





  // loads pics on splash page with page loading as the event listener
  $( document ).ready( function() {
    // lets get the info from the api
      $.get('https://lit-fortress-6467.herokuapp.com/object', function(data){
        console.log(data);
      var counter = 0;
      while (counter < 5) {
        for (var i=0; i<(data['results'].length); i++) {
          var albumName = data['results'][i]['cover_art'];
          var newImg = new Image(130,130);
          // var newImg = document.createElement('img');
          newImg.src = albumName;
          $(".albumholder").append(newImg);
        }
        counter ++;
      }
      var selectedArtTit;
      var allImg = $('img')
      $(allImg).click(function(event){
        var albumMatch = ($(this).attr('src'));
        console.log(albumMatch)
        var drillAlbumName = data['results'][j];
        for (var j=0; j<data['results'].length; j++){

          // console.log(data['results'][j]['cover_art'])
          if (albumMatch == data['results'][j]['cover_art']){
            selectedArtTit = (data['results'][j]['artist'] +': '+ data['results'][j]['title'] )
          }


        }
        var infoToAppend = document.createElement('h4');
        infoToAppend.innerText = selectedArtTit;
        $('.texthere').append(infoToAppend);


      })


      })
    })
}











// this is the end of the ready function we always run with jQuery.
$( window ).on( "load", readyFn );

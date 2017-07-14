function readyFn( jQuery ) {
    console.log("here we go")


  function getRandomLookingArray(min, max, n) {
   // n is the number of elements in array
   // min is the minimum possible value
   // max is the max posible value
  array = [];
  while (array.length < n){
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num !== array[array.length-1] && num !== array[array.length-2] ){
      array.push(num);
      }
    }
    return array;
  }


  // populates the album divs on page load
  $( document ).ready( function() {
    // lets get the info from the api
      $.get('https://lit-fortress-6467.herokuapp.com/object', function(data){

      // let's make an array of 15 numbers that doesn't look repetitive at a glance
      var randomLookingArray = getRandomLookingArray(0,4,15);
      // this loop is appending new images to the .albumholder div in a way that doesn't look repetitive at a glance
      for (var i=0; i<randomLookingArray.length; i++) {
        var albumName = data['results'][randomLookingArray[i]]['cover_art'];
        var newImg = new Image(130,130);
        // var newImg = document.createElement('img');
        newImg.src = albumName;
        $(".albumholder").append(newImg);
      }


        var selectedArtTit; // selected artist title info
        var allImg = $('img')  // a selector for all of the <img>s
        // click event for when any img gets clicked
        $(allImg).click(function(event){
          // this variable stores the data that allows our loop to identify which object is clicked upon.
          var albumMatch = ($(this).attr('src'));
          // now that we have the data to compare against, let's find the matching src info from an object in our loop
          for (var j=0; j<data['results'].length; j++){
            // we'll look thru all of objects cover art value and if it is equal to our albumMatch variable, we'll assign the selectedArtTit variable with that objects artist: title info.
            if (albumMatch == data['results'][j]['cover_art']){
              selectedArtTit = (data['results'][j]['artist'] +': '+ data['results'][j]['title'] )
            }
          }
          // create new <h4> to append in our grey box
          var infoToAppend = document.createElement('h4');
          // set that <h4>'s inner text to selectedArtTit'
          infoToAppend.innerText = selectedArtTit;
          // now append it to the flex-container that's classed as .texthere
          $('.texthere').append(infoToAppend);
        })
      })
  })
}
// this is the end of the ready function we always run with jQuery.
$( window ).on( "load", readyFn );

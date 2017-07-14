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

// define a variable that is an array of 3 random numbers between 0-4.
      var randoArray = getXRandomInts(0,4,3)

// now we assign each of the random array elements to an independent variable
      var albumName1 = data['results'][randoArray[0]]['cover_art'];
      var albumName2 = data['results'][randoArray[1]]['cover_art'];
      var albumName3 = data['results'][randoArray[2]]['cover_art'];


// we use these variables as the src that we set each <img> attribute for the src, for each of the three images, respectively.
      $('#toppic').attr("src",albumName1);
      $('.top').css('background-size', 'cover')

      $('#midpic').attr("src",albumName2);
      $('.top').css('background-size', 'cover')

      $('#botpic').attr("src",albumName3);
      $('.top').css('background-size', 'cover')

      })
  })

}
// this is the end of the ready function we always run with jQuery.
$( window ).on( "load", readyFn );

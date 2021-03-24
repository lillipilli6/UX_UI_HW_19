
$("#linkClicked").on("click", function() {
    alert( "Here is an alert!" );
  });

  $( function() {
    $( "#accordion" ).accordion();
  } );
  
  $(document).ready(function(){
    $("#uxShow").click(function(){
      $("ul").toggle();
    });
  });

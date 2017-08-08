$(document).ready(function(){
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("whiteBackground");
  });
  $("button#black").click(function(){
    $("body").removeClass();
    $("body").addClass("blackBackground");
  });

  $(".clickable").click(function() {
    $(".hidden2").toggle();
  });
});

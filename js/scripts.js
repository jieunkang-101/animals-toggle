$(document).ready(function() {
  $(".clickable").click(function() {
    $("#koala-showing").toggle();
    $("#koala-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#panda-showing").fadeToggle();
    $("#panda-hidden").fadeToggle();
  });
  $(".clickable3").click(function() {
    $("#turtle-showing").slideToggle();
    $("#turtle-hidden").slideToggle();
  });
});
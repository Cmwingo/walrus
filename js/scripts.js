$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").fadeToggle();
    $("#initially-showing").fadeToggle();
  });
  /*$("#clickOut").click(function() {
    $("#initially-showing").slideDown();
    $("#initially-hidden").slideUp();
  });*/
});

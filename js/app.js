$(document).ready(function() {
  $(".social-icon").hover(function(e) {
    e.preventDefault();
    // on hover
    var circle = $(this).children('.fa-stack').children('.fa-circle');
    $(circle[0]).animate({
      color: "#5e0231"
    }, 450);
  },
  function() {  // off hover
    var circle = $(this).children('.fa-stack').children('.fa-circle');
    $(circle[0]).animate({
      color: "#ba9077"
    }, 450);
  });
});

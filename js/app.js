$(document).ready(function() {
  // expandir / contraer mobile menu
  $('.menu').on('click', function() {
    $('.site-nav--links').toggle();
  });
});

$(window).load(function() {
  // slider
  $('.flexslider').flexslider({
    selector: ".slides > .item",
    animation: "slide",
    directionNav: false
  });
}).on('resize', function() {
  if ($(window).width() > 600) {
    $('.site-nav--links').show();
  }
});
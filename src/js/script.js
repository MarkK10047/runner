$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1000,
    prevArrow: '<button type="button" class="slick-prev"><img src="./img/slider/left-arrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./img/slider/right-arrow.png"></button>',
    draggable: false
  });
});
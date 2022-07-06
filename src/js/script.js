$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1000,
    prevArrow: '<button type="button" class="slick-prev"><img src="./img/slider/left-arrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./img/slider/right-arrow.png"></button>',
    draggable: false
  });
  $('.catalog__tabs').on('click', 'div:not(catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__products').removeClass('catalog__products_active').eq($(this).index()).addClass('catalog__products_active');
  });
  function toogleSlide(item){
    $(item).each(function(i){
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog__info').eq(i).toggleClass('catalog__info_active')
        $('.catalog__desc').eq(i).toggleClass('catalog__desc_active')
      })
    })
  }

  toogleSlide(".catalog__link-desc")
  toogleSlide(".catalog__link-back")
});
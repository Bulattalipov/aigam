$ (function (){
  $('.header__btn').on('click', function () {
    $('.header__btn-box').toggleClass('header__menu-btn--active');
    $('.menu').toggleClass('menu__active');
  })

  var mixer = mixitup('.cases__content');

  $('.consultation-form__box-label').on('click', function () {
    $('.consultation-form__box-label').removeClass('consultation-form__box-label--active');
    $(this).addClass('consultation-form__box-label--active');
  })


  $('.reviews__items').slick({
    centerMode: true,
    slidesToShow: 1,
    dots: true,
    arrows: false
  });


});
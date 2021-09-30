$('.mainBanner').slick(
    {
        infinite: true,
        dots: true,
      }
);
$('.opinions .opinions__container').slick(
  {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll:1,
    // centerMode: true,
    adaptiveHeight: true,
  }
);

//doble slider with work
$('.works__container').slick(
  { 
     slidesToShow: 1,
    // slidesToScroll: 1,
    // arrows: false,
    // fade: true,
    // infinite: true,
    adaptiveHeight: true,
    // asNavFor: '.photos__navigation'
    }
);
// $('.photos__navigation').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.works__container',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
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
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 2,
  }
);

//doble slider with work
$('.works__container').slick(
  {

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    adaptiveHeight: true,
    asNavFor: '.photos__navigation'
  }
);
$('.photos__navigation').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.works__container',
  focusOnSelect: true
});


/// scroll by 
function moveTo() {
  const links = ['--aboutUS', '--opinions', '--works', '--benefits', '--contact','footer--aboutUS','footer--opinions','footer--works', 'footer--contact', 'footer--benefits'];
  links.forEach(element => {
    let componentElement = element.slice(element.lastIndexOf('-')).replace('-','#')
    document.querySelector(`.${element}`).addEventListener('click', () => {
      $('html, body').animate({ scrollTop: $(`${componentElement}`).offset().top }, 1500);
    })
  });
};
moveTo();







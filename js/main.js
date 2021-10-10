$('.mainBanner').slick({
    infinite: true,
    dots: true,
});
$('.opinions .opinions__container').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 2,
});

//doble slider with work
$('.works__container').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    adaptiveHeight: true,
    asNavFor: '.photos__navigation'
});
$('.photos__navigation').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.works__container',
    focusOnSelect: true
});


/// scroll by 
function moveTo() {
    const links = ['--aboutUS', '--opinions', '--works', '--benefits', '--contact', 'footer--aboutUS', 'footer--opinions', 'footer--works', 'footer--contact', 'footer--benefits'];
    links.forEach(element => {
        let componentElement = element.slice(element.lastIndexOf('-')).replace('-', '#')
        document.querySelector(`.${element}`).addEventListener('click', () => {
            $('html, body').animate({ scrollTop: $(`${componentElement}`).offset().top }, 1500);
        })
    });
};
moveTo();


// validate form

let input_name = document.querySelector(".contact-form__form input[type='text']")
let input_phone = document.querySelector(".contact-form__form input[type = 'tel']")
const btnSubmit = document.querySelector('.contact-form__form button[type="submit"]')

// validate name

let validatForm = false

function validateName() {
    if (input_name.value.length <= 0) {
        alert('name can"t be empty');
        validatForm = false;
    } else if (!input_name.value.match(/^[A-Za-z]+$/)) {
        alert('incorrect name');
        input_name.value = "";
        validatForm = false;
    } else {
        validatForm = true;
    }
}
// validate phonenuumber 
function validatePhoneNumber() {
    if (input_phone.value.length)
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    validateName()
    if (validatForm) {
        console.log("form is validate");
    }
})
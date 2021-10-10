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
function validateForm() {

}


let input_name = document.querySelector(".contact-form__form input[type='text']")
let input_phone = document.querySelector(".contact-form__form input[type = 'tel']")
const btnSubmit = document.querySelector('.contact-form__form button[type="submit"]')

// validate name

let validatForm = {
    nameValid: false,
    phoneValid: false
}

function validateName() {
    if (input_name.value.length <= 0) {
        alert('name can"t be empty');
    } else if (!input_name.value.match(/^[A-Za-z]+$/)) {
        alert('incorrect name');
        input_name.value = "";
    } else {
        validatForm.nameValid = true;
    }
}
// validate phone number 
function validatePhoneNumber() {
    if (input_phone.value.length <= 0) {
        alert('number can"t be empty');
    } else if (typeof(input_phone.value) === "number") {
        alert('incorrect number')
    } else {
        validatForm.phoneValid = true;
        console.log('well done', typeof(input_phone.value));
    }


}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    validateName();
    validatePhoneNumber();
    // if (validatForm.phoneValid && validatForm.nameValid) {
    //     alert("form is validate");
    // } else {
    //     alert('form is invalid')
    // }
})
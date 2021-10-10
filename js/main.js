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

function validatePhoneNumber() {

}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    validateName()
    if (validatForm) {
        console.log("form is validate");
    }
})








let PRACOWNICY = [
    { "imie": "Jan", "nazwisko": "Kowalski", "dzial": "IT", "wynagrodzenieKwota": "3000", "wynagrodzenieWaluta": "PLN" },
    { "imie": "Anna", "nazwisko": "Bąk", "dzial": "Administracja", "wynagrodzenieKwota": "2400.50", "wynagrodzenieWaluta": "PLN" },
    { "imie": "Paweł", "nazwisko": "Zabłocki", "dzial": "IT", "wynagrodzenieKwota": "3300", "wynagrodzenieWaluta": "PLN" },
    { "imie": "Tomasz", "nazwisko": "Osiecki", "dzial": "Administracja", "wynagrodzenieKwota": "2100", "wynagrodzenieWaluta": "PLN" },
    { "imie": "Iwona", "nazwisko": "Leihs-Gutowska", "dzial": "Handlowiec", "wynagrodzenieKwota": "3100", "wynagrodzenieWaluta": "PLN" },
]

const tableBody = document.querySelector('.table_body tbody')

PRACOWNICY.forEach(element => {
    let row = document.createElement('tr')
    for (let index = 0; index < 4; index++) {
        let dataItem__names = document.createElement('td')
        let dataItem__surnames = document.createElement('td')
        dataItem.textContent = `${element.imie}`
        row.appendChild(names)

    }
    tableBody.appendChild(row)

    // dataItem.

});
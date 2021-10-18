$('.mainBanner').slick({
    infinite: true,
    dots: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
        }
    }, ]
});




$('.opinions .opinions__container').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 2,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
        }
    }, ]
});

//doble slider with work
$('.works__container').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    adaptiveHeight: true,
    asNavFor: '.photos__navigation',
});
$('.photos__navigation').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.works__container',
    focusOnSelect: true,
    responsive: [{
            breakpoint: 978,
            settings: {
                arrows: false,
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 3,
            }
        },
    ]
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
        } 
        // else if (!input_phone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        //     alert('incorrect number')
        // } 
        else {
            validatForm.phoneValid = true;
        }


    }

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        validateName();
        validatePhoneNumber();
        if (validatForm.nameValid && validatForm.phoneValid) {
            sendEmail();
            alert('form has been sended')
        }
    })

}
validateForm()

// scroll to up site

function showScrollUp() {
    window.addEventListener('scroll', () => {
        if (pageYOffset >= 250) {
            document.querySelector('#toUp').style.opacity = "1"
        } else {
            document.querySelector('#toUp').style.opacity = "0"
        }
    })
}
showScrollUp()

function scrollUp() {
    document.querySelector('#toUp').addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
}
scrollUp()

//create burger-menu
if (window.innerWidth < 978) {
    const burgerNav = document.querySelector('#menu_navbar');
    document.querySelector('.navbar-toggler').classList.add('__show');

    burgerNav.appendChild(document.querySelector('nav'));
    burgerNav.appendChild(document.querySelector('.contacts'));
    burgerNav.appendChild(document.querySelector('.contacts__content'));





    function openNavigation() {
        document.querySelector('.navbar-toggler').addEventListener('click', () => {
            document.querySelector('aside').classList.add('__show');
            document.documentElement.classList.add('__showNav');

            window.addEventListener('click', (e) => {
                console.dir(e.target.tagName);
                if (e.target.tagName !== 'ASIDE' && e.target.className !== "navbar-toggler" && e.target.className !== "toggler_icon") {
                    document.querySelector('aside').classList.remove('__show');
                    document.documentElement.classList.remove('__showNav');
                }
            })
        })
    }
    openNavigation()

}


//add slick lsider to component with work

if (window.innerWidth < 978) {

    $('.services__items').slick({

        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        initialSlide: 7,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, ]

    });

}

//send mail

function sendEmail() {
    var name = document.querySelector("#name").value;
    var phone = document.querySelector("#tel").value;

        $.ajax({
           url: '/sendMail/sendMail.php',
           method: 'POST',
           dataType: 'json',
           data: {
               name: name,
               phone: phone,

           }, success: function (response) {
                $('.contact-form__form')[0].reset();
                alert("Message Sent Successfully.");
           }
        });
   console.log("запрос пошел");
}



$(document).ready(function () {

    slidersHandler();
    menuHandler();
    cartHandler();
    
    function menuHandler() {

        $('.header__burger').click(() => {
            $('.header__menu').fadeIn(300);
        });

        $('.menu__item__expand').click(function (e) {
            e.preventDefault();
            const parentMenuItem = $(this).closest('.menu__item');
            if (parentMenuItem.hasClass('has-sub-menu active')) {
                parentMenuItem.removeClass('active').children('.sub-menu').slideUp(300);
                return;
            }
            if (parentMenuItem.hasClass('has-sub-menu') && !parentMenuItem.hasClass('active')) {
                parentMenuItem.addClass('active').children('.sub-menu').slideDown(300);
                return;
            }
        });
        $('.header__menu__title').click(() => {
            $('.header__menu').fadeOut(300);
        });
    }
    
    function cartHandler() {
        
    }

    function slidersHandler() {

        oneImageSlider('.slider');
        centerModeSlider('.slider');
        centerModeSlider('.slider');
        centerModeSlider('.slider');

        function oneImageSlider(selector) {
            $(selector).slick();
        }

        function centerModeSlider(selector) {
            $(selector).slick({
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }


    $('.section__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});



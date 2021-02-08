$(document).ready(function () {

    slidersHandler();
    menuHandler();
    cartHandler();
    
    function menuHandler() {

        $('.header__burger').click(() => {
            $('.header__menu').fadeToggle(300);
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

        oneImageSlider('.section__hero__slider');
        centerModeSlider('.section__product__slider');
        centerModeSlider('.slider');
        centerModeSlider('.slider');

        function oneImageSlider(selector) {
            $(selector).slick({
                dots: true,
                arrows: false
            });
        }

        function centerModeSlider(selector) {
            $(selector).slick({
                slidesToShow: 5,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            centerMode: true,
                            centerPadding: '60px',
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
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



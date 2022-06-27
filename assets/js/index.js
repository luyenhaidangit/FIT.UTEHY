$(document).ready(function () {
    mainSlider();
});

//Main slider
function mainSlider(){
    $('.slider-wrap').slick({      
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        prevArrow: $('.slider__btn--left'),
        nextArrow: $('.slider__btn--right'),
    });
}


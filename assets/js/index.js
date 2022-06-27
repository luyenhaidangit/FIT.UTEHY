$(document).ready(function () {
    mainSlider();

    activitiSlider();
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



//Activiti slider
function activitiSlider(){
    $('.activiti-body__wrap').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.activiti__btn--left'),
        nextArrow: $('.activiti__btn--right'),
      });
}


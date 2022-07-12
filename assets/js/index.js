$(document).ready(function () {
    loading();

    mainSlider();

    activitiSlider();

    introductSlider();

    studentSlider();
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
        responsive: [
            {
              breakpoint: 1160,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
}

//Introduct slider
function introductSlider(){
    
    $('.introduct-gallery-slider-list__wrap').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: $('.introduct__btn--left'),
        nextArrow: $('.introduct__btn--right'),
        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
          ],
      });

    
    $(".introduct-gallery-slider-list__wrap").mouseup(function(){
        let srcSubImg = $(".introduct-gallery-slider-list__item.slick-current > img").attr("src");
        $(".introduct-gallery__slider--main > img").fadeOut("fast", function() {
            $(this).attr("src", srcSubImg);
            $(this).fadeIn('fast');
        })
      });
    
    
    $(".introduct__btn--left").click(function(){
        let srcSubImg = $(".introduct-gallery-slider-list__item.slick-current > img").attr("src");
        $(".introduct-gallery__slider--main > img").fadeOut("fast", function() {
            $(this).attr("src", srcSubImg);
            $(this).fadeIn('fast');
        })
    })
    $(".introduct__btn--right").click(function(){
        let srcSubImg = $(".introduct-gallery-slider-list__item.slick-current > img").attr("src");
        $(".introduct-gallery__slider--main > img").fadeOut("fast", function() {
            $(this).attr("src", srcSubImg);
            $(this).fadeIn('fast');
        })
    })
}

// slider student
function studentSlider(){
    $('.student__list-review').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.activiti__btn--left'),
        nextArrow: $('.activiti__btn--right'),
        responsive: [
            {
              breakpoint: 1160,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
}


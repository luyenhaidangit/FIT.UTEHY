$(document).ready(function () {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $(".navigation").addClass("white-bg");
            $(".navigation-brand__title").addClass("white-bg");
            $(".main-nav__item:not(:last-child)>a").addClass("white-bg");
        } else {
            $(".navigation").removeClass("white-bg");
            $(".navigation-brand__title").removeClass("white-bg");
            $(".main-nav__item:not(:last-child)>a").removeClass("white-bg");
        }
    });

    scrollHeader();

    // function scrollHeader () {
    //     if ($(".heroabout").length) {
    //         let t = $(".heroabout .hero__overlay"),
    //             e = $(".heroabout .hero__content-heading"),
    //             i = $(".heroabout .hero__content-des"),
    //             n = $(".heroabout .hero__shape"),
    //             r = new gsap.timeline();
    //         r.from(t, { opacity: 0.5 }).from(e, { y: 80 }, "=-0.5").to(n, { opacity: 0 }, "=-0.5").from(i, { opacity: 0, y: 100 }, "=-0.5");
    //         let s = new ScrollMagic.Controller();
    //         new ScrollMagic.Scene({ duration: 1e3, offset: 0 }).setTween(r).setPin(".heroabout").addTo(s);
    //     }
    // }
});
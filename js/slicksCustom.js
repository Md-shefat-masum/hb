$(document).ready(function () {

    //    slick slider
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        preview: true,
        //vertical: true,
        nextArrow: ".slidNext",
        prevArrow: '.slidPrv',
        swipe: true,
        //cssEase: 'ease',
        easing: 'linear',

    });


});

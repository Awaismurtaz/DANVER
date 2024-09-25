$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            600: {
                items: 1,
                margin: 15
            },
            800: {
                items: 2,
                margin: 30
            },
            1000: {
                items: 3,
                margin: 30
            }
        }
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});
$('#owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    slideTransition: 'linear',
    items: 1,
    nav: false,
    dots: true,
});

$("#menu").click(function() {
    $(".mobile-menu").toggleClass('active')
    $(".header__mobile-line").each(function() {
        $(this).toggleClass('active')
    })
})

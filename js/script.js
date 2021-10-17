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


function scheduleForDay() {
    let nowDate = new Date();
    let d = (nowDate.toLocaleString('ru', {
        weekday: 'short'
    }));

    if (d == 'пн') {
        let monday = document.getElementById('monday');
        monday.style.display = 'flex';
    }
    if (d == 'вт') {
        let tuesday = document.getElementById('tuesday');
        tuesday.style.display = 'flex';
    }
    if (d == 'ср') {
        let tuesday = document.getElementById('wednesday');
        wednesday.style.display = 'flex';
    }
    if (d == 'чт') {
        let thursday = document.getElementById('thursday');
        thursday.style.display = 'flex';
    }
    if (d == 'пт') {
        let friday = document.getElementById('friday');
        friday.style.display = 'flex';
    }
    if (d == 'сб') {
        let saturday = document.getElementById('saturday');
        saturday.style.display = 'flex';
    }
    if (d == 'вс') {
        let info = document.querySelector(".table__info")
        info.style.display = 'flex';
    }
}
window.onload = function() {
    scheduleForDay();
}
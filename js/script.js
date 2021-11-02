$('#owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    slideTransition: 'linear',
    items: 1,
    nav: false,
    dots: true,
    center: true,
});

$("#menu").click(function() {
    $(".mobile-menu").toggleClass('active')
    $(".header__mobile-line").each(function() {
        $(this).toggleClass('active')
    })
})


function scheduleForDay() {
    let secTable = document.querySelector('.table');
    const schedule = {
        'пн': {
            'Время': 'Понедельник',
            '8.00 - 8.40': 'Литература',
            '8.40 - 9.20': 'География',
            '9.40 - 10.20': 'Экономика',
            '10.40 - 11.20': 'Экономика',
            '11.40 - 12.20': 'Информатика',
            '12.40 - 13.20': 'Родной русский язык',
        },
        'вт': {
            'Время': 'Вторник',
            '8.00 - 8.40': 'Литература',
            '8.40 - 9.20': 'География',
            '9.40 - 10.20': 'Экономика',
            '10.40 - 11.20': 'Экономика',
            '11.40 - 12.20': 'Информатика',
            '12.40 - 13.20': 'Родной русский язык',
        },
        'ср': {
            'Время': 'Среда',
            '9.40 - 10.20': 'География',
            '10.40 - 11.20': 'Английский язык',
            '11.40 - 12.20': 'История',
            '12.40 - 13.20': 'Математика',
            '13.30 - 14.10': 'Математика',
        },
        'чт': {
            'Время': 'Четверг',
            '8.00 - 8.40': 'Физическая культура',
            '8.50 - 9.30': 'Астрономия',
            '9.40 - 10.20': 'География',
            '10.40 - 11.20': 'Русский язык',
            '11.40 - 12.20': 'Математика',
            '12.40 - 13.20': 'Математика',
            '13.30 - 14.10': 'Итоговое сочинение',
        },
        'пт': {
            'Время': 'Пятница',
            '8.00 - 8.40': 'ОБЖ',
            '8.50 - 9.30': 'Математика',
            '9.40 - 10.20': 'Математика',
            '10.40 - 11.20': 'История',
            '11.40 - 12.20': 'Право',
            '12.40 - 13.20': 'Литература',
            '13.30 - 14.10': 'Математика',
        },
        'сб': {
            'Время': 'Суббота',
            '8.00 - 8.40': 'Индивидуальный проект',
            '8.50 - 9.30': 'Индивидуальный проект',
            '9.40 - 10.20': 'Английский язык(дист.)',
            '10.30 - 11.10': 'Физическая культура(дист.)',
        },
        'вс': [],
    }

    let nowDate = new Date();
    let d = (nowDate.toLocaleString('ru', {
        weekday: 'short'
    }));
    let table = document.querySelector('.table__content')

    for (let key in schedule[d]) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        tr.classList.toggle('table__item')
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        tr.append(td)
        tr.append(td2)
        td.innerHTML = key;
        td2.innerHTML = schedule[d][key]
    }
}

let btn = document.querySelector('#btn')

function send() {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let text = document.querySelector('#text');
    let msg = '<pre> Name:' + name.value + '</pre>' + ' <pre> Email:' + email.value + '</pre>' + ' <pre> Message:' + text.value + '</pre>'
    $.ajax({
        type: 'POST',
        url: 'http://pushmebot.ru/send',
        data: {
            'key': '49cd486d2402a8eab9433bda18625eb8',
            'message': msg,

        }
    })
    alert('Отправлено!');
    name.value = '';
    email.value = '';
    text.value = '';

}
window.onload = function() {
    scheduleForDay();
}
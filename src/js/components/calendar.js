let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    monthBox = document.querySelector('.month-name'),
    daysBox = document.querySelector('.days'),
    monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];



let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
// console.log(nowDate.getFullYear());

function setMonthCalendar(year, month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 0).getDay(),
        monthDaysText = '';

    monthBox.textContent = monthName[month];
    daysBox.innerHTML = '';

    if (monthPrefix > 0) {
        for (let i = 1; i <= monthPrefix; i++) {
            monthDaysText += '<li></li>';
        }
    }

    for (let i = 1; i <= monthDays; i++) {
        monthDaysText += '<li>' + i + '</li>';
    }

    daysBox.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear) {
        days = daysBox.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
}

setMonthCalendar(nowYear, nowMonth);

document.addEventListener('DOMContentLoaded', function (event) {
    getMark()
});

function getMark() {
    ApiService.send({markId: 1})
    // fetch('dashboard.ri-nelly.ru/api/event?markId=1')
    //     .then(response => JSON.parse(response.json()))
    //     .then(mark => {
    //         console.log(mark);
    //         // document.querySelector('.days li').innerHTML = mark.data;
    //     })
    //     .catch(error => console.log(error));

    // if (markId) {
    //     for (let i = 1; i <= monthDays; i++) {
    //         monthDaysText += '<li>' + '<div class="mark"></div>' +
    //             i + '</li>';
    //     }
    // }

}


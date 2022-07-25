let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = container.getElementsByClassName('days')[0],
    monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];



let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
console.log(nowDate.getFullYear());

function setMonthCalendar(year, month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 0).getDay(),
        monthDaysText = '';

    monthContainer.textContent = monthName[month];
    daysContainer.innerHTML = '';

    if (monthPrefix > 0) {
        for (let i = 1; i <= monthPrefix; i++) {
            monthDaysText += '<li></li>';
        }
    }

    for (let i = 1; i <= monthDays; i++) {
        monthDaysText += '<li>' + i + '</li>';
    }

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear) {
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
}

setMonthCalendar(nowYear, nowMonth);

// document.addEventListener('DOMContentLoaded', function (event) {
//     getMark()
// });

// function getMark() {
//     fetch('dashboard.ri-nelly.ru/api/event')
//         .then(response => response.json())
//         .then(user => {
//             console.log(user);
//             // document.querySelector('h2').innerText = user.title;
//             // document.querySelector('#pic').src = user.url;
//             // document.querySelector('.days li.date-now').innerText = user.explanation;
//         })
//     .catch(error => console.log(error));

// }

// prev.onclick = function () {
//     let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

//     curDate.setMonth(curDate.getMonth() - 1);

//     let curYear = curDate.getFullYear(),
//         curMonth = curDate.getMonth();

//     setMonthCalendar(curYear,curMonth);
// }

// next.onclick = function () {
//     let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

//     curDate.setMonth(curDate.getMonth() + 1);

//     let curYear = curDate.getFullYear(),
//         curMonth = curDate.getMonth();

//     setMonthCalendar(curYear,curMonth);
// }
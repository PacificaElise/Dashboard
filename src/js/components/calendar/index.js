import ApiService from "../../services/api";

function calendar(events) {
    let nowDate = new Date(),
        nowDateNumber = nowDate.getDate(),
        nowMonth = nowDate.getMonth(),
        nowYear = nowDate.getFullYear(),
        monthBox = document.querySelector('.month-name'),
        daysBox = document.querySelector('.days'),
        monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    function getCalendar(year, month) {
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
            const currentEvent = events.find(event => {
                const date = new Date(event.completeDate);
                return date.getMonth() === nowMonth && date.getDate() === i;
            })

            monthDaysText += `<li class=${currentEvent ? 'important-event' : '' }>` + i + `</li>`;
        } 

        daysBox.innerHTML = monthDaysText;

        if (month == nowMonth && year == nowYear) {
            let days = daysBox.getElementsByTagName('li');
            days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
        }
    }

    getCalendar(nowYear, nowMonth)
    
}


function BuildCalendar() {
    let res = ApiService.send({
        url: 'event',
        method: 'GET',
        data: {
            markId: 1
        }
    }).then(res => {
        calendar(res.data);
    })
}



export {
    BuildCalendar
}

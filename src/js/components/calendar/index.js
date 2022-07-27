function calendar() {
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
            monthDaysText += '<li>' + i + '</li>';
        } //'<div class="mark"></div>'

        daysBox.innerHTML = monthDaysText;

        if (month == nowMonth && year == nowYear) {
            let days = daysBox.getElementsByTagName('li');
            days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
        }
    }

    getCalendar(nowYear, nowMonth)
}

document.addEventListener('DOMContentLoaded', function (event) {
    calendar()
});




import ApiService from "../../services/api";


function getMark() {
    let res = ApiService.send({
        url: 'event',
        method: 'GET',
        data: {
            markId: 1
        }
    }).then(res => {
        console.log(res);
        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].mark !== null) {
                let marks = res.data[i].completeDate;
                console.log("marks", marks);


            }
        }

    })
}



document.addEventListener('DOMContentLoaded', function (event) {
    getMark()
});


export {
    calendar
}
// export { getMark}
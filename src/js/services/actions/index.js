import ApiService from '../api';
class EventActions {
    static async remove(){
        ApiService.send({method: 'DELETE', data, url});
    }


    static async getDayList(value){
        ApiService.send({
            method: 'GET',
            data: {
                day: value.getTime()
            },
            url: 'event'
        })
        .then(function(resp){
            let tasksArr = resp.data,
                plansList = document.querySelector('.business-today'),
                plansContainer = document.querySelector('.plans'),
                box = document.querySelector('.business-today_list')

            console.log(tasksArr);

            tasksArr.forEach(elem => {
            
            console.log(box);

            const time = new Date(elem.completeDate);
            console.log(time.getTime());

            let hours, minutes, correctTime;
            
            function formatTime (time){
                hours = String(time.getHours()).padStart(2,0),
                minutes = String(time.getMinutes()).padStart(2,0)

                correctTime = `${hours}:${minutes}`;
            }

            formatTime(time);

            box.innerHTML += `<div class="details">
                                <label class="details_time det-text-opacity">${correctTime}</label>
                                <div class="details-label-string">
                                    <span class="dot dot-color"></span>
                                    <p class="det-text-opacity">${elem.text}</p>
                                </div>
                                <div class="pic-close">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M1.78125 17.5312L0.46875 16.2187L7.6875 9L0.46875 1.78125L1.78125 0.46875L9 7.6875L16.2187 0.46875L17.5312 1.78125L10.3125 9L17.5312 16.2187L16.2187 17.5312L9 10.3125L1.78125 17.5312Z"
                                            fill="#FD4B33" />
                                </svg>
                            </div>
                            </div>`
            plansList.append(box);
            plansContainer.append(plansList);
            });
        })    
    }


    // static async update(){
    //     // send({method: 'GET', data, url});

    //     getDayList(); //получаем данные по выбранной дате
    //     rebuildList();     //обновляем верстку
    // }
}




export default EventActions;
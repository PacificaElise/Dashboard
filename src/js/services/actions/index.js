import ApiService from '../api';


class EventActions {
    static async remove(idValue){
        console.log(idValue);
        ApiService.send({
            method: 'DELETE', 
            data: {
                id: idValue
            },
            url: 'event'
        })
        .then(resp => console.log(resp))
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
                plansContainer = document.querySelector('.plans'),
                plansList = document.querySelector('.business-today'),
                box = document.querySelector('.business-today_list')

            console.log(tasksArr);

            tasksArr.forEach(elem => {

                const time = new Date(elem.completeDate);

                let hours, minutes, correctTime;

                function formatTime (time){
                    hours = String(time.getHours()).padStart(2,0),
                    minutes = String(time.getMinutes()).padStart(2,0)

                    correctTime = `${hours}:${minutes}`;
                }

                formatTime(time);
            
                const details = document.createElement('div');
                details.setAttribute('class', 'details');

                details.innerHTML += `
                                <label class="details_time det-text-opacity">${correctTime}</label>
                                <div class="details-label-string">
                                    <span class="dot dot-color"></span>
                                    <p class="det-text-opacity">${elem.text}</p>
                                </div>
                                
                                <svg class="pic-close" data-id=${elem.id} width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M1.78125 17.5312L0.46875 16.2187L7.6875 9L0.46875 1.78125L1.78125 0.46875L9 7.6875L16.2187 0.46875L17.5312 1.78125L10.3125 9L17.5312 16.2187L16.2187 17.5312L9 10.3125L1.78125 17.5312Z"
                                            fill="#FD4B33" />
                                </svg>
                            `
                box.append(details)
                plansList.append(box);
                plansContainer.append(plansList);
            });

            const deleteBtn = document.querySelectorAll('.pic-close');

            deleteBtn.forEach(item => {
                item.addEventListener('click', (e) => {
                    let target = e.currentTarget
                    let idValue = target.getAttribute('data-id')
                    console.log(idValue);
                    EventActions.remove(idValue)
                })
            })
            })
        }
}

    // static async update(){
    //     // send({method: 'GET', data, url});

    //     getDayList(); //получаем данные по выбранной дате
    //     rebuildList();     //обновляем верстку
    // }





export default EventActions;
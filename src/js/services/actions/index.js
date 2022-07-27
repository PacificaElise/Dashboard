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
        .then(resp => console.log(resp))
        .then(resp => {
           
            let tasksArr;
            let str = '';   

            tasksArr = resp.data;
            console.log(tasksArr);
            tasksArr.forEach(elem => {
            return str += `<div class="details">
                                <label class="details_time det-text-opacity">${elem.completeDate}</label>
                                <div class="details-label-string">
                                    <span class="dot dot-color">${elem.markId}</span>
                                    <p class="det-text-opacity">${elem.text}</p>
                                </div>
                                <div class="pic-close"></div>
                            </div>`
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
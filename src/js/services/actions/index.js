class EventActions {
    static async remove(){
        send({method: 'DELETE', data, url});
    }

    static async getDayList(){
        send({
            method: 'GET',
            data: {
                day: value.getTime()
            },
            url: 'event'
        })
        .then(resp => console.log(resp))

    }

    static async update(){
        // send({method: 'GET', data, url});

        this.getDayList(); //получаем данные по выбранной дате
        rebuildList();     //обновляем верстку
    }
}

let tasksArr;
let str = '';

function rebuildList(){
    tasksArr = resp.data;
    tasksArr.forEach(elem => {
        str += `<div class="details">
                    <label class="details_time det-text-opacity">${elem.completeDate}</label>
                        <div class="details-label-string">
                            <span class="dot dot-color">${elem.markId}</span>
                            <p class="det-text-opacity">${elem.text}</p>
                        </div>
                    <div class="pic-close"></div>
                </div>`
    });
}
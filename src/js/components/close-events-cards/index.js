import ApiService from "../../services/api";

function getClosestEvents() {

new ApiService.send({
    url: 'event',
    method: 'GET',
})
.then(res => res.data)
.then(res => console.log (res))
.then (res => {

    //let data = res;
    let data = [
        {id:1, text:'Текстовое сообщение 1', completeDate:'2022-07-26T07:00:00.000Z', mark:null, isExpired:true},
        {id:2, text:'Текстовое сообщение 2', completeDate:'2022-07-28T10:15:00.000Z', mark:{id:'2', color:'#F0A7C4', title:'Учёба'}, isExpired:false},
        {id:3, text:'Текстовое сообщение 3', completeDate:'2022-07-27T13:48:00.000Z', mark:{id:'4', color:'#85CF6B', title:'Отдых'}, isExpired:false},
        {id:4, text:'Текстовое сообщение 4', completeDate:'2022-07-26T16:58:00.000Z', mark:null, isExpired:false},
        {id:5, text:'Текстовое сообщение 5', completeDate:'2022-07-28T10:30:00.000Z', mark:null, isExpired:false},
    ];

        
    let notExpired = data.filter(data => data.isExpired == false);
    let parseDates = notExpired.map(d => Date.parse(d.completeDate));
    let result = parseDates.sort().reverse().splice(0,3);
    
    const closestEvents = document.querySelector('.close-events-cards');

    for (let i = 0; i < result.length ; i++) {
        for (let d = 0; d < notExpired.length; d++) {
            if (Date.parse(notExpired[d].completeDate) === result[i]) {
                    closestEvents.innerHTML += `<div class="closest-event">
                    <div class="date">${notExpired[d].completeDate.slice(0,-8).replace(/\T/, ' ').replace(/\-/g, '.')}</div>
                    <div class="content">${notExpired[d].text}</div>
                    <div class="label" data-id ="${notExpired[d].id}"</div>
                </div>`;
        }
    }} 

    let labelId = document.querySelector('.label').dataset.id;

    for (let d = 0; d < notExpired.length; d++) {
        if (notExpired[d].mark !== null) {
        if (+labelId === notExpired[d].id) { 
            document.querySelector('.label').style.background = notExpired[d].mark.color
        }}
    }
    })
}

export { getClosestEvents };

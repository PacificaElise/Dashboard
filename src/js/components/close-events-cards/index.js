import ApiService from "../../services/api";

function getClosestEvents() {

new ApiService.send({
    url: 'event',
    method: 'GET',
})
.then(res => res.data)
.then (res => {   


    /*let data = [
    {id: 3, text: 'Тестовое событие 3', completeDate: '2022-07-26T10:00:09.000Z', mark: {id: 1, title: 'Важное', color: '#f0520e'}, isExpired: false},
    {id: 4, text: 'asdad', completeDate: '2022-07-27T13:28:00.000Z', mark: null, isExpired: false},
    {id: 5, text: 'sasda', completeDate: '2022-07-27T13:29:00.000Z',ark: {id: 2, title: 'Важное', color: '#DFE1E5'}, isExpired: false}
    ];*/

    let notExpired = res.filter(data => !data.isExpired);
    notExpired.forEach(item => {
        item.completeDate = new Date(item.completeDate).toLocaleString()
    });
    let result = notExpired.sort().splice(0,3);
    console.log(result)
    
    const closestEvents = document.querySelector('.close-events-cards');
    let labels;

    result.forEach (item => {
        closestEvents.innerHTML += `<div class="closest-event">
        <div class="date">${item.completeDate}</div>
        <div class="content">${item.text}</div>
        <div class="label" data-id = "${item.id}" style="background: ${item.mark.color}"</div>
    </div>`; 
    labels = document.querySelector(`[data-id="${item.id}"]`);
    console.log(labels.dataset.id)   
    });
    })
}

export { getClosestEvents };

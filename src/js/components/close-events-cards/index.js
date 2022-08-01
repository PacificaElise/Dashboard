import ApiService from "../../services/api";

function getClosestEvents() {

new ApiService.send({
    url: 'event',
    method: 'GET',
})
.then(res => res.data)
.then (res => {   


    let notExpired = res.filter(data => !data.isExpired);
    notExpired.forEach(item => {
        item.completeDate = new Date(item.completeDate).toLocaleString()
    });
    let result = notExpired.sort().splice(0,3);

    
    const closestEvents = document.querySelector('.close-events-cards');

    result.forEach (item => {
        closestEvents.innerHTML += `<div class="closest-event">
        <div class="date">${item.completeDate}</div>
        <div class="content">${item.text}</div>
        ${item.mark ? `<div class="label" style="background:${item.mark.color}"></div>` : ''}
    </div>`; 
    });
    })
}

export { getClosestEvents };

import ApiService from "../../services/api";
import Ellipsis from "../../../../node_modules/ellipsis.js";

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

    result.forEach(item => {
        closestEvents.innerHTML += `<div class="closest-event" class="clamp">
        <div class="date">${item.completeDate}</div>
        <div class="content">${item.text}</div>
        <div class="label" style="background: ${item.mark.color}"</div>
    </div>`;    
    });

    Ellipsis();

    })
}

export { getClosestEvents };

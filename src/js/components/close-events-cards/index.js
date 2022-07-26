//import { ApiService } from './js/services/api';
function getClosestEvents() {


async function getResponse() {
    let response = await fetch(`http://jsonplaceholder.typicode.com/photos`);
    let events = await response.json();
    events = events.splice(0,3);

    const closestEvents = document.querySelector('.close-events-cards');

    let key;
    for (key in events) {
        console.log(events[key])
        closestEvents.innerHTML += `<div class="closest-event">
            <div class="date">${events[key].id}</div>
            <div class="content">${events[key].title}</div>
            <div class="label"></div>
        </div>`
    }
}

getResponse()
}

export { getClosestEvents };

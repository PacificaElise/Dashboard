class EventActions {

    static async remove(){
        // const action = e.target;
        send({method: 'DELETE', data, url});
    }

    static async getDayList(){
       //реагирует на событие change
        send({method: 'GET', data, url});

    }

    static async update(){
        send({method: 'GET', data, url});
        rebuildList();
    }
}

function rebuildList(){
    
}


// button.addEventListener('click', remove(e)); //здесь вместо button будет id или class из верстки
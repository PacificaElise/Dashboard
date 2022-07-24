function labels() {

const getTemplate = (data = [], placeholder, selectedID) => {
    let text = placeholder ?? '';
    let color;

    const items = data.map(item => {
        let cls = '';
        if (item.id === selectedID) {
            text = item.title;
            color = item.color;
            cls = 'selected'
        }
        return `
            <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.title}</li>
        `
    })

    return `
        <div class="select__backdrop" data-type="backdrop"></div>
        <div class="select__input" data-type="input" data-color="${color}" data-title="${text}">
            <span class="select__color" data-type="color" style="background-color:${color}"></span>
            <span class="select__title" data-type="title">${text}</span>
            <i class="fa fa-chevron-down" style="color: #DFE1E5" data-type="arrow"></i>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
            ${items.join('')}
            </ul>
        </div>
    `
}

class Select { 
    constructor(selector, options) {
        this.el = document.querySelector(selector);
        this.options = options;
        this.selectedID = options.selectedID;

        this.#render();
        this.#setup()
    }

    #render() {
        const {placeholder, data} = this.options;
        this.el.classList.add('select');
        this.el.innerHTML = getTemplate(data, placeholder, this.selectedID)
    }
    
    #setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.el.addEventListener('click', this.clickHandler);
        this.arrow = this.el.querySelector('[data-type="arrow"]');
        this.title = this.el.querySelector('[data-type="title"]');
        this.color = this.el.querySelector('[data-type="color"]');
    }

    clickHandler(event) {
        const {type} = event.target.dataset;
        if (type === 'input' || type === 'arrow' || type === 'title') {
            this.toggle()
        } else if (type === 'item') {
            const id = event.target.dataset.id;
            this.select(id)
        } else if (type === 'backdrop') {
            this.close()
        }
    }

    get isOpen() {
        return this.el.classList.contains('open')
    }

    get current() {
        return this.options.data.find(item => item.id === this.selectedID)
    }

    select(id) {
        this.selectedID = id;
        this.title.textContent = this.current.title;
        this.color.style.backgroundColor = this.current.color;
        this.el.querySelector('.select__input').setAttribute('data-color', this.current.color);
        this.el.querySelector('.select__input').setAttribute('data-title', this.current.title);
        this.el.querySelectorAll(`[data-type="item"]`).forEach(el => {
            el.classList.remove('selected')
        });
        this.el.querySelector(`[data-id="${id}"]`).classList.add('selected');
        this.options.onSelect ? this.options.onSelect(this.current) : null;
        this.close()
    }

    toggle() {
        this.isOpen ? this.close() : this.open()

    }

    open() {
        this.el.classList.add('open');
        this.arrow.classList.remove('fa-chevron-down');
        this.arrow.classList.add('fa-chevron-up');
    }

    close() {
        this.el.classList.remove('open');
        this.arrow.classList.add('fa-chevron-down');
        this.arrow.classList.remove('fa-chevron-up');
    }

    destroy () {
        this.el.removeEventListener('click', this.clickHandler);
        this.el.innerHTML =''
    }
};

const select = new Select('#select', {
    placeholder: 'Выберите метку',
    selectedID: '1',
    data: [
        {id:'1', color: '#7BAFFC', title: 'Работа'},
        {id:'2', color: '#F0A7C4', title: 'Учёба'},
        {id:'3', color: '#85CF6B', title: 'Отдых'},
        {id:'4', color: '#FFA0A3', title: 'Спорт'},
        {id:'5', color: '#FD4B33', title: 'Важное'}
    ],
    onSelect(item) {
        console.log(item);
    }
});
};


export { labels };


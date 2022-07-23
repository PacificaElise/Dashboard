import SimplePicker from "simplepicker"; //импортируем установленный модуль датапикера

function datepickers() {
    // создаем экземпляр класса датапикера (можнол почитать об этом в документации) и передаем параметром
    // селеткор в котором будет лежать датапикер. Для каждого датапикера нужен свой селектор и свой инпут в котором будет лежать его значение.
    const timeDatepicker = new SimplePicker('.timeDatepicker'),
        timeDatepickerInput = document.querySelector('.timeDatepicker__input'); //input в котором будет лежать значение которое будет выбрано в датапикере


    //Если на странице на которой мы находимся нет нужных нам селекторов делаем return и функция datepicker прекратит работу
    if (!(timeDatepicker && timeDatepickerInput)) {
        return;
    }

    //Отлавливаем событие focus - когда датапикер взят в фокус и тогда открываем наш датапикер
    timeDatepickerInput.addEventListener('focus', () => {
        //метод из документации. По такое команде через экземпляр класса датапикера он открывается
        timeDatepicker.open();
    });

    //Опять метод on из документации датапикера. Он выполняет функцию которая лежит у него внутри тогда, когда произошел submit на самом датапикере
    //то есть когда пользователь выбрал время и нажал ОК
    timeDatepicker.on('submit', (timeValue => {
        //в параметре который я назвала timeValue передается значение которое было выбрано в датапикере
        // и мы присваиваем это значение value инпута.
        timeDatepickerInput.value = timeValue.toLocaleString();
    }));
}

export { datepickers };
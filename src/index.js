import './scss/main.scss';
import { calendar } from './js/components/calendar';
//Подключаем наш модуль с функцией которая запускает наши датапикеры
//import { datepickers } from './js/components/datepickers';
//Импортируем стили из node_modules Для наших датапикеров
import 'simplepicker/dist/simplepicker.css';
import { labels } from './js/components/labels';


window.addEventListener('DOMContentLoaded', () => {
    //Запускаем наш собственный модуль с нашими датапикерами
    //datepickers();
    labels();
    //Забрать id метки
    document.querySelector('button').addEventListener('click', () => console.log(document.querySelector('.select__input').dataset.value));
    // Все импортированные скрипты применять здесь
});


import './scss/main.scss';
//Подключаем наш модуль с функцией которая запускает наши датапикеры
//import { datepickers } from './js/components/datepickers';
//Импортируем стили из node_modules Для наших датапикеров
import 'simplepicker/dist/simplepicker.css';
//import { labels } from './js/components/labels';
import { getClosestEvents } from './js/components/close-events-cards';


window.addEventListener('DOMContentLoaded', () => {
    //Запускаем наш собственный модуль с нашими датапикерами
    //datepickers();
    //labels();
    getClosestEvents();
    //Забрать id метки
    //document.querySelector('button').addEventListener('click', () => console.log(document.querySelector('.select__input').dataset.value));
    // Все импортированные скрипты применять здесь
});


import './scss/main.scss';
//Подключаем наш модуль с функцией которая запускает наши датапикеры
//import { datepickers } from './js/components/datepickers';
//Импортируем стили из node_modules Для наших датапикеров
import 'simplepicker/dist/simplepicker.css';
import { labels } from './js/components/labels';


window.addEventListener('DOMContentLoaded', () => {
    //Запускаем наш собственный модуль с нашими датапикерами
    //datepickers();
    labels();
    //Забрать название и цвет выбранной метки
    document.querySelector('button').addEventListener('click', () => console.log(document.querySelector('.select__input').dataset.color, document.querySelector('.select__input').dataset.title));
    // Все импортированные скрипты применять здесь
});


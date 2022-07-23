import './scss/main.scss';
//Подключаем наш модуль с функцией которая запускает наши датапикеры
import { datepickers } from './js/components/datepickers';
//Импортируем стили из node_modules Для наших датапикеров
import 'simplepicker/dist/simplepicker.css';

window.addEventListener('DOMContentLoaded', () => {
    //Запускаем наш собственный модуль с нашими датапикерами
    datepickers();
    // Все импортированные скрипты применять здесь
});
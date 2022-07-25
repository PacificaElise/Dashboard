import './scss/main.scss';
import { datepickers } from './js/components/datepickers';
import 'simplepicker/dist/simplepicker.css';
import { labels } from './js/components/labels';
import { navigations } from './js/components/nav';

window.addEventListener('DOMContentLoaded', () => {    
    datepickers();
    labels();
    navigations();

    // Передать id выбранной метки
    //document.querySelector('button').addEventListener('click', () => console.log(document.querySelector('.select__input').dataset.value));
});


import './scss/main.scss';
import { datepickers } from './js/components/datepickers';
import 'simplepicker/dist/simplepicker.css';
import { labels } from './js/components/labels';


window.addEventListener('DOMContentLoaded', () => {    
    datepickers();
    labels();
    
    document.querySelector('button').addEventListener('click', () => console.log(document.querySelector('.select__input').dataset.value));    
});


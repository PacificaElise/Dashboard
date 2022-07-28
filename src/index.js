import './scss/main.scss';
import {Datepicker} from './js/components/datepickers';
import 'simplepicker/dist/simplepicker.css';
import {labels} from './js/components/labels';
import {navigations} from './js/components/nav';
import ApiService from "./js/services/api";
import EventActions from "./js/services/actions";

window.addEventListener('DOMContentLoaded', () => {
    // Datepicker для создания событий
    new Datepicker({
        el: '.timeDatepicker',
        input: '.timeDatepicker__input',
        onSubmit: (value) => {
            console.log(value)
        }
    });

    //Datepicker для отображения событий
    new Datepicker({
        el: '.theDatepicker',
        input: '.theDatepicker__input',
        options: {
            disableTimeSection: true
        },
        onSubmit: (value) => {
            EventActions.getDayList(value)
        }
    });

    labels();
    navigations();
    
    // Передать id выбранной метки
    //document.querySelector('button').addEventListener('click', () => console.log(document.querySelector('.select__input').dataset.value));
});




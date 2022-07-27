import './scss/main.scss';
import {Datepicker} from './js/components/datepickers';
import 'simplepicker/dist/simplepicker.css';
import {labels} from './js/components/labels';
import {navigations} from './js/components/nav';
import ApiService from "./js/services/api";
//import { getClosestEvents } from './js/components/close-events-cards';

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
            // Тут должен быть твой метод который будет отображать данные в списке
            ApiService.send({
                url: 'event',
                method: 'GET',
                data: {
                    day: value.getTime()
                }
            }).then(res => console.log(res))
        }
    });

    labels();
    navigations();
    //getClosestEvents();

    // Передать id выбранной метки
    //document.querySelector('button').addEventListener('click', () => console.log(document.querySelector('.select__input').dataset.value));
});


import './scss/main.scss';
import {Datepicker} from './js/components/datepickers';
import {BuildCalendar} from './js/components/calendar';
import 'simplepicker/dist/simplepicker.css';
import {labels} from './js/components/labels';
import {navigations} from './js/components/nav';
import ApiService from "./js/services/api";
import { Todo } from './js/components/todo';
import { getClosestEvents } from './js/components/close-events-cards';


window.addEventListener('DOMContentLoaded', () => {
    let todoDate = 0;
    // Datepicker для создания событий
    const timePickerObj = new Datepicker({
        el: '.timeDatepicker',
        input: '.timeDatepicker__input',
        onSubmit: (value) => {
            todoDate = value.getTime();
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

    if (window.location.pathname === '/' || window.location.pathname === '/index.html'){
    getClosestEvents();
    BuildCalendar();
    }

    const saveTodo = document.querySelector('#todoSave'),
        todoTextArea = document.querySelector('.todoTextArea'),
        todoMarkSelect = document.querySelector('.todoMarkSelect .select__input');

    if (saveTodo && todoTextArea && todoMarkSelect) {
        saveTodo.addEventListener('click', () => {
            const data = {
                text: todoTextArea.value,
                completeDate: todoDate
            }

            if (todoMarkSelect.dataset.value) {
                data.markId = todoMarkSelect.dataset.value;
            }
            Todo.create(data)
                .then(isSuccess => {
                    if (isSuccess) {
                        todoTextArea.value = '';
                        todoDate = 0;
                        timePickerObj.reset();
                    }
                })
        });
    }
});


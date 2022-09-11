import './scss/main.scss';
import 'simplepicker/dist/simplepicker.css';
import {Datepicker} from "./js/components/datepickers";
import EventActions from "./js/services/actions";
import {Todo} from "./js/components/todo";
import {labels} from "./js/components/labels";
import {navigations} from "./js/components/nav";

window.addEventListener('DOMContentLoaded', () => {
    labels();
    navigations();

    let todoDate = 0;
    // Datepicker для создания событий
    const timePickerObj = new Datepicker({
        el: '.timeDatepicker',
        input: '.timeDatepicker__input',
        onSubmit: (value) => {
            todoDate = value.getTime();
        }
    });

    let todayDate = new Date();

    //Datepicker для отображения событий
    let sp = new Datepicker({
        el: '.theDatepicker',
        input: '.theDatepicker__input',
        options: {
            disableTimeSection: true,
        },
        onSubmit: (value) => {
            EventActions.getDayList(value)
        }
    });

    EventActions.getDayList(todayDate);

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
})
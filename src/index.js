import './scss/main.scss';
import { datepickers } from './js/components/datepickers';
import { labels } from './js/components/labels';


window.addEventListener('DOMContentLoaded', () => {
    datepickers();
    labels();
    // Все импортированные скрипты применять здесь
});


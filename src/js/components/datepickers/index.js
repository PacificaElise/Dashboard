import SimplePicker from "simplepicker"; 

function datepickers() {
    const timeDatepickerInput = document.querySelector('.timeDatepicker__input'),
        theDatepickerInput = document.querySelector('.theDatepicker__input');

    if (!(timeDatepickerInput && theDatepickerInput)) {
        return;
    }

    const timeDatepicker = new SimplePicker('.timeDatepicker'),
        theDatepicker = new SimplePicker('.theDatepicker', {disableTimeSection: true});

    timeDatepickerInput.addEventListener('focus', () => {
        timeDatepicker.open();
    });

    timeDatepicker.on('submit', (timeValue => {
        timeDatepickerInput.value = timeValue.toLocaleString();
    }));
    
    theDatepickerInput.addEventListener('focus', () => {
        theDatepicker.open();
    });

    theDatepicker.on('submit', (dateValue => {
        theDatepickerInput.value = dateValue.toLocaleDateString();
    }));
}

export { datepickers };


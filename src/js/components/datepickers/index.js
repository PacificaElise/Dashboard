import SimplePicker from "simplepicker"; 

function datepickers() {
    const timeDatepicker = new SimplePicker('.timeDatepicker'),
        timeDatepickerInput = document.querySelector('.timeDatepicker__input'), 
        theDatepicker = new SimplePicker('.theDatepicker', {disableTimeSection: true}),
        theDatepickerInput = document.querySelector('.theDatepicker__input');

    if (!(timeDatepicker && timeDatepickerInput)) {
        return;
    }

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


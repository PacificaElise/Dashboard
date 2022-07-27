import SimplePicker from "simplepicker";

class Datepicker {
    constructor(props) {
        const { el, input, options, onSubmit } = props;
        this.datepickerInput = document.querySelector(input);

        if (!this.datepickerInput) {
            return null;
        }

        this.datepicker = new SimplePicker(el, options);

        this.datepickerInput.addEventListener('focus', () => {
            this.datepicker.open();
        });

        this.datepicker.on('submit', (timeValue => {
            if (options?.disableTimeSection) {
                this.datepickerInput.value = timeValue.toLocaleDateString();
            } else {
                this.datepickerInput.value = timeValue.toLocaleString();
            }
            onSubmit(timeValue);
        }));
    }
}

export { Datepicker };


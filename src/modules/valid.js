import validPlus from "./validPlus";

const valid = () => {
    const calc = document.querySelectorAll('.calc-item:not(.calc-type)');
    const emails = document.querySelectorAll('input[name=user_email]');
    const dial = document.querySelectorAll('input[name=user_phone]');
    const message = document.querySelector('input[name=user_message]');
    const name = document.querySelectorAll('input[name=user_name]');

    message.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ0-9!?,.:;'"()-]/, '');

        if (e.target.classList.contains('error') && validPlus([e.target])) {
            e.target.classList.remove('error');
        }
    });
    name.forEach((value) => {
        value.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^а-яё\- ]/gi, '');

            if (e.target.classList.contains('error') && validPlus([e.target])) {
                e.target.classList.remove('error');
            }
        });
    });
    calc.forEach((value) => {
        value.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/\D+/, '');
        });
    });
    emails.forEach((value) => {
        value.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^a-z\d@-_.!~*']/gi, '');

            if (e.target.classList.contains('error') && validPlus([e.target])) {
                e.target.classList.remove('error');
            }
        });

    });
    dial.forEach((value) => {
        value.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^\d()\-\+]+/, '');

            if (e.target.classList.contains('error') && validPlus([e.target])) {
                e.target.classList.remove('error');
            }
        });
    });
};

export default valid;
const valid = () => {

    const calc = document.querySelectorAll('.calc-item');
    const emails = document.querySelectorAll('input[type=email]');
    const dial = document.querySelectorAll('input[type=tel]');
    const message = document.querySelector('.mess');

    message.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
    });

    calc.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '');
        });
    });
    emails.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@-_.!~*']/, '');
        });
    });
    dial.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()-]+/, '');
        });
    });
};

export default valid;
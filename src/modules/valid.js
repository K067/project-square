const valid = () => {
    const calc = document.querySelectorAll('.calc-item:not(.calc-type)');
    const emails = document.querySelectorAll('input[name=user_email]');
    const dial = document.querySelectorAll('input[name=user_phone]');
    const message = document.querySelector('input[name=user_message]');
    const name = document.querySelectorAll('input[name=user_name]');

    message.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
    });

    name.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
        });
    });

    calc.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '');
        });
    });
    emails.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!~*'\-]/, '');
        });
    });
    dial.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()\-]+/, '');
        });
    });
};

export default valid;
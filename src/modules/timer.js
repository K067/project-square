const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');


    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds, };

    };
    const updateClock = () => {
        let getTime = getTimeRemaining();
        timerHours.textContent = getTime.hours.toLocaleString('ru', { minimumIntegerDigits: 2 });
        timerMinutes.textContent = getTime.minutes.toLocaleString('ru', { minimumIntegerDigits: 2 });
        timerSeconds.textContent = getTime.seconds.toLocaleString('ru', { minimumIntegerDigits: 2 });


        if (getTime.timeRemaining > 0) {
            let genesis = setInterval(() => {
                updateClock();
                clearInterval(genesis);
            }, 1000);
        } else {
            clearInterval(setInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };
    updateClock();

};
export default timer;

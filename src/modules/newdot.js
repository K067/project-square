const dots = () => {
    const allDots = document.querySelector('.portfolio-dots');
    const item = document.querySelectorAll('.portfolio-item');

    const addDots = (sample) => {
        for (let i = 0; i < sample.length; i++) {
            allDots.append(document.createElement('li'));

            allDots.querySelectorAll('li').forEach((elem) => {
                elem.className = `dot${!i ? ' dot-active' : ''}`;
            });
        }
    };

    addDots(item);
};

export default dots;
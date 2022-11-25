const dots = () => {
    const allDots = document.querySelector('.portfolio-dots');
    const item = document.querySelectorAll('.portfolio-item');

    item.forEach((iAmAnUselessParameter, index) => {
        iAmAnUselessParameter = document.createElement('li');

        iAmAnUselessParameter.className = `dot${!index ? ' dot-active' : ''}`;

        allDots.append(iAmAnUselessParameter);
    });
};

export default dots;
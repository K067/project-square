const dots = () => {
    const allDots = document.querySelector('.portfolio-dots');
    const item = document.querySelectorAll('.portfolio-item');

    item.forEach(() => {
        allDots.append(document.createElement('li'));

        let li = allDots.querySelectorAll('li');

        li.forEach((i) => {
            i.className = `dot${!i ? ' dot-active' : ''}`;
        });
    });
};

export default dots;
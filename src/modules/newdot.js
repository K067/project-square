const dots = () => {
    const allDots = document.querySelector('.portfolio-dots');
    const item = document.querySelectorAll('.portfolio-item');

    item.forEach((i) => {
        const li = document.createElement('li');

        li.className = `dot${!i ? ' dot-active' : ''}`;

        allDots.append(li);
    });
};

export default dots;
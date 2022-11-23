const dots = () => {
    const allDots = document.querySelector('.portfolio-dots');
    const item = document.querySelectorAll('.portfolio-item');


    item.forEach((e) => {
        allDots.append(document.createElement('li').className = 'dot');
        let li = allDots.querySelectorAll('li');

        li.forEach((elem) => {
            elem.className = 'dot';
            if (elem === 0) {
                elem.className = 'dot-active';
            }
        });
    });
};

export default dots;
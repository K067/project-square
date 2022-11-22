const slider = () => {
    const content = document.querySelector('.portfolio-content');
    const item = document.querySelectorAll('.portfolio-item');
    const dots = document.querySelectorAll('.dot');
    const timeInt = 2000;

    let currentSlide = 0;
    let timeId;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(item, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        currentSlide++;

        if (currentSlide >= item.length) {
            currentSlide = 0;
        }

        nextSlide(item, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
        timeId = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
        clearInterval(timeId);
    };

    content.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        prevSlide(item, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= item.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = item.length - 1;
        }

        nextSlide(item, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    content.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);
    content.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInt);
        }
    }, true);

    startSlide(timeInt);
};
export default slider;

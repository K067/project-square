const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    const content = modal.querySelector('.popup-content');

    let count = -10;

    const modalAnim = () => {
        let moveIt = requestAnimationFrame(modalAnim);

        count++;

        if (count < 5) {
            content.style.top = count * 20 + 'px';
        } else {
            cancelAnimationFrame(moveIt);
        }
    };

    const width = () => {
        if (document.documentElement.clientWidth > 768) {
            modalAnim();
        } else {
            return false;
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            width();
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        count = -10;
    });
};

export default modal;
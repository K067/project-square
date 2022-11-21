const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
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
    const width = () => document.documentElement.clientWidth > 768;
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            if (width()) {
                modalAnim();
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });
};

export default modal;
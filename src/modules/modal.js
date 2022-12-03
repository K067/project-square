import { animate } from './helpers.js';

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const content = modal.querySelector('.popup-content');

    const modalAnim = () => {
        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                content.style.top = -100 + progress * 115 + '%';
            }
        });
    };
    const width = () => document.documentElement.clientWidth > 768;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            if (width) {
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
const menu = () => {
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu();
        }
        if (e.target.closest('.close-btn')) {
            handleMenu();
        }
        else if (e.target.tagName === 'A') {
            handleMenu();
        }
    });
};
export default menu;

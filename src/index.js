import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import valid from './modules/valid';
import tabs from './modules/tabs';
import slider from './modules/slider';
import dot from './modules/newdot';
import calc from './modules/calc';
import formSending from './modules/formSending';
import maskPhone from './modules/maskphone';

timer('20 november 2023');
menu();
modal();
valid();
tabs();
dot();
slider();
calc();
formSending({
    id: 'form1',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
formSending({
    id: 'form2',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
formSending({
    id: 'form3',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
maskPhone('[name="user_phone"]', '+7 (___) ___-__-__');


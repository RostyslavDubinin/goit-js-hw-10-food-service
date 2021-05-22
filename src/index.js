import foodOrderingService from './templates/food-service-menu.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const cardsMenu = createMenuCards(menu);
menuContainer.insertAdjacentHTML('beforeend', cardsMenu);

function createMenuCards(menu) {
    return foodOrderingService(menu);
}



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const {LIGHT, DARK} = Theme;

const toggleSwitch = document.querySelector('.theme-switch__toggle');
const currentTheme = localStorage.getItem('theme');
const oldThemeClassContainer = document.querySelector('body');



if (currentTheme === 'dark-theme') {
    oldThemeClassContainer.classList.add(currentTheme);
    toggleSwitch.checked = true;
} 




function switchTheme(e) {
    if (e.target.checked) {
        oldThemeClassContainer.classList.add(`${DARK}`);
        oldThemeClassContainer.classList.remove(`${LIGHT}`);
        localStorage.setItem('theme', `${DARK}`);
        
         
    }
    else {oldThemeClassContainer.classList.add(`${LIGHT}`);
          oldThemeClassContainer.classList.remove(`${DARK}`);
          localStorage.setItem('theme', `${LIGHT}`);
        }       
}

toggleSwitch.addEventListener('change', switchTheme);




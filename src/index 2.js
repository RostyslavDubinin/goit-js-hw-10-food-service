import foodOrderingService from './templates/food-service-menu.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const cardsMenu = createMenuCards(menu);
menuContainer.insertAdjacentHTML('beforeend', cardsMenu);

function createMenuCards(menu) {
    return foodOrderingService(menu);
}


const checkboxContainer = document.querySelector('.theme-switch__toggle');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const {LIGHT, DARK} = Theme;

checkboxContainer.checked = false;
checkboxContainer.addEventListener('change', ChangeTheme);

function ChangeTheme(evt) {
    const oldThemeClassContainer = document.querySelector('body');

    if (this.checked) {
        oldThemeClassContainer.classList.add(`${DARK}`);
        oldThemeClassContainer.classList.remove(`${LIGHT}`);
        localStorage.setItem('theme', `${DARK}`);
    } 
    else {
        oldThemeClassContainer.classList.add(`${LIGHT}`);;
        oldThemeClassContainer.classList.remove(`${DARK}`);
        localStorage.setItem('theme', `${LIGHT}`);
    } 
}

window.onload = checkTheme();

function checkTheme() {
    const localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme !== null && localStorageTheme === 'dark-theme') {
        document.body.className = localStorageTheme;

        const themeSwitch = document.getElementById('.theme-switch__toggle');
        checkboxContainer.checked = true;
    }
}


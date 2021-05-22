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
const themeClassContainer = document.body;


themeClassContainer.classList.add(localStorage.getItem('theme') === null ? 
Theme.LIGHT : localStorage.getItem('theme'));
if (localStorage.getItem('theme') === Theme.DARK){
    toggleSwitch.checked = true
};



function switchTheme(e) {
    if (e.target.checked) {
        themeClassContainer.classList.add(Theme.DARK);
        themeClassContainer.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        
         
    }
    else {themeClassContainer.classList.add(Theme.LIGHT);
        themeClassContainer.classList.remove(Theme.DARK);
          localStorage.setItem('theme', Theme.LIGHT);
        }       
}

toggleSwitch.addEventListener('change', switchTheme, false );





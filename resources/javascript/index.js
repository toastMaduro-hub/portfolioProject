const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// display monile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Show active menu location when scrolling

const highlightMenu = () => {
    const menuHighlighter = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const workPage = document.querySelector('#work-page')

    let scrollPos = window.scrollY;

    // Adds the highlight class to menu items

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        workPage.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 2345) {
        workPage.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if (menuHighlighter && window.innerWidth < 960 && scrollPos < 600 || menuHighlighter) {
        menuHighlighter.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu after clicking on menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


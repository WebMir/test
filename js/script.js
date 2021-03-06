let svgMenu = document.querySelector('.svg-menu');
let icMenu = document.querySelector('.ic_menu');
let icClose = document.querySelector('.ic_close')
let mobMenu = document.querySelector('.mob-menu')
let icMenu1 = icMenu.style.display;
let icClose1 = icClose.style.display;

svgMenu.setAttribute('data-theme', 'light')

svgMenu.addEventListener('click', () => {

    if (svgMenu.getAttribute('data-theme') === 'light') {
        svgMenu.setAttribute('data-theme', 'dark')
        icMenu.setAttribute('style', 'display: none')
        icClose.setAttribute('style', 'display: block')
        mobMenu.setAttribute('style', 'left: calc(0% - (8% + 48px))')
    } else {
        svgMenu.setAttribute('data-theme', 'light')
        icClose.setAttribute('style', 'display: none')
        icMenu.setAttribute('style', 'display: block')
        mobMenu.setAttribute('style', 'left: -100%')
    }

})

let grey = document.querySelector('.grey');
let brown = document.querySelector('.brown');
let black = document.querySelector('.black');
let cssClass = document.querySelector('.cssClass');
let body = document.querySelector('body');

brown.setAttribute('style', 'background-color: #ffffff00; color: var(--pink)')

brown.addEventListener('click', () => {
    cssClass.setAttribute('href', 'css/a.css')

        grey.setAttribute('data-theme', 'off')
        body.setAttribute('style', 'filter: none')
        grey.setAttribute('style', 'background-color: ; color:')
        black.setAttribute('style', 'background-color: ; color:')
        brown.setAttribute('style', 'background-color: #ffffff00; color: var(--pink)')
})

black.addEventListener('click', () => {
    cssClass.setAttribute('href', 'css/b.css')

    grey.setAttribute('data-theme', 'off')
    body.setAttribute('style', 'filter: none')
    grey.setAttribute('style', 'background-color: ; color:')
    brown.setAttribute('style', 'background-color: ; color:')
    black.setAttribute('style', 'background-color: #ffffff00; color: var(--pink)')
})

grey.addEventListener('click', () => {
    cssClass.setAttribute('href', 'css/a.css')
    grey.setAttribute('data-theme', 'on')
    body.setAttribute('style', 'filter: grayscale(100%)')
    black.setAttribute('style', 'background-color: ; color:')
    brown.setAttribute('style', 'background-color: ; color:')
    grey.setAttribute('style', 'background-color: #ffffff00; color: var(--pink)')
})

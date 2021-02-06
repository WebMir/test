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
let body = document.querySelector('body');

grey.setAttribute('data-theme', 'off')

grey.addEventListener('click', () => {

    if (grey.getAttribute('data-theme') === 'off') {
        grey.setAttribute('data-theme', 'on')
        body.setAttribute('style', 'filter: grayscale(100%)')
        grey.setAttribute('style', 'background-color: #ffffff00; color: var(--pink)')

    } else {
        grey.setAttribute('data-theme', 'off')
        body.setAttribute('style', 'filter: none')
        grey.setAttribute('style', 'background-color: ; color:')

    }

})
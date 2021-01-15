let svgMenu = document.querySelector('.svg-menu');
let icMenu = document.querySelector('.ic_menu');
let icClose = document.querySelector('.ic_close')
let icMenu1 = icMenu.style.display;
let icClose1 = icClose.style.display;



// icMenu.setAttribute('style', 'display: none')
// icClose.setAttribute('style', 'display: none')


// function clickMenu(zzz) {
//     let i = 'block';

//     if (i == icMenu1){
//         icMenu.setAttribute('style', 'display: none')
//         icClose.setAttribute('style', 'display: block')

//        alert('1111111')
//     }
// }

// function clickClose(CCC) {
//     let i = 'block';

//     if (i == icMenu1){
//         icClose.setAttribute('style', 'display: none')
//         icMenu.setAttribute('style', 'display: block')
//         alert('000000000')
//     }
// }








svgMenu.setAttribute('data-theme', 'light')

svgMenu.addEventListener('click', () => {

    if (svgMenu.getAttribute('data-theme') === 'light') {
        svgMenu.setAttribute('data-theme', 'dark')
        icMenu.setAttribute('style', 'display: none')
        icClose.setAttribute('style', 'display: block')
    } else {
        svgMenu.setAttribute('data-theme', 'light')
        icClose.setAttribute('style', 'display: none')
        icMenu.setAttribute('style', 'display: block')
    }
})



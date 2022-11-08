// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')
const navUL = document.querySelector('#navbar-ul')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('slide')
    navMenu.classList.toggle('hidden')
})
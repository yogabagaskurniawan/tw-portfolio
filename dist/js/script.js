// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const tblScollTop = document.querySelector('#scroll-top')
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed')
        tblScollTop.classList.remove('hidden')
        tblScollTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        tblScollTop.classList.remove('flex')
        tblScollTop.classList.add('hidden')
    }
}

// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')
const navUL = document.querySelector('#navbar-ul')

hamburger.addEventListener('click', function (e) {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('slide')
    // navMenu.classList.toggle('hidden')
});

// untuk menghilangkan navmenu pada mobile version
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.remove('slide')
    }
})

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light';
    }
})

// supaya tombol darkMode bisa berpindah - pindah ketika diklik 
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}
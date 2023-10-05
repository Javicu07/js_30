const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
    window.scrollY >= topOfNav
        ? document.body.classList.add('fixed-nav')
        : document.body.classList.remove('fixed-nav')
}

window.addEventListener('scroll', fixNav);
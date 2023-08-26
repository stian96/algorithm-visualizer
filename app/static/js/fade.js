document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header.fade-in").classList.add("active");
});

window.addEventListener("load", function() {
    window.scrollTo(0, 0);
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    const hamburgerIcon = document.querySelector(".hamburger-menu");
    menu.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
}

function adjustHeaderVisibility() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }

        lastScrollTop = scrollTop;
    });
}

adjustHeaderVisibility();
document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);

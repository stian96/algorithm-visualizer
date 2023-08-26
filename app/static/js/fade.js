document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header.fade-in").classList.add("active");
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
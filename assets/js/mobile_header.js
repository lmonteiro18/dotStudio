let hamburgerIcon = document.querySelector(".mobile-menu-flex-item:last-of-type");
let mobile_MenuNavegacao = document.querySelector(".mobile-nav-flex-container");
let body = document.querySelector("body");

hamburgerIcon.addEventListener('click', function () {
    mobile_MenuNavegacao.classList.toggle("slide");
    body.classList.toggle("no-scroll-body");
});
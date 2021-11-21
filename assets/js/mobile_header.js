let hamburgerIcon = document.querySelector(".mobile-menu-flex-item:last-of-type");
let mobile_MenuNavegacao = document.querySelector(".mobile-nav-flex-container");
let body = document.querySelector("body");

hamburgerIcon.addEventListener('click', function () {
    if (mobile_MenuNavegacao.style.top === "-100vh") {
        mobile_MenuNavegacao.style.top = "0";
        body.style.height = "100vh";
        body.style.overflowY = "hidden";
    } else {
        mobile_MenuNavegacao.style.top = "-100vh";
        body.style.height = "auto";
        body.style.overflowY = "scroll";
    }
});
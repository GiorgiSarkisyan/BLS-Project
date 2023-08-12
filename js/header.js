const hamburger = document.querySelector(".global-header-burger");
const navMenu = document.querySelector(".global-header-burger-nav");
const wrapper = document.querySelector(".wrapper");
const burgerLinks = document.querySelectorAll(".burger-nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    wrapper.classList.toggle("active");

    burgerLinks.forEach(link => {
        link.classList.toggle("active");
    });
});
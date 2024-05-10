//change navbar on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ("winodow-scroll", window.scrollY > 50)
})


//Show or hide nav menu
const menu = document.querySelector(".nav__menu");
const openMenu = document.querySelector("#open-menu-btn");
const closeMenu = document.querySelector("#close-menu-btn");

openMenu.addEventListener('click', ()=> {
    menu.style.display = "flex";
    closeMenu.style.display = "inline-block";
    openMenu.style.display = "none";
}
)


closeMenu.addEventListener('click', ()=> {
    menu.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "inline-block";
}
)
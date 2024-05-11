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

//Intitalize Swiper
 /* var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed:1100,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, 
    },
  });*/
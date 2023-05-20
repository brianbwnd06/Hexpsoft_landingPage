
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active', window.scrollY>0);
});

const btnMode = document.getElementById('btn-mode');
const iconMode = document.getElementById('icon-mode');
const body = document.querySelector('body');

btnMode.addEventListener('click', function(){
    body.classList.toggle('dark');
    iconMode.classList.toggle('fa-moon')
    iconMode.classList.toggle('fa-sun')
})

const btnModeMobile = document.getElementById('btn-mode-mobile');
const bodyMobile = document.querySelector('body');
const navMenu = document.getElementById('nav-menu');
const hamMenu = document.getElementById('hamMenu');
const menuLink = document.querySelectorAll('.nav-menu li');

btnModeMobile.addEventListener('click', function(){
    this.classList.toggle('active')
    bodyMobile.classList.toggle('dark');
    navMenu.classList.remove("active");
    hamMenu.classList.remove("active");
})

hamMenu.addEventListener('click', function(){
    this.classList.toggle('active')
    navMenu.classList.toggle('active');
})

for (var i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function() {
        navMenu.classList.remove("active");
        hamMenu.classList.remove("active");
    });
  }
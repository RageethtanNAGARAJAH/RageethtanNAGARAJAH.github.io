/*Menu hamburger*/ 
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
 
menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


/*Accordion*/ 
const accordion = document.getElementById("contentBox");
for (i = 0; i< accordion.length; i++ ){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('act')
    })
}


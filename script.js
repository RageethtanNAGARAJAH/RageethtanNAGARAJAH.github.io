/*Menu hamburger*/ 
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
 
menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


const liste = document.querySelectorAll(".active1")
for ( i = 0; i < liste.length; i++) {
    liste[i].addEventListener('click', function () {
        this.classList.toggle('cliqueListe')
    })
}


// const liste = document.getElementBy
// liste.addEventListener('click', ()=>{
//     nav.classList.toggle('cliqueListe')
// })

// const elements = document.getElementsByClassName(".active1")
// for(var i = 0; i < elements.length; i++){
//     // Same like above...
//     menuHamburger.classList.toggle('cliqueListe')
// }




/*Accordion*/ 
const accordion = document.getElementsByClassName("contentBox");
for (i = 0; i< accordion.length; i++ ){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('act')
    })
}




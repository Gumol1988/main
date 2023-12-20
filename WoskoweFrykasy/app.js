const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.navLinks')

hamburger.addEventListener('click',()=> {
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})
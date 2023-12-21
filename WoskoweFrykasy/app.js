const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.navLinks')


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.nav');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });

hamburger.addEventListener('click',()=> {
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})
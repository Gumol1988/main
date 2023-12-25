const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.navLinks')
const arrowUp = document.querySelector('.bxs-up-arrow-circle')


const images = [
	'images/foto1.jpeg',
	'images/foto2.jpeg',
	'images/foto3.jpeg',
	'images/foto4.jpeg',
	'images/foto5.jpeg',
	'images/foto6.jpeg',
	'images/foto7.jpeg',
	'images/foto8.jpeg',
	'images/foto9.jpeg',
	'images/foto10.jpeg',
	'images/foto11.jpeg',
	'images/sylwiaSkiba.jpg',
]

const imgSrc = document.querySelector('.photoContainerImg')
let currentIndex = 0

function showNextImage() {
	imgSrc.src = images[currentIndex]
	currentIndex = (currentIndex + 1) % images.length
	setTimeout(showNextImage, 2500)
}

showNextImage()

document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.nav')

	window.addEventListener('scroll', function () {
		if (window.scrollY > navbar.offsetHeight) {
			navbar.classList.add('scrolled')
		} else {
			navbar.classList.remove('scrolled')
		}
	})
})

const scrollUp = () => {
	window.scrollTo(0,0) 
}

const hamburgerActive = () => {
	hamburger.classList.toggle('active')
	mobileMenu.classList.toggle('active')
}


hamburger.addEventListener('click',hamburgerActive)
arrowUp.addEventListener('click',scrollUp)

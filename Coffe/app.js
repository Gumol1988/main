const btnLoop = document.querySelector('.bx-search')
const searchInput = document.querySelector('#searchBox')
const hamburger = document.querySelector('.bx-menu')
const nav = document.querySelector('.nav')
const cart = document.querySelector('.cartContainer')
const cartIcon = document.querySelector('.bx-cart')



const changeActiveCart = () => {
	cart.classList.toggle('active')	
	nav.classList.remove('active')
	searchInput.classList.remove('active')
}

const changeActiveSearch = () => {
	searchInput.classList.toggle('active')
	nav.classList.remove('active')
	cart.classList.remove('active')
}

const changeActiveMobile = params => {
	nav.classList.toggle('active')
	searchInput.classList.remove('active')
	cart.classList.remove('active')
}


cartIcon.addEventListener('click', changeActiveCart)
hamburger.addEventListener('click', changeActiveMobile)
btnLoop.addEventListener('click', changeActiveSearch)

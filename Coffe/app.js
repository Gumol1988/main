const btnLoop = document.querySelector('.bx-search')
const searchInput = document.querySelector('#searchBox')
const hamburger = document.querySelector('.bx-menu')
const nav = document.querySelector('.nav')

const changeActiveSearch = () => {
	searchInput.classList.toggle('active')
	nav.classList.remove('active')
}

const changeActiveMobile = params => {
	nav.classList.toggle('active')
	searchInput.classList.remove('active')
}

hamburger.addEventListener('click', changeActiveMobile)
btnLoop.addEventListener('click', changeActiveSearch)

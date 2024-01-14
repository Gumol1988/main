const btnLoop = document.querySelector('.bx-search')
const searchInput = document.querySelector('#searchBox')
const hamburger = document.querySelector('.bx-menu')
const nav = document.querySelector('.nav')
const cart = document.querySelector('.cartContainer')
const cartIcon = document.querySelector('.bx-cart')
const menuLinks = document.querySelectorAll('.nav a')
const heartIcon = document.querySelectorAll('.bxs-heart')
const arrowUp = document.querySelector('.arrowUp')
const logo = document.querySelector('.logo')
const orderNow = document.querySelector('.btn')
const cartQuantity = document.querySelector('.cartQuantity')

let carts = []

const removeAll = () => {
	nav.classList.remove('active')
	searchInput.classList.remove('active')
	cart.classList.remove('active')
}

const removeActive = () => {
	nav.classList.remove('active')
}

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

const changeActiveMobile = () => {
	nav.classList.toggle('active')
	searchInput.classList.remove('active')
	cart.classList.remove('active')
}

const scroolToUp = () => {
	window.scrollTo({
		top: 0,
		baehavior: 'smooth',
	})
}

/*  RENDER PRODUCTS */

const menuContainer = document.querySelector('.menuContainer')

const renderProducts = () => {
	products.forEach(item => {
		const newProduct = document.createElement('div')
		newProduct.classList.add('menuItem')
		newProduct.dataset.id = item.id
		newProduct.innerHTML = ` <img src="${item.image}">
		<span class="tittleItem">${item.name}</span>
		<div class="starsItem">
			<i class='bx bxs-star'></i>
			<i class='bx bxs-star'></i>
			<i class='bx bxs-star'></i>
			<i class='bx bxs-star'></i>
			<i class='bx bxs-star-half'></i>
		</div>
		<span class="priceItem">${item.price} zł</span>
		<div class="addItem">
			<i class='bx bxs-cart-download'></i>
			<i class='bx bxs-heart' ></i>
		</div>`
		menuContainer.append(newProduct)
	})
}

renderProducts()

menuContainer.addEventListener('click', event => {
	let positionClicked = event.target.closest('.menuItem')
	if (positionClicked && positionClicked.classList.contains('menuItem')) {
		let productId = positionClicked.dataset.id
		addToCart(productId)
	}
})

const addToCart = productId => {
	let positionThisProductInCart = carts.findIndex(value => value.productId == productId)

	if (carts.length <= 0) {
		carts = [
			{
				productId: productId,
				quantity: 1,
			},
		]
	} else if (positionThisProductInCart < 0) {
		carts.push({
			productId: productId,
			quantity: 1,
		})
	} else {
		carts[positionThisProductInCart].quantity += 1
	}
	displayAddCart()
}

const displayAddCart = () => {

	cart.innerHTML = '';
	carts.forEach(item => {
		const cartItem = document.createElement('div')
		 let product = products.find((value) => value.id == item.productId)
	
		 if(product){
			 cartItem.classList.add('cartItem')
			 cartItem.innerHTML = `
			  <img src="${product.image}" alt="">
			 <h1>${product.name}</h1>
			 <p>39zł</p>
			 <div class="quantityBox">
				 <i class='bx bx-plus-circle'></i>
				 <span class="quantityValue">${item.quantity}</span>
				 <i class='bx bx-minus-circle'></i>
			 </div>`
			 cart.append(cartItem)

		 }
	})
}

/*  ACTIVATION ALL FUNCTIONS */

menuLinks.forEach(x => {
	x.addEventListener('click', removeActive)
})

orderNow.addEventListener('click', removeAll)
logo.addEventListener('click', removeAll)
arrowUp.addEventListener('click', scroolToUp)
cartIcon.addEventListener('click', changeActiveCart)
hamburger.addEventListener('click', changeActiveMobile)
btnLoop.addEventListener('click', changeActiveSearch)

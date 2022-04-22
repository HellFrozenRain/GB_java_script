const products = [
    { name: 'rubber', price: 8000, img: 'img/rubber.jfif', quantity: 1, id: 1 },
    { name: 'blade', price: 15000, img: 'img/blade.jfif', quantity: 1, id: 2 },
    { name: 'glue', price: 400, img: 'img/glue.jfif', quantity: 1, id: 3 }
];
let cart = []

const mainElement = document.querySelector('main');
const cartInfoElement = document.querySelector('#cart')



function loadProducts() {
    for (let i = 0; i < 3; i++) {
        cart.push(products[i]);
    }
}

function drawProductCard(products) {
    const cardElement = document.createElement('DIV');
    const imgElement = document.createElement('IMG');
    const titleElement = document.createElement('P');
    const priceElement = document.createElement('p');
    const btnElement = document.createElement('BUTTON');

    cardElement.classList.add('product-card');
    priceElement.classList.add('product-card__price')
    titleElement.classList.add('product-card__title');
    imgElement.classList.add('product-card__img');
    btnElement.classList.add('product-card__button');

    imgElement.setAttribute('src', products.img);
    titleElement.textContent = products.name;
    priceElement.textContent = products.price + 'p';
    btnElement.textContent = 'в корзину';
    btnElement.setAttribute('data-id', products.id)

    cardElement.append(imgElement);
    cardElement.append(titleElement);
    cardElement.append(priceElement);
    cardElement.append(btnElement);

    mainElement.append(cardElement);

}

function drawProducts() {
    for (let product of products) {
        drawProductCard(product);
    }
}

function getCartPrice() {
    let result = 0;
    for (let product of cart) {
        result += product.price * product.quantity;
    }
    return result;
}

// function getCartQuantity() {
//     return cart.reduce(function (acc, product) {
//         return acc + product.quantity;
//     }, 0);
// }
function getCartQuantity() {
    let result = 0;
    for (let product of cart) {
        result += product.quantity;
    }
    return result;
}

function getCartInfo() {
    if (cart.length == 0) {
        return 'Корзина пуста';
    }
    return `в корзине ${getCartQuantity()} товаров на сумму ${getCartPrice()} р`;
}

function drawCartInfo() {
    cartInfoElement.textContent = getCartInfo();
}

function addToCart(id) {
    const existProduct = cart.find(function (product) { return product.id == id });
    if (existProduct) {
        existProduct.quantity++;
        drawCartInfo();
        saveCart();
        return;
    }
    const product = Object.assign({}, products.find(function (product) { return product.id == id }));
    cart.push(product);
    saveCart();
    drawCartInfo();

}

function saveCart() {
    window.localStorage.setItem('userCart', JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(window.localStorage.getItem('userCart')) || [];
}
drawProducts();
drawCartInfo();
// loadCart();

mainElement.addEventListener('click', function (event) {
    if (event.target.tagName == 'BUTTON') {
        addToCart(event.target.dataset.id)
    }
})

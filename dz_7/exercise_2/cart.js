let cart = [];
const mainElement = document.querySelector('main');
const cartInfoElement = document.querySelector('#cart')
const cartBlocks = [
    document.querySelector('#list'),
    document.querySelector('#delivery'),
    document.querySelector('#comment'),

]
cartBlocks[1].textContent = 'Адрес доставки';
cartBlocks[2].textContent = 'Комментарий';

const addressElement = document.createElement('TEXTAREA');
const commentElement = document.createElement('TEXTAREA');

addressElement.classList.add('address');
commentElement.classList.add('comment');


cartBlocks[1].append(addressElement);
cartBlocks[2].append(commentElement);
let currentBlock = 0;


//получение данных из  странницы каталога
function loadCart() {
    cart = JSON.parse(window.localStorage.getItem('userCart')) || [];
}

loadCart();


console.log(cart)
//создание карточек в корзине
function drawProductCard(cart) {
    const cardElement = document.createElement('DIV');
    const imgElement = document.createElement('IMG');
    const titleElement = document.createElement('P');
    const priceElement = document.createElement('p');
    const quantityElement = document.createElement('p');
    const addElement = document.createElement('BUTTON');
    const removeElement = document.createElement('BUTTON');

    cardElement.classList.add('product-card');
    priceElement.classList.add('product-card__price')
    titleElement.classList.add('product-card__title');
    imgElement.classList.add('product-card__img');
    addElement.classList.add('product-card__button');
    addElement.classList.add('plus');
    removeElement.classList.add('product-card__button');
    removeElement.classList.add('minus');
    cardElement.classList.add(`${cart.id}`)

    imgElement.setAttribute('src', cart.img);
    titleElement.textContent = cart.name;
    priceElement.textContent = cart.price + 'p';
    addElement.textContent = 'Добавить';
    addElement.setAttribute('data-id', cart.id)
    removeElement.textContent = 'Удалить';
    removeElement.setAttribute('data-id', cart.id);


    cardElement.append(imgElement);
    cardElement.append(titleElement);
    cardElement.append(priceElement);

    cardElement.append(addElement);
    cardElement.append(removeElement);

    // mainElement.append(cardElement);
    cartBlocks[0].append(cardElement)

}

function drawProducts() {
    for (let product of cart) {
        drawProductCard(product);
    }
}
// функция расчета цены в корзине
function getCartPrice() {
    let result = 0;
    for (let product of cart) {
        result += product.price * product.quantity;
    }
    return result;
}
// функция расчета количества товаров в корзине

function getCartQuantity() {
    let result = 0;
    for (let product of cart) {
        result += product.quantity;
    }
    return result;
}

// получение информации о составе корзины
function getCartInfo() {
    if (cart.length == 0) {
        return 'Корзина пуста';
    }
    return `в корзине ${getCartQuantity()} товаров на сумму ${getCartPrice()} р`;
}

// функция вывода состава корзины
function drawCartInfo() {
    cartInfoElement.textContent = getCartInfo();
}

drawProducts();
drawCartInfo();

//функция удаления товара из корзины
function addToCart(id) {
    const existProduct = cart.find(function (product) { return product.id == id });
    existProduct.quantity++;
    drawCartInfo();
    return console.log('добавлено в корзину');
}


//функия добавления товара в корзину
function removefromCart(id) {
    const existProduct = cart.find(function (product) { return product.id == id });
    if (existProduct.quantity >= 1) {
        existProduct.quantity--;
        drawCartInfo();
    }
    if (existProduct.quantity == 0) {
        drawCartInfo();
        return -1;

    }

}
// добавление токара в корзину
mainElement.addEventListener('click', function (event) {
    if (event.target.classList.contains('plus')) {
        addToCart(event.target.dataset.id);
    }
})

//удаление товара из корзины
mainElement.addEventListener('click', function (event) {
    let a;
    if (event.target.classList.contains('minus')) {
        a = removefromCart(event.target.dataset.id);
    }
    if (a == -1) {
        console.log('ok')
        event.target.closest('.product-card').remove();
    }
})



function nextBlock() {
    cartBlocks[currentBlock % 3].style.display = 'none';
    currentBlock++;
    cartBlocks[currentBlock % 3].style.display = 'flex';
}

document.querySelector('#nextButton').addEventListener('click', () => {
    nextBlock();
})
const mainElement = document.querySelector('main');
const basket = [];
let basketElement = document.querySelector('#basket');
basketElement.textContent = 'корзина пуста';

const product = [
    { name: 'rubber', price: 8000, img: 'image/rubber.jfif' },
    { name: 'blade', price: 15000, img: 'image/blade.jfif' },
    { name: 'glue', price: 400, img: 'image/glue.jfif' }
];


function countBasketPrice(array) {
    let result = 0;
    let result2 = array.length;
    for (let i = 0; i < array.length; i++) {
        result = array[i].price + result;
    }
    basketElement.textContent = `В корзине ${result2} товаров на ${result} рублей`;
}

function drawProductCard(product) {
    const cardElement = document.createElement('DIV');
    const priceElement = document.createElement('P');
    const titleElement = document.createElement('P');
    const imgElement = document.createElement('IMG');
    const buttonElement = document.createElement('BUTTON');


    cardElement.classList.add('product-card');
    priceElement.classList.add('product-card__price')
    titleElement.classList.add('product-card__title');
    imgElement.classList.add('product-card__img');
    buttonElement.classList.add('product-card__btn');

    imgElement.setAttribute('src', product.img);
    titleElement.textContent = product.name;
    priceElement.textContent = product.price + 'p';
    buttonElement.textContent = 'в корзину';
    buttonElement.addEventListener('click', function () {
        basket.push(product);
        countBasketPrice(basket);
    })
    cardElement.append(imgElement);
    cardElement.append(titleElement);
    cardElement.append(priceElement);
    cardElement.append(buttonElement);

    mainElement.append(cardElement);
}

function drawProducts() {
    for (let j = 0; j < product.length; j++) {
        drawProductCard(product[j]);
    }
}
drawProducts();
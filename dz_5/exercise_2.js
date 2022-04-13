// Сделать генерацию корзины динамической: верстка корзины не должна находиться в
// HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
// сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей»

let basketElement = document.getElementById('basket');

// const basket = [];
const basket = [
    { name: 'rubber', price: 8000, quantity: 2 },
    { name: 'blade', price: 15000, quantity: 1 },
    { name: 'glue', price: 400, quantity: 1 }
];

function countBasketPrice(array) {
    let result = 0;
    let result2 = array.length;
    for (let i = 0; i < array.length; i++) {
        result = (array[i].price) * (array[i].quantity) + result;
    }
    return [result, result2];
}
let myList = countBasketPrice(basket);

basketElement.innerHTML = basket.length > 0 ? `В корзине ${myList[1]} товаров на ${myList[0]} рублей` : 'Корзина пуста';

// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
// объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const basket = [
    { name: 'rubber', price: 8000, quantity: 2 },
    { name: 'blade', price: 15000, quantity: 1 },
    { name: 'glue', price: 400, quantity: 1 }
];

function countBasketPrice(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = (array[i].price) * (array[i].quantity) + result;
    }
    return `basket total price: ${result}`;
}
console.log(countBasketPrice(basket));
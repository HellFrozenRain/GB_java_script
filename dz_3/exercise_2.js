// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
// сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


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

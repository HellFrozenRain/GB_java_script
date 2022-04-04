// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
// ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью console.log и вернуть пустой объект.

'use strict';
function transfer(number) {
    let result = {};
    if (number >= 0 && number < 1000) {
        let units = 'единицы';
        let dozens = 'десятки';
        let hundreds = 'сотни';
        result[units] = parseInt(number % 10);
        result[dozens] = parseInt((number / 10) % 10);
        result[hundreds] = parseInt(number / 100);
        return result;
    }
    console.log('введите число от 0 до 1000');
    return result;
}
console.log(transfer(756));
console.log(transfer(706));
console.log(transfer(56));
console.log(transfer(0));
console.log(transfer(1000));
console.log(transfer(-756));
console.log(transfer(345.123));
console.log(typeof (transfer(756)));
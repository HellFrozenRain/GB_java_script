// 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
var a = 5;
var b = 7
function addition(number_1, number_2) {
    return `addition = ${number_1 + number_2}`;
}
function substraction(number_1, number_2) {
    return `substraction = ${number_1 - number_2}`;
}
function multiplication(number_1, number_2) {
    return `multiplication = ${number_1 * number_2}`;
}
function division(number_1, number_2) {
    return `division = ${number_1 / number_2}`
}
console.log(addition(a, b));
console.log(substraction(a, b));
console.log(multiplication(a, b));
console.log(division(a, b));
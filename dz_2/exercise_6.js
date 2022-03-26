// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
// зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
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
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case operation = '+':
            console.log(addition(arg1, arg2));
            break;
        case operation = '-':
            console.log(substraction(arg1, arg2));
            break;
        case operation = '*':
            console.log(multiplication(arg1, arg2));
            break;
        case operation = '/':
            console.log(division(arg1, arg2));
            break;
    }
}
mathOperation(6, 7, '+');
mathOperation(6, 7, '-');
mathOperation(6, 7, '*');
mathOperation(6, 7, '/');
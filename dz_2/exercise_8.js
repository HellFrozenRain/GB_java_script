// 8. С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
// power(val, pow), где val — заданное число, pow –— степень.
function power(val, pow) {
    if (val == 0) {
        return 0;
    }
    else if (pow == 0) {
        return 1
    }
    else if (pow > 0) {
        return val * power(val, pow - 1);
    }
    else {
        return 1 / (val * power(val, -pow - 1))
    }
}
console.log(power(0, 5));
console.log(power(0, -5));
console.log(power(1, 5));
console.log(power(1, -5));
console.log(power(2, 5));
console.log(power(2, -5));
console.log(power(-2, 5));
console.log(power(-2, -5));
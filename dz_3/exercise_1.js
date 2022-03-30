//1. С помощью цикла While вывести все простые числа от 0 до 100.
let number = 0;
while (number <= 100) {

    let divisor = 2;
    while (divisor < number) {
        if (number % divisor === 0) {
            //console.log(`${number} сложное число`);
            break;
        }
        divisor++;
    }
    if (divisor === number) {
        console.log(`${number} - простое число`);
    }
    number++;
}
//решето эратосфена
// let my_list = [];
// let number = 100;
// for (let _ = 0; _ < number; _++) {
//     my_list[_] = 0;
// }
// for (let i = 2; i * i < number; ++i) {
//     for (k = i * i; k < number; k += i) {
//         my_list[k] = 1;
//     }
// }
// for (let el = 2; el < number; ++el) {
//     if (my_list[el] === 0) {
//         console.log(el);
//     }
// }
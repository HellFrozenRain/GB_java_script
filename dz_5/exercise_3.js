// 3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
// a. Создать массив товаров (сущность Product);
// b. При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид
// каталога генерируется JS.

const product = [
    { name: 'rubber', price: 8000, quantity: 8 },
    { name: 'blade', price: 15000, quantity: 10 },
    { name: 'glue', price: 400, quantity: 7 }
];

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
catalog.append(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.textContent = 'Name'
let heading_2 = document.createElement('th');
heading_2.textContent = 'Price'
let heading_3 = document.createElement('th');
heading_3.textContent = 'Quantity'

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1)

for (let j = 0; j < product.length; j++) {
    let string = document.createElement('tr');
    let productName = product[j].name;
    let productPrice = product[j].price;
    let productQuantity = product[j].quantity;
    let myList = [productName, productPrice, productQuantity];
    console.log(myList);
    for (let i = 0; i < myList.length; i++) {
        data = document.createElement('td');
        data.textContent = `${myList[i]}`;
        string.appendChild(data);
        tbody.appendChild(string);
    }
}
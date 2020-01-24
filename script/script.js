let myVar; // Объявление переменной

//  Примитивные типы данных //
myVar = 10;
console.log(typeof myVar);

myVar = 'My variant';
console.log(typeof myVar);

myVar = true;
console.log(typeof myVar);

myVar = null;
console.log(typeof myVar);

myVar = undefined;
console.log(typeof myVar);

myVar = Symbol();
console.log(typeof myVar);

// Тип данных Oblect
// myVar = {};


// Объектные типы данных
// let myArr = []; //Массив
// let regExp = /w+/g; // Регулярные выражения
// let func = function(){}; // Функции
// let error = Error('Error message'); // Ошибки
// let date = Date(); // Дата

// let arr = [1, 2, 3, 5, 7, 9];
// alert('myArr [5] = ' + arr[5]);

// let myTrue = true;
// let myFalse = false;

// console.log(myTrue || true);
// console.log(myTrue || false);
// console.log(myFalse || false);

// console.log(myTrue && true);
// console.log(myTrue && false);
// console.log(myFalse && false);

// Присваивание
// let n = 15;
// // n = n + 3;
// n += 3;
// console.log('n = ', n);
// // n = n - 6;
// n -= 6;
// console.log('n = ', n);
// // n = n / 3;
// n /= 3;
// console.log('n = ', n);

// Операторы сравнения
// console.log(3 > 2);
// console.log(3 < 2);
// console.log(5 >= 3);
// console.log(10 <= 3);
// console.log(5 === 5);
// console.log(5 !== 6);
// console.log(5 == '5');
// console.log(5 !== '5');
// console.log(5 != '5');

console.log(Math.pow(5, 3));

console.log(5 ** 4);

// Новый оператор возведения в степень
let x = Math.pow(5, 3); // старый
let y = 5 ** 3;         // новый
console.log(x === y);

// проверка на целое число

console.log(Number.isInteger(5));
console.log(Number.isInteger(5.6));
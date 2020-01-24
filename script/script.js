// STRING///////////////////////////////////////////

// let myStr = '\t "Hello" my \n friends';
// console.log(myStr);
// let myStr2 = '\t Hello "my" \n \t friends';
// console.log(myStr2);
// let myStr3 = 'Hello my \n \t "friends"';
// console.log(myStr3);


//МЕТОДЫ И СВОЙСТВА//////////////////////////////////////

let str = 'Hello My Friends!';
console.log('В строке ' + str.length + ' символов');
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// console.log(str.charAt(0));
// console.log(str.charAt(16));

console.log(str[16]);

console.log(str.substring(6)); // с 6-го символа
console.log(str.substring(9, 14)); // с 9-го по 14-й
console.log(str.slice(11)); // с 11-го символа до конца
console.log(str.slice(-10)); // 10 символов с конца
console.log(str.substr(3, 8)); // с какого символа, сколько знаков

console.log(str.indexOf('Friends')); // возвращает индекс первой буквы слова

console.log(str.indexOf('d')); // индекс символа (ближайший)

console.log(str.replace('Friends', 'Slaves')); // Меняет строку

console.log(str.split(' '));

let myStr = 'apple, kiwi, orange, cherry';
console.log(myStr.split(', '));
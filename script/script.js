let money = 150000;
let income = 'шантаж, вымогательство, разбой';
let addExpenses = 'секс, наркотики, рок-н-ролл';
let deposit = 4 > 3;
// console.log(deposit);
let mission = 1000000;
let period = 12;

console.log(typeof money, typeof income, typeof deposit);

console.log('Длина строки составляет ' + 
addExpenses.length + ' символов');

console.log('Период равен ' + period + ' месяцев');
console.log('Цель - заработать ' + mission + ' долларов');

console.log(addExpenses.toUpperCase(), addExpenses.split(', '));
console.log(addExpenses.split(''));
let budgetDay;
budgetDay = money / 30;
console.log('Предпочтительный доход - ' + budgetDay + 
' рублей в месяц');
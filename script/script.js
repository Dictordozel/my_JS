let money = +prompt('Ваш месячный доход?');
let mission = 150000;
let period = 6;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = parseInt(prompt('Во сколько это обойдется?'));
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = parseInt(prompt('Во сколько это обойдется?'));

let budgetMonth = (money - (amount1 + amount2));

let source = Math.ceil(mission / budgetMonth);

let budgetDay = Math.floor(budgetMonth / 30);


console.log(typeof money, typeof income, typeof deposit);
console.log('Длина строки составляет ' + 
addExpenses.length + ' символов');
console.log('Период равен ' + period + ' месяцев');
console.log('Цель - заработать ' + mission + ' рублей');

console.log(addExpenses.split(', '));

console.log('Бюджет на месяц ' + budgetMonth);
console.log('Вам понадобится ' + source + ' месяцев');
console.log('Бюджет на день ' + budgetDay + 
' рублей');


if(budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
}   else if((budgetDay < 1200) && (budgetDay > 600)) {
    console.log('У вас средний уровень дохода');
}   else if((budgetDay > 0) && (budgetDay < 600)) {
    console.log('К сожалению вы - нищеброд');
}   else {
    console.log('Что-то пошло не так');
}
let money = +prompt('Ваш месячный доход?', 50000);
let mission = 150000;
let period = 6;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'одежда, проезд, досуг, питание');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов', 'квартплата');
let amount1 = parseInt(prompt('Во сколько это обойдется?', 10000));
let expenses2 = prompt('Введите обязательную статью расходов', 'алименты');
let amount2 = parseInt(prompt('Во сколько это обойдется?', 10000));


console.log(typeof money, typeof income, typeof deposit);
console.log('Длина строки составляет ' + addExpenses.length + ' символов');
console.log('Период равен ' + period + ' месяцев');
console.log('Цель - заработать ' + mission + ' рублей');
console.log(addExpenses.split(', '));


function getExpensesMonth() {
    return amount1 + amount2;
} 

function getAccumulatedMonth() {
    return money - getExpensesMonth();
}
let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    return mission / accumulatedMonth;
}

let source = Math.ceil(getTargetMonth());

console.log('Вам понадобится ' + source + ' месяцев');
console.log('Бюджет на месяц ' + accumulatedMonth);

function getbudgetDay() {
    return Math.floor(accumulatedMonth / 30);
}

let budgetDay = getbudgetDay();

console.log('Бюджет на день ' + budgetDay + ' рублей');


function getStatusIncome() {
    if(budgetDay > 1200) {
        return('У вас высокий уровень дохода');
    }   else if((budgetDay < 1200) && (budgetDay > 600)) {
        return('У вас средний уровень дохода');
    }   else if((budgetDay > 0) && (budgetDay < 600)) {
        return('К сожалению вы - нищеброд');
    }   else {
        return('Что-то пошло не так');
    }
}

console.log(getStatusIncome());





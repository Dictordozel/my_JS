let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n); 
};

let money;

let start = function() {
    
    do {
    money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
};
start();

let mission = 150000;
let period = 6;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses = [];



console.log(typeof money, typeof income, typeof deposit);
console.log('Длина строки составляет ' + addExpenses.length + ' символов');
console.log('Период равен ' + period + ' месяцев');
console.log('Цель - заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));



let getExpensesAmount = function() {
    
    let sum = 0;
    let q;

    for(let i = 0; i < 3; i++) {

        expenses = prompt('Введите обязательную статью расходов');

        do {
        q = prompt('Во сколько это обойдется?');
        }
        while (!isNumber(q));
        sum += +q;
        
         
    }
        
        
    console.log(expenses);
    return sum;

};

let expensesAmount = getExpensesAmount();

console.log('Расходы за месяц:' + expensesAmount);

let getAccumulatedMonth = function() {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
    return mission / accumulatedMonth;
    
};

let source = function() {
    return Math.ceil(getTargetMonth());
};

let budgetDay = function() {
    return Math.floor(accumulatedMonth / 30);
};

if(source() < 0) {
    console.log('Цель не будет достигнута');
} else {
console.log('Вам понадобится ' + source() + ' месяцев');
}

console.log('Бюджет на месяц ' + accumulatedMonth);
console.log('Бюджет на день ' + budgetDay() + ' рублей');


let getStatusIncome = function() {
    if(budgetDay() > 1200) {
        return('У вас высокий уровень дохода');
    }   else if((budgetDay() < 1200) && (budgetDay() > 600)) {
        return('У вас средний уровень дохода');
    }   else if((budgetDay() > 0) && (budgetDay() < 600)) {
        return('К сожалению вы - нищеброд');
    }   else {
        return('Что-то пошло не так');
    }
};

console.log(getStatusIncome());
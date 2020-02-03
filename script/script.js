///////////////////////////// Проверка на число   /////////////////////////////

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n); 
};

///////////////////////////////////////////////////////////////////////////////


let money;

let start = function() {
    
    do {
    money = prompt('Ваш месячный доход?', 50000); // удалить ,50000
    }
    while (!isNumber(money));
};
start();


// OBJECT //////////////////////////////////////////////////////////////////////////

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 150000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {

        if(confirm('Есть ли у вас дополнителный источник заработка?')) {

            let itemIncome, wtf;

            do {
                wtf = prompt('Какой у вас дополнительный заработок?', 'Пеку булки');
                }
                while (isNumber(wtf)); 
                appData.income[itemIncome] = wtf;

            let cashIncome, howMonth;
            do {
            howMonth = prompt('Сколько вы зарабатываете на этом в месяц? ', '15000');
        }
            while (!isNumber(howMonth)); 
                appData.income[cashIncome] = howMonth;

        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////


        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'проезд, кино, мороженое'); // удалить , 'проезд', 'кино', 'мороженое' 

        appData.addExpenses = addExpenses.toLowerCase().trim().split(', ');
        
        //console.log(appData.addExpenses);
        //console.log(typeof appData.addExpenses);


        



        for(let item of appData.addExpenses) {
            newItem = item.toUpperCase(); 
        }
        console.log(newItem);

      
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        
        for(let i = 0; i < 2; i++) {

            let title = prompt('Введите обязательную статью расходов');
            
            let howMach;
            do {
            howMach = prompt('Во сколько это обойдется?');
            }
            while (!isNumber(howMach)); 
            appData.expenses[title] = howMach; 
        }
    },


    getBuget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function() {

        let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);

        if(targetMonth <= 0) {
            console.log('Цель не будет достигнута');
        } else {
            console.log('Вам понадобится ' + targetMonth + ' месяцев');
        }
        
          
    },

    getStatusIncome: function() {
        if(appData.budgetDay > 1200) {
            console.log('У вас высокий уровень дохода');
        }   else if((appData.budgetDay < 1200) && (appData.budgetDay > 600)) {
            console.log('У вас средний уровень дохода');
        }   else if((appData.budgetDay > 0) && (appData.budgetDay < 600)) {
            console.log('Вы там держитесь! Всего вам хорошего!');
        }   else {
            console.log('Что-то пошло не так');
        }
    },

    getExpensesMonth: function() {
    
        for(let key in appData.expenses) {
        console.log(appData.expenses[key]);
        appData.expensesMonth += +appData.expenses[key];     
        }
        console.log('Расходы за месяц:' + appData.expensesMonth);

    },

    getInfoDeposit: function() {
        if(appData.deposit) {
            
            let yearPercent;

            do {
            yearPercent = prompt('Какой годовой процент вашего депозита?', '10');
        }
            while (!isNumber(yearPercent));
            appData.percentDeposit = yearPercent;
            
            
            let depositSum;
            
            do {
                depositSum = prompt('Какая сумма депозита?', '15000');
        }
            while (!isNumber(depositSum));
            appData.moneyDeposit = depositSum;
        }
    },

    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }

    

};



appData.asking();
appData.getInfoDeposit();
appData.getExpensesMonth();
appData.getBuget();
appData.getStatusIncome();
appData.getTargetMonth();



for(let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}


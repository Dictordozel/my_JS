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
    mission: 150000,
    period: 0,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'проезд, кино, мороженое'); // удалить , 'проезд', 'кино', 'мороженое' 
        
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        
        appData.deposit = confirm('Есть ли у вас депозит в банке?');


        for(let i = 0; i < 3; i++) {

            let title = prompt('Введите обязательную статью расходов');
            appData.expenses[title] = prompt('Во сколько это обойдется?', 10000); // удалить ,10000 
        }

        
        // for(let i = 0; i < 3; i++) {

        //     let title = prompt('Введите обязательную статью расходов');
            
        //     let q;

        //     do {
        //     q = prompt('Во сколько это обойдется?', 10000); // удалить ,10000
        //     }
        //     while (!isNumber(q)); 
        //     appData.expenses[title] += +q; 
        // }
    },

//////////////////////////////////////////////////////////////////

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
    }

};

appData.asking();
appData.getExpensesMonth();
appData.getBuget();
appData.getStatusIncome();
appData.getTargetMonth();
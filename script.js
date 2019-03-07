let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц", '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц", '');
  }
}
start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true
};



function chooseExpenses() {

  for (let i = 0; i < 2; i++) {
    let a = prompt("Ведите обязательно статью расходов в этом месяце", ''),
      b = prompt("Во сколько обойдется?", '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
      a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}
chooseExpenses();

//----------------------1 пункт---------------------------------------------------------
function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
 alert("Ежедневный бюджет: " + appData.moneyPerDay); 
}
detectDayBudget();
//----------------------2 пункт ----------------------------------------------------------
function detectLevel() {

  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень доставка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt("Под какой процент?" , '');
      
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
  }
}
checkSavings();


///------------------------ 3 пункт   ------------------------------------------------------
function chooseOptExpenses() {

  let one = prompt('Статья необязательных расходов?', '1 вопрос');
  let two = prompt('Статья необязательных расходов?', '2 вопрос');
  let three = prompt('Статья необязательных расходов?', '3 вопрос'); {
    appData.optionalExpenses[1] = one;
    appData.optionalExpenses[2] = two;
    appData.optionalExpenses[3] = three;
  }
  
  console.log(appData.optionalExpenses);
  
  }
  chooseOptExpenses();

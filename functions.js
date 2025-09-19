//ОСНОВНЫЕ СПОСОБЫ ОБЪЯВЛЕНИЯ ФУНКЦИЙ

console.log("---1. Function declaration---");

//можно вызывать до объявления,
//так как оно "поднимается" hoisting в начало области видимости
console.log(sum(5,3));

function  sum(a, b) {
return a + b;
}

console.log("---2. Function Expression---");

//нельзя вызывать до объявления.
//Функция создается, когда до этого места доходит обработчик кода

//console.log(sumExpression(15,15)); //так делать нельзя!!!!

const sumExpression = function (a,b) {
    return a + b;
    

console.log(sumExpression(9,15));
console.log(sumExpression(15,15));


console.log("---3. Arrow Function (Стрелочная функция)---");

//функция также не "поднимается"
//главная особенность - не имеет своего контекста "this"
const sumArrow = (a,b) => {
    return a + b;
    };

    //короткий синтаксис 

    const multiply = (a,b => a * b);

    console.log(sumArrow(9,8));
     console.log(multiply(9,8));
     
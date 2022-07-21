// Задание 3.
// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает 
// число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.


// Первый вариант решения:
// function func1(a=0) {
//     return function (b=0) {return a+b;}
// }     
// const firstStep = func1(5);
// const sum = firstStep(3); 
// console.log(sum);


// Второй вариант решения:
const sum = function func1(a=0) {
    return function (b=0) {return a+b;}
} 
    
const rez = sum(3)(5);
console.log(rez);
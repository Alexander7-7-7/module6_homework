// Задание 1.
// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в 
// массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, 
// но и, например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное 
// название, вызовите функцию, проанализируйте синтаксис.


function oddEvenNumbers () {

let Input;
let odd=0;
let even=0;
let zeRo=0;
let newArray = [];

while (true) 
{
Input= prompt('Введите по отдельности массив чисел. Чтобы выйти нажмите "Esc.":');
if (Input === null) { document.write("Программа остановлена"); break;}

if (Input !== null && !isNaN(+Input) && Input !='' &&  Input.indexOf(' ') === -1) 
{
newArray.push(+Input); 
if (+Input % 2 === 0 && +Input !== 0) {even++} 
else if(+Input !== 0) {odd++} 
else (zeRo++);
} else {console.log(` ${Input} не число! Введите другое значение`);}
}

console.log(`Ваш введенный массив: ${newArray}`);
console.log(`Нечетных чисел: ${odd}`);
console.log(`Четных чисел: ${even}`);
console.log(`Нулей: ${zeRo}`);
};

oddEvenNumbers ();
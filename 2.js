// Задание 2.
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, 
// является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится 
// сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.



let y;
let Input;

while (true) 
{
Input = prompt('Введите число. Чтобы выйти нажмите "Esc."');

if ( Input === null ) { document.write("Программа остановлена"); break;}
else if( +Input === 1 ) { console.log("Вы ввели 1! Введите другое значение!");}
else if( +Input === 0 ) { console.log("Вы ввели 0! Введите другое значение!");}
else if( +Input > 1000 ) { console.log("Данные не верны - введите число меньше 1 000!");} 
else if (Input !== null && !isNaN(+Input) && Input !='' &&  Input.indexOf(' ') === -1) {SimpleNumbersDetector(+Input);}
}

function SimpleNumbersDetector(a) {

    for (let i=2; i<=+Input; i++) {   
        if( +Input !== i && +Input % i  === 0 ) {  y = false; } 
    }
    if( y === false) {console.log(`Число ${+Input} не простоe`)} else {console.log(`Число ${+Input} простое`)}
    y=0;

}
    



// Задание 4.
// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, 
// начиная от первого и заканчивая вторым. Используйте setInterval.
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
// начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).




let x= getNumbers('первое (наименьшее)');
const y= getNumbers('второе (наибольшее)');

     
   const myInterval = setInterval( function () {

                                    if (x>y) { clearInterval(myInterval);} 
                                    else {
                                      console.log(x);
                                      x++;}
}, 1000);    

function getNumbers(string) {
    while (true) 
    {
    Input= prompt(`Введите ${string} число последовательности. Чтобы выйти нажмите "Esc."`);
    if (Input === null) { document.write("Программа остановлена"); break;}
    
    if (Input !== null && !isNaN(+Input) && Input !='' &&  Input.indexOf(' ') === -1) 
    { 
        return(+Input); 
    
    } else {console.log(` ${Input} не число! Введите другое значение`);}
    }
}    



// ПРАКТИКА ( ЧАСТЬ 1)

//1.Получить два числа (через prompt), вывести в консоль большее из них. 
/*
let Num = prompt('Введтие число');

let Num2=prompt('Введите второе число');
if (Num>Num2){
console.log(Num);
} else {
console.log(Num2);
}

//2.Получить два числа, вывести в консоль знак их произведения.

let Num = prompt('Введтие число');
let Num2=prompt('Введите второе число');

console.log(Num*Num2);

//3.Получить три числа, вывести их в консоль в порядке возрастания.
console.log('hello')
let one = prompt('Введтие число');
let two =prompt('Введите второе число');
let three =prompt('Введите третье число');

if (one < two && one < three ){//ДОДЕЛАТЬ----------------
     if (two < three){
          console.log( one, two, three);
    } else {
     	console.log( one, three, two); }
}  
if ( two < one && two < three) {
       if (one< three) {
     	console.log (two, one, three);
     }
      else {console.log (two, three, one); }
}
   if ( three < one && three < two) {
     if ( one < two) {
     	console.log(three, one, two)
     } else {
     	console.log(three, two, one)}    
   }


//4.Переписать задачу 1, заменив if на тернарный оператор.

let one = prompt('Введтие число');
let two =prompt('Введите второе число');
let three =prompt('Введите третье число');

if (one < two && one < three ){//ДОДЕЛАТЬ----------------
     (two < three) ? ( console.log( one, two, three)) : (console.log( one, three, two));
}  
if ( two < one && two < three) {
       (one< three) ? (console.log (two, one, three)) : (console.log (two, three, one)); 
}
   if ( three < one && three < two) {
     ( one < two) ? (console.log(three, one, two)) : (console.log(three, two, one)); }    
 

//5.Получить число. Используя switch, вывести в консоль сообщение: для чисел от 1 до 5 – разные, для остальных – одинаковое.

let Num = prompt('Введите число!')

switch(Num){
case '1':
case '2':
case '3':
case '4':
case '5':
console.log('Это число меньше или равно 5');
break;
default:
console.log('Это число больше 5'); 


// ПРАКТИКА ( ЧАСТЬ 2 )

//1.Во всех задачах x – число, заданное пользователем.
//Вывести в консоль все простые числа от 2 до x.

let x = prompt('Введите число !')
   for ( let i=2; i<=x; i++) {
   	console.log(i);
   }

//2.Вывести в консоль все чётные числа от x до 0 (в порядке убывания). 

let x = prompt('Введите число !');
let result =' '
for ( let i=x; i>=0; i--) {
	result = result + i +' ';
}
console.log(result);

//3.Переписать задачу 1 или задачу 2, используя while вместо for (или наоборот, если использовали while).
*/
let i=0;
let x = prompt('Введите число !');
   while (i<=x) {
    i++;
   	console.log(i);
   }
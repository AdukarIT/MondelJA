/*
ЗАДАЧА 1
В доме 5 подъездов по 20 квартир каждый. 
Получите от пользователя номер квартиры и
взамен выдайте в консоль номер подъезда.
Учитывайте, что пользователь может ввести ч
исло меньше 1 или больше 100. 

РЕШЕНИЕ

*

let user_otvet = prompt('Введите номер вашей квартиры'); //исполнено через if

if (user_otvet>=1 && user_otvet<=20) {
   alert(program_otvet='Номер вашего подъезда -1');
}

if (user_otvet>20 && user_otvet<=40) {
   alert ('Номер вашего подъезда -2');
    }

if (user_otvet>40 && user_otvet<=60) {
   alert ('Номер вашего подъезда -3');
    }

if (user_otvet>60 && user_otvet<=80) {
   alert ('Номер вашего подъезда -4');
    }

if (user_otvet>80 && user_otvet<=100) {
   alert ('Номер вашего подъезда -5');
    }

else {
	alert('Уточните адрес! В этом доме нет такой квартиры!')
}

/*
ЗАДАЧА 2

Получите от пользователя строку с названием марки автомобиля.
Напишите конструкцию switch/case, 
которая будет обрабатывать 6-7 самых известных марок (BMW, Ford, Peugeot etc.)
и выдавать в консоль введённую строку + страну происхождения автомобиля
(например, "Ford – страна происхождения США").
Для остальных строк выдавайте сообщение 
"some_input – страна происхождения неизвестна".

РЕШЕНИЕ

*

let user_otvet2 = prompt('Введите марку вашего автомобиля');

 switch(user_otvet2) {
 case 'BMW':
    alert('страна производитель '+ (user_otvet2) + ' - ГЕРМАНИЯ');
    break;
  case 'Ford':
    alert('страна производитель '+ (user_otvet2) + ' - США');
    break;
  case 'Peugeot':
  alert('страна производитель '+ (user_otvet2) + ' - ФРАНЦИЯ');
    break;
  case 'Toyota':
  alert('страна производитель '+ (user_otvet2) + ' - ЯПОНИЯ');
    break;
  case 'Skoda':
    alert('страна производитель '+ (user_otvet2) + ' - ЧЕХИЯ');
    break;
 case 'Renault':
    alert('страна производитель '+ (user_otvet2) + ' - ФРАНЦИЯ');
    break;
   default: 
   alert('Cтрана производитель этой марки неизвестна!');
}
/*
ЗАДАЧА 3

Пользователь вводит год. Определите, является ли этот год високосным.
*/

let user_otvet_year=prompt('Введите год');

for (i=1900;i<=2020;i+=4)
{
	if (user_otvet_year=i) {
    console.log('Это високосный год!');
  }
else {
  console.log('Это невисокосный год!');
}
}


/*ЗАДАЧА 4

Пользователь вводит число от 1 до 20. 
Выведите в консоль таблицу умножения этого числа. 
Например, для числа 7: 7x1=7 7x2=14 ... 7x10=70

РЕШЕНИЕ

*

let user_otvet4 = prompt('Введите число от 1 до 20');

if (user_otvet4>=1 && user_otvet4<=20) {
   console.log (user_otvet4+ '*1 ='+user_otvet4*1);
   console.log (user_otvet4+ '*2 ='+user_otvet4*2);
   console.log (user_otvet4+ '*3 ='+user_otvet4*3);
   console.log (user_otvet4+ '*4 ='+user_otvet4*4);
   console.log (user_otvet4+ '*5 ='+user_otvet4*5);
   console.log (user_otvet4+ '*6 ='+user_otvet4*6);
   console.log (user_otvet4+ '*7 ='+user_otvet4*7);
   console.log (user_otvet4+ '*8 ='+user_otvet4*8);
   console.log (user_otvet4+ '*9 ='+user_otvet4*9);
   console.log (user_otvet4+ '*10 ='+user_otvet4*10);
}
else {
   alert ('Введите число от 1-20');
} 

/*
ЗАДАЧА 5 
Выведите в консоль сумму всех нечётных чисел от 1 до 50. 
Дополнительно: решите эту задачу, используя оператор continue.

РЕШЕНИЕ

*

let result=0;   //примеч. после каждого цикла i меняется в формуле result+i
               //и прибавляется к предыдущему значению result (накопление в массиве) *
for ( let i=1; i<=50; i+=2)
    {
	result=result+i; 
	}
console.log (result); 

/*
ЗАДАЧА 6

Используя циклы, выведите в консоль первые 15 чисел Фибоначчи.

РЕШЕНИЕ 
*

let n = 15; // Сколько элементов хотим получить
let fibonach = [0, 1]; // Первые два элемента последовательности Фибоначчи

for (i = 2; i < n; i ++) { // Получаем i-й элемент последовательности как сумму предыдущих двух
  fibonach[i] = fibonach[i-1] + fibonach[i-2];
}

console.log(fibonach.slice(0,n));// slice отрезает от массива первые n элементов, если n < 2

/* ЗАДАЧА 7

Используя циклы (и операцию конкатенации), 
выведите в консоль "шахматную доску":

РЕШЕНИЕ 

*
for (let i=1; i<=8; i++) {
if ( i % 2){
	console.log (' # # # #');
}
else{
	console.log ('# # # # ')
}
}

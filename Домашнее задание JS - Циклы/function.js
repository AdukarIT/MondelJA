
/* ЗАДАЧА 1
Создайте функцию, которая получает в
 качестве аргументов три числа и 
 возвращает наименьшее из них. 

function firstTask (a,b,c) {
	if (a<b && a<c) {
	return a;
} 
    if (b<a && b<c)
{return b;}

if (c<a && c<b) {
	return c;
}

}
console.log(firstTask (3,2,1));

ЗАДАЧА 2

Создайте функцию, которая получает в 
качестве аргументов значения суток, часов и минут,
а возвращает соответствующее им количество секунд.



function firstTask (sut, hour,min) {

{   
let sumSut=sut*24*60*60;
let sumHour =hour*60*60;
let sumMin =min*60;
let allTime = sumSut+sumHour+sumMin;
  return allTime;
    } }
console.log(firstTask(2,3,3));

Способ 2:

function firstTask (sut, hour,min) {

let allTime = sut*24*60*60+hour*60*60+min*60;
  return allTime;
    } 
console.log(firstTask(2,2,3));

ЗАДАЧАА 3 - Напишите рекурсивную функцию для подсчёта факториала числа.

function f(n) {
  if (n === 1) return 1;
  return n * f(n - 1);
}
console.log (f(4));

ЗАДАЧА 4

Напишите рекурсивную функцию,
 которая разворачивает введённое число задом наперёд. 
 Например, если на вход функция получает 1234,
  вернуть она должна 4321.
*/



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

let n=0;
function Num (i){

while (i>0)
{

n=i%10;
i=(i-(i%10))/10;

console.log(n);
}
}

Num (657);

ЗАДАЧА 5 

Напишите функцию для решения квадратных уравнений. В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней. Сами корни уравнения (или информацию о их отсутствии) функция должна выводить в консоль. Примечание 1. Ищем только решения в действительных числах, комплексные не нужны! Примечание 2. Для получения квадратного корня используйте стандартную функцию JS: Math.sqrt().

РЕШЕНИЕ */

let cor = 0;

function sas (a,b,c) {

console.log(Math.sqrt(a),
             Math.sqrt(b),
             Math.sqrt(c));

let i = Math.sqrt(a),
    j = Math.sqrt(b),
    k = Math.sqrt(c);

if (i>0) {

++cor;//cor++ не работало см.
} else {
console.log("переменная а - нет корней")
}
if(b>0){
++cor;
}else {
console.log(" переменная b - нет корней")
}
if (k>0){
++cor;
}
else {
console.log(" переменная c - нет корней")
}

}
sas (25,36,144);
console.log('количество корней '+cor);
sas (36,0,144);
console.log('количество корней '+cor);
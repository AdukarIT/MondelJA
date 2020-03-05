/*//1.Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике) и создаёт на его основе новый. Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}. initial – значение элемента исходного массива с тем же индексом, sqrt – корень квадратный из этого значения. Если округление sqrt по обычным математическим правилам сходится с его округлением через floor, то floor = true, а ceil = false. Если сходится с округлением через ceil - наоборот. Например, пусть у исходного массива arr[0] = 19, тогда в новом массиве newArr[0] = {initial: 19, sqrt: 4.358898943540674, floor: true, ceil: false}.

let arr =[];
function testArr (arr) {
	for (let i=0; i<=20; i++) {
		arr.push(Math.floor(Math.random(i)*10));
}}
testArr(arr);
console.log(arr); //создание массива

let NewArr = [];
let initial = arr[0];
let sqrt = Math.sqrt(arr[0]);
let floor;
let ceil;

if (NewArr[0]<=9) {

	 floor='true';
	 ceil = 'false';
}
if (NewArr[0]===Math.ceil(NewArr[0])) {
 floor=false;
 ceil = true;
}
NewArr.push(initial);
NewArr.push(Math.floor(Math.sqrt(initial)));//2 задание
NewArr.push(ceil);
console.log(NewArr);

//2.Добавьте в каждый элемент массива из задачи 1 ещё одно свойство: значение sqrt, ----округлённое до сотых.


//3.Напишите функцию, которая определяет, является ли строка палиндромом.------------------
let string = prompt('введите слово');

function palindrom (string) {
	//for (let i = 0; i < string.length; i++) [string.lenght-1-i]
if (string === string.reverse()) {
console.log('Это палиндром!');
} else { 
console.log('Это не палиндром!')
}
}
palindrom(string); 
if (string === string.split('').reverse().join(''))
{return result = console.log('Это палиндром'); } else { return result= console.log('Это не палиндром!');} 
palindrom('топот');
palindrom('жук');

//4.Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. Если таких символов несколько, функция должна возвращать строку из этих символов.
let result;
function dubleSymbol (str) {
	for (i=0; i<=str.length; i++)
   if(str[i]==str[i++]) {
   	return result += i;
   }
}
dubleSymbol('корона');
console.log(result.toString());

//5.Напишите функцию, которая получает в аргументы три строки – str, search, replace. Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.


//6.Напишите функцию, которая замяняет первую букву каждого слова
//в строке на такую же большую.

let string = ('Сегодня первое марта')

function Apper (string)  {
	for (let i=0; i<=string.length; i++) {
		return string[0].toUpperCase() + string.substring(1);
	}
}
console.log(Apper('привет'));

//7.Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки. Например, строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".

function index (str) {
	for ( let i=0; i<=str.length; i++) {

}
	}
	console.log(str);
}
index('золото');
*/
//8.Напишите функцию, которая возвращает текущий день недели на русском языке.
let now = new Date();
function DayWeek () {
switch (now.getDay()) {
case 0: console.log('Воскресенье');
break;
case 1: console.log('Понедельник');
break;
case 2: console.log('Вторник');
break;
case 3: console.log('Среда');
break;
case 4: console.log('Четверг');
break;
case 5: console.log('Пятница');
break;
case 6: console.log('Суббота');
default: } }
DayWeek();

//9. Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.

date = new Date ('03-03-2020')
console.log(date);
console.log(date[0]+date[1]+date[3]);

//МАССИВЫ ДОМАШНЕЕ ЗАДАНИЕ

/* 1.Используя встроенную функцию Math.random(),
напишите собственную функцию getRandomArray(len), которая возвращает 
массив случайных чисел длиной len.
При решении задач 2-9 используйте массивы, созданные через getRandomArray.
Решение каждой задачи должно быть оформлено как отдельная функция.

*/
let arr=[];
function getRandomArray (j) {
for ( let i=0; i<=j; i++)
{
	 arr.push(Math.random(i));

} }
getRandomArray(5);
 console.log('Задача 1 : ');
 console.log(arr);

//2.Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.
 /*
let sum=0;

function AverageNum (arr) {
 for (i=0; i<arr.length; i++) {
 
 sum += arr[i]/arr.length;

}}
AverageNum(arr);
console.log ('Среднее арифм.:');
console.log(result=sum);


let AverArray =[]; 

function AverElements (arr) {

 for (let i=0; i<=arr.length; i++) {
if (arr[i]>result) { 

AverArray.push(arr[i]);
 
}}}
AverElements(arr);
console.log('Задача 2 : ');
console.log (AverArray);

//3.Найдите два наименьших элемента массива. */


function minElement (array){
for (let i=0; i<=array.length; i++){
if (array[i]<array[i+1]) {
	console.log(array[i]);
continue;//повтор, чтобы найти 2 элемент/как ограничить до 2
}
}}

console.log(minElement(arr));


//4.Удалите из массива все элементы, меньшие 0.3.
//Сдвиньте все оставшиеся элементы вперёд, а на освободившиеся места вставьте нули. 
/*function deleteArr (arr) {
for (i=0; i<=arr.length; i++) 

if (arr[i]<0.3)
{

arr.splice([i],1,0); // как сдвигать ?

} }
deleteArr(arr);
console.log('Задача 4 : ');
console.log(arr);

//5.Попарно сложите элементы двух массивов равной длины: 
//первый массива 1 с последним массива 2, второй массива 1 с 
//предпоследним массива 2 и так далее. Верните массив с результатами сложения.

let SummMassive;
 
function arrSumm (arr1, arr2) {
	for (let i=0; i<arr2.length; i++){

SummMassive = arr1[i]+arr2[arr2.length-1]

}
} 

arrSumm([1,2,3],[4,3,5]);
console.log('Задача 5 : ');
console.log(SummMassive); */
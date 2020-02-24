//1.Дан элемент #elem. Добавьте ему класс "www".

let variable = document.querySelector('#elem');

 console.log(variable);//выводим найденный элемент
variable.classList.add('www'); //добавляем класс

//2.Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

console.log(document.querySelector('#elem','.www'));//поиск класса www
console.log(document.querySelector('#elem').classList.contains('www'));//поиск класса www
variable.classList.remove('www');//удаляем www

//3.Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, 
//а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body

let elems = console.log(document.querySelector('body').children);

function recursiveSearchTags (el)  {
	for (i=0; i<elems.lenght; i++) {
	let elems = document.querySelector('body').children; 
}}

//4.Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
// чтобы каждый элемент стоял в своем li. Сделайте так, чтобы четные позиции имели красный фон.
 let NewArr = ['новая строка 1','новая строка 2','новая строка 3','новая строка 4'];
 let ul = document.querySelector('ul');
for (i=0; i<=NewArr.length-1; i++) {
let li = document.createElement('li');
ul.appendChild(li);
li.innerHTML=NewArr[i];

}
 //5.Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

 console.log(variable.previousSibling.previousSibling);
 let text = document.createTextNode('!');
 variable.previousSibling.previousSibling.appendChild(text);

 //6.Реализуйте функцию wrapInParagraph, 
 //которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф

 let div2 = (document.querySelector('div').childNodes);
 let p2 = document.createElement('p');
let d = div2.innerHTML(p2);

/*7.Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех 
элементов на странице. В данном случае это означает что происходит преобразование 
всех классов написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter */
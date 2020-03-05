//1.Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

let button = document.getElementById('button');
let clone = document.getElementById('clone');

button.addEventListener('click', function (evt) {
	let clone2 = clone.cloneNode(true);
	document.body.append(clone2);
})

//2.Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered, при втором клике удалите класс  и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight.

let table = document.createElement('table');
document.body.appendChild(table);

for (let i = 1; i<=3; i++) {
	let tr = document.createElement('tr');//воздали строку
for (let j=1; j<=4; j++)	{
    let td = document.createElement('td');//создали столбец
    td.innerHTML ='строка';
    tr.appendChild(td);
}
table.appendChild(tr);
} 
let parent = document.querySelector('table')
parent.classList.add('bordered');
 parent.onmousedown = function() {
parent.classList.toggle('striped'); }
 //if(parent.className('striped')) {
 //parent.classList.toggle('highlight');
//}

//3.Модифицируйте задачу 7. Добавьте три radiobutton. При выборе первого включается класс bordered, при выборе второго отключается bordered и включается striped, при выборе третьего включается highlight и отключается striped.

//--------------------------------------------------------------------------------------

//4.Cоздайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст. Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.

let container = document.body;

let button2 = document.createElement('button');
//button2.setAttribute('type', radio);
button2.innerHTML = "Вторая кнопка";
container.appendChild(button2);

button2.onclick = function () {
    alert(this.innerHTML);

}

//5.Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.

let div = document.createElement('div');

let p = document.createElement('p');

let button3 = document.createElement('button');
button3.innerHTML = 'Третья кнопка';

let a = document.createElement('a');


document.body.appendChild(button);

document.body.appendChild(div);
div.innerHTML = 'DIV';
div.classList.add('div');

div.appendChild(p);
p.innerHTML = 'ПАРАГРАФ '

p.appendChild(a);
a.innerHTML = 'ССЫЛКА !'
a.setAttribute('href', 'vk.com')



div.addEventListener('click', function(ev) {
	var target = ev.target;
	alert('Это элемент ' + target.tagName); //выведет 'p' - абзац
});

//дорешать:--------------------------------------------------------

//6.Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: при наведении мыши на картинку, изображение будет заменяться другим изображением. При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.
//7.Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах и всплывает над контентом. Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.
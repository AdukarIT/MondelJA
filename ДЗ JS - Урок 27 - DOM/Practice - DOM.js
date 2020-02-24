
/*
Нужно создать пустой html документ и заполнить его используя различные методы работы с документом. 
Тело документа должно содержать следующий код:
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>
Сделайте красными все внешние ссылки (имеющие начало с http://), 
поменяйте местами два произвольных элемента списка
*/

//добавляем элементы МЕНЮ
let ul =document.createElement ('ul');


document.body.append(ul);
let parent = document.querySelector('ul');

let li =document.createElement('li');
parent.append(li);
let li2 =document.createElement('li');
parent.append(li2);
console.log(ul);

let a =document.createElement('a');
li.append(a);
a.href="http://google.com";
a.textContent='http://google.com';
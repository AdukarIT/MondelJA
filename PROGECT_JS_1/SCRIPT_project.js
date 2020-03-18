
let obj_melicano = {

	name: 'melicano',
	foto: 'image/cups/j1.jpg',
	description: 'путь из html',//описание
	preparation: {
		name: 'Cпособ приготовления',
	    foto: 'image/icons/j1-icon.png',
	    strong: 'image/icons/seed.png',
	},
	size: 250,
	recepie: 'путь из html'
	}


//---------------------------------------------------------------------------------------------------------

/* ПРОСТО УДАЛЕНИЕ

let container = document.querySelector('.cups-container');
let cups = container.querySelector('.cups');
cups.onclick = function () {
	 let img = cups.querySelector('img');
	 img.remove();
	 let h2 = cups.querySelector('h2');
	 h2.remove();
     let h1 = cups.querySelector('h1');
	 h1.innerHTML= 'Секрет кофе Jacobs Monarch Delicate в специально отобранных кофейных зернах из Латинской Америки и Азии. Они тщательно обжариваются, чтобы придать кофе глубокий сбалансированный вкус и великолепный аромат. Приготовьте чашечку Jacobs Monarch Delicate и насладитесь его вкусом и неповторимой аромагией}


С ДОБАВЛЕНИЕМ КЛАССА 

let container = document.querySelector('.cups-container');
let cups = container.querySelector('.cups');
cups.onclick = function () {
	 let img = cups.querySelector('img');
	 img.remove();
	 let h2 = cups.querySelector('h2');
	 h2.remove();
	 let h1 = cups.querySelector('h1');
	 h1.innerHTML='ТЕСТ';
	 h1.classList.add('h-modifid');

}




let cups = document.querySelectorAll('.cups');
console.log(cups);
let divcups = document.querySelectorAll('div.cups');
console.log(divcups);
let img = document.querySelectorAll('div.cups>img');
console.log(img);

 	for (let i=0; i<=cups.length-1; i++) {  
cups[i].addEventListener('mouseover', cupsModifeed);

function cupsModifeed () {
 	 divcups[i].classList.toggle('.img-modifid');
	 let h1_mod = cups[i].querySelector('.cups-descript');
	 h1_mod.classList.toggle('h-modifid');
} }
*/


let cups = document.querySelectorAll('.cups');
console.log(cups);

let img = document.querySelectorAll('div.cups>img');
console.log(img);

 	for (let i=0; i<=cups.length-1; i++) {
img[i].addEventListener('mouseover', cupsModifeed);

function cupsModifeed () {
img[i].remove();
	 let h2 = cups[i].querySelector('h2'); 
	 if (h2!==null) {                     //не работает удаление h2
	 h2.remove;
	}
	 let h1 = cups[i].querySelector('h1');
	 
	 let h1_mod = cups[i].querySelector('.cups-descript');
	 h1_mod.classList.toggle('h-modifid');
} }


//почему так не работает ? let button = сups[0].querySelector('button');
//let button = document.getElementById('button');

let button = document.querySelector('div.cups>button');
button.addEventListener('click', buttonModifid);

function buttonModifid () {

alert('name');

}
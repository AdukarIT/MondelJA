//1.Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет, есть ли в этом объекте свойство с именем, равным этой строке.


let myobject = {
name: 'Lena',
year: 29,
town: 'london'
}

function learnobject (obj, string) { 
	for (let key in obj)
  if (obj[key]==string) {
  	console.log(true);
  	break;
  }  else {
 	console.log(false);
  }
}
learnobject(myobject, 'Lena');

//2.Создайте объект для хранения своего любимого кулинарного рецепта. Он должен содержать название, ингредиенты и их необходимое количество (в виде вложенного объекта), а также количество порций (больше 1). Напишите функцию, которая получает "рецепт", подсчитывает, сколько каждого ингредиента нужно на одну порцию, и выводит информацию об этом в консоль.

console.clear();

let recipe = {
	name: "pancakes",
	portions: 5,
	ingredients: {
		sugar: 50,
		milk: 150,
		eggs: 5,
		flour: 300
		}
	
};
let forOnePortions = {};
let result=0;
function portionsGuest(recipe) {
	for(let key in recipe.ingredients) {
		forOnePortions= recipe.ingredients[key]/recipe.portions;
		console.log(forOnePortions);//количество каждого ингрид. на порцию
	    result += forOnePortions;
		}
	console.log(result); //общее количество ингридиентов
}

portionsGuest(recipe);

//3.Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).

let cylinder = {
    radius: 30,
    height: 100,
volume() {
	let volumeCyl;
	console.log ('Обьем цилиндра - '+ this.radius * this.height);
}}
cylinder.volume();

//4.Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта (не менее трёх полей; например, имя, создатель и источник). Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина, и fly, который в зависимости от значения свойства canFly (true или false) определяет, может ли пингвин летать, и сообщает об этом в консоль.

let penguin = {
    name: 'Pingo',
    origin: 'Расмус и Кламп',
    suorse: 'Карла и Вильгельм Хансен',
    canFly: 'fly',
sayHello () {
	console.log('Hello I\'m '+ this.name +' from ' + this.origin + ' ! ');
},
fly () {
	if (this.canFly=='fly') {
      console.log('Pingo умеет летать!')
	}
	else {
	  console.log('Эти пингвины не летают, но все возможно!')	
	}
}}
penguin.sayHello ();
penguin.fly();
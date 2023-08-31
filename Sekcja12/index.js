const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
function Constructor(mealName, price) {
	this.mealName = mealName;
	this.priceOfMeal = price;
}
const pie = new Constructor('apple pie', 29);
const meat = new Constructor('chicken', 35);
const drinks = new Constructor('water', 8);
console.log(pie, meat, drinks);

Constructor.prototype.message = function () {
	//Musi być zwykła funkcja strzałkowa nie może bo:
	// W funkcji arrow, this nie działa tak samo jak w zwykłej
	// funkcji. W twojej funkcji message, this nie odnosi się do
	// obiektu Constructor, co prowadzi do błędu. Możesz to naprawić,
	// korzystając z funkcji zwykłej, a nie strzałkowej.
	console.log(`${this.mealName} kosztuje ${this.priceOfMeal}`);
};
//pie.message();
btn1.addEventListener('click', () => pie.message());
btn2.addEventListener('click', () => meat.message());
btn3.addEventListener('click', () => drinks.message());

console.log('cześć!');
//Zadanie 1
let score;
const isOdd = () => console.log('jest nie parzysta');
const isEven = () => console.log('jest patrzysta');
const add = (x, y) => {
	score = x + y;
	console.log('score: ' + score);
	score % 2 === 0 ? isEven() : isOdd();
};
add(1, 1);
add(3, 6);
//Zadanie 2
let celsius, temp;
const farenheit = (degree) => {
	celsius = degree;
	temp = celsius * 1.8 + 32;
	return console.log(`temperatura ${celsius}*C to ${temp}*F`);
};
farenheit(32);

//Zadanie 3
let num = 10;
let numbers = [];

for (let i = 0; i < num; i++) {
	numbers.push(i);
}
const fun = (x) => {
	x % 3 === 0 && x != 0
		? console.log(`${x} jest podzielna przez 3`)
		: console.log(`${x} nie jest podzielna przez 3 lub x=0`);
};
numbers.forEach(fun);

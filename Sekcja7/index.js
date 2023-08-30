console.log('Cześć!');
//Zadanie 1
const numbers = [0, 0, 1, 1, 2, 2, 2];
const colors = ['red', 'green', 'blue', true, 123];
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀'];

const newNumbers = numbers.slice(2, numbers.length);
const newNumbers2 = numbers.slice(0, numbers.length - 3);
console.log(newNumbers2);

const randomStuff = colors.splice(-2);
console.log(colors);
console.log(randomStuff);

const newCar = cars.splice(2, 4, 'test');
console.log(cars);
console.log(newCar);

//Zadanie 2
const letters = ['c', 'd'];
letters.unshift('a', 'b');
letters.push('e', 'f');
console.log('sprawdzam czy zawiera c: ' + letters.includes('c'));
console.log(letters);

//Zadanie 3
const numbersEx3 = [1, 2, 3, 4, 5];
const food = ['burger', 'potato', 'breed'];
const con = numbersEx3.concat(food);
console.log(con);
console.log([...numbersEx3, ...food]);

//Zadanie 4
const numbersEx4 = [1, 5, 13, 26, 48];

const mapNumbers = numbersEx4.map((number) => number * 5);
console.log('oryginal array: ' + numbersEx4);
console.log('map numbers: ' + mapNumbers);

for (const number of mapNumbers) {
	if (number % 2 === 0) console.log(`${number} cyfra jest parzysta`);
	else console.log(`${number} cyfra jest nie parzysta`);
}

//Zadanie 5
const colorEx5 = ['blue'];
colorEx5.unshift('red');
colorEx5.push('green');
console.log(colorEx5);
for (const color of colorEx5) {
	const firstLetter = color.charAt(0).toUpperCase();
	const new1 = color.slice(1);
	console.log(`Mój ulubiony kolor to: ${firstLetter}${new1}`);
}
//Zadanie 6
const carsStr = 'bmx,mercedes,ferrari,Audi';
const carsArray = carsStr.split(',');
console.log(carsArray);
carsArray.length > 3 ? console.log('jest ok') : console.log('nie jesto ok');
if (carsArray.includes('Audi')) {
	console.log('jest fajnie');
	carsArray.pop();
	console.log('masz za dużo aut ' + carsArray);
} else {
	console.log('ojjjj nie zawiera audi');
	carsArray.push('Audi');
	console.log('teraz już tak ' + carsArray);
}

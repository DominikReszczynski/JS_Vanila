console.log('Cześć');

//Zadanie 1
const citis = ['Brzeg', 'Wrocław', 'Opole', 'Oława'];
for (let i = 0; i < citis.length; i++) {
	console.log('to miasto nazywa się ' + citis[i]);
}

//Zadanie 2
let x = 0;
while (x <= 10) {
	console.log('to jest x ' + x);
	x += 2;
}

//Zadanie 3
x = 20;
do {
	x -= 3;
} while (x > 0);
console.log('ostatnia cyfra ' + x);

//Zadanie 4
const numbers = [5, 8, 10, 23, 48, 60];
for (const number of numbers) {
	const result = number / 5;
	console.log(result.toFixed(2));
	if (number % 2 === 0) console.log(`${number} jest parzysta`);
	else console.log(`${number} jest nie parzysta`);
}

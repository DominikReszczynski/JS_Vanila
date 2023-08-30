console.log('cześć!');

//Zadanie 1
let x = 50;
let y = 30;
if (x > y) console.log('50 jest większe niż 30');

//Zadanie 2
const collor = 'blue';
const newCollor = 'green';
if (collor == newCollor) console.log('kolory się zgadzają');
else console.log('kolory się nie zgadzają');

//Zadanie 3
x = 100;
y = 50;
if (x > y) console.log('x>y');
else if (x == y) console.log('x=y');
else 'x<y';

//Zadanie 4
const promo = '20%';
switch (promo) {
	case '10%':
		console.log('nie ma promki');
		break;
	case '20%':
		console.log('jest 20% promki');
		break;
	case '30%':
		console.log('nie ma promki na 30%');
		break;
	default:
		console.log('nie widzę żedanej promki');
		break;
}

//Zadanie 5
x = 10;
x % 2 === 0 ? console.log('jest parzysta') : console.log('nie jest ');

//Zadanie 6
x = 50;
x >= 100 ? console.log('x>100') : console.log('x<100');
x < 100 && x > 30
	? console.log('x jest średniakiem')
	: console.log('x nie jest średniakiem');
x <= 30 ? console.log('x jest małe') : console.log('x nie jest małe');

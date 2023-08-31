const input = document.querySelector('input');
const btnConver = document.querySelector('.conv');
const btnReset = document.querySelector('.reset');
const btnChange = document.querySelector('.change');
const result = document.querySelector('.result');
const headline = document.querySelector('label');
//setInterval(() => console.log(input.value), 1000);
console.log(input.value);
let changer = true;
const converter = () => {
	if (changer && typeof input.value !== 'string') {
		faren = parseInt(input.value) * 1.8 + 32;
		result.textContent = `${faren}*F`;
		console.log('zrobione');
	} else if (typeof input.value === 'string') {
		result.textContent = `Nie poprawne dane!`;
	} else {
		cels = parseInt(input.value) / 1.8 - 32;
		result.textContent = `${cels}*C`;
	}
};
const changeChenger = () => {
	changer = !changer;
	changer === true
		? (headline.textContent = 'Konwerter °C na °F')
		: (headline.textContent = 'Konwerter °F na °C');
};
const reset = () => {
	changer = true;
	headline.textContent = 'Konwerter °C na °F';
	input.value = '';
	result.textContent = '';
};
//setInterval(() => convetToF(), 1000);
btnConver.addEventListener('click', converter);
btnChange.addEventListener('click', changeChenger);
btnReset.addEventListener('click', reset);

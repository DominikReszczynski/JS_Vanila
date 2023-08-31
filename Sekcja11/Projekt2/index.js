console.log('czesc');
const btnPlus = document.querySelector('.sizeUp');
const btnMinus = document.querySelector('.sizeDown');
const btnColor = document.querySelector('.color');
const text = document.querySelector('.text p');
console.log(btnColor);
console.log(btnMinus);
console.log(btnPlus);
console.log(text);
let textSize = 36;
const textPlus = () => {
	textSize += 10;
	textSize < 100 ? (text.style.fontSize = `${textSize}px`) : null;
};
const textMinus = () => {
	textSize -= 10;
	textSize > 0 ? (text.style.fontSize = `${textSize}px`) : null;
};
const colorGen = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

const colorRandom = () => (text.style.color = `${colorGen()}`);

btnPlus.addEventListener('click', textPlus);
btnMinus.addEventListener('click', textMinus);
console.log(colorGen());
btnColor.addEventListener('click', colorRandom);

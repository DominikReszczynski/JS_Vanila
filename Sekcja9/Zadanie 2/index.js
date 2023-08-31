console.log('zadanie 9.2');
const paragraph1 = document.querySelector('.p1');
const paragraph2 = document.querySelector('.p2');
console.log(paragraph1, paragraph2);
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
console.log(btn1, btn2);
const conteiner = document.querySelector('.square');
console.log(conteiner);
const hello = () => {
	console.log('czesc');
};
const changeColorRed = () => {
	conteiner.style.background = 'red';
};
const changeColorBlue = () => {
	conteiner.style.background = 'blue';
};
const toggleShow = () => {
	paragraph1.classList.toggle('show');
	paragraph2.classList.toggle('show');
};

btn1.addEventListener('dblclick', hello);
conteiner.addEventListener('mouseenter', changeColorRed);
conteiner.addEventListener('mouseleave', changeColorBlue);
btn2.addEventListener('click', toggleShow);

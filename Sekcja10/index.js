console.log('jestem');
//zadanie1
const image = document.querySelector('img');
console.log(image);
image.setAttribute(
	'src',
	'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'
);
image.setAttribute('alt', 'img');
const time = () => {
	console.log('timeout po 1s');
};
setTimeout(time, 1000);

//zadanie2
const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
	li[i].textContent = i;
	//dwa sposoby dodawania atrybutu do tagu
	li[i].setAttribute('data-id1', i); //1
	li[i].dataset.id = i; //2(bardziej zalecany)
}
console.log(li);
const thirdLi = document.querySelector('[data-id1="2"]');
console.log(thirdLi);

console.log(thirdLi.closest('.wrapper'));

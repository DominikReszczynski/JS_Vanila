console.log('czesc');
const item1 = document.querySelector('.item1');
const arrowIcon = document.querySelector('.fa-arrow-down');
const btn = document.querySelector('button');
console.log(btn);
console.log(arrowIcon);
let item1Changer = false;
const btnClick = () => {
	item1Changer = !item1Changer;
	if (item1Changer) {
		item1.style.height = '500px';
		arrowIcon.style.transform = 'rotate(180deg)';
	} else {
		item1.style.height = '50px';
		arrowIcon.style.transform = 'rotate(0)';
	}
};
console.log(item1);
btn.addEventListener('click', btnClick);

console.log('czesc zadanie 3 sekcja 9');
const ulList = document.createElement('ul');
document.body.append(ulList);

for (let i = 0; i <= 10; i++) {
	const liItem = document.createElement('li');
	liItem.textContent = i;
	ulList.append(liItem);
}

const lastLi = ulList.querySelector('li:last-child');
lastLi.style.backgroundColor = 'pink';

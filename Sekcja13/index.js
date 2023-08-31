const btn = document.querySelector('button');
const img = document.querySelector('img');
const img2 = document.querySelector('.img2');
console.log(img2);
const URL = 'https://dog.ceo/api/breeds/image/random';

btn.addEventListener('click', () => {
	fetch(URL)
		.then((dataToJSON) => dataToJSON.json())
		.then((data) => img.setAttribute('src', data.message))
		.catch((err) => console.error(err));
});
btn.addEventListener('click', () => {
	showImageAxios();
	// axios
	// 	.get(URL)
	// 	.then((res) => {
	// 		img2.setAttribute('src', res.data.message);
	// 	})
	// 	.catch((err) => console.error(err));
});

async function showImageAxios() {
	try {
		const response = await axios.get(URL);
		img2.setAttribute('src', response.data.message);
	} catch (err) {
		console.error(err);
	}
}

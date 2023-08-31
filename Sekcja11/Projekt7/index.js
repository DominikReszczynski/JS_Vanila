let todoInput,
	errorInfo,
	addBtn,
	ulList,
	newTodos,
	popup,
	popupInfo,
	todoToEdit,
	popupInput,
	popupAddBtn,
	popupCloseBtn;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};
const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');

	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	popupInput = document.querySelector('.popup-input');
	popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
};
const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo);
	ulList.addEventListener('click', checkClick);
	popupCloseBtn.addEventListener('click', closePopup);
	popupAddBtn.addEventListener('click', changeTodoText);
};

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodos = document.createElement('li');
		newTodos.textContent = todoInput.value;
		createToolsArea();
		ulList.append(newTodos);
		todoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Wpisz treść';
	}
};

const createToolsArea = () => {
	const toolPanel = document.createElement('div');
	toolPanel.classList.add('tools');
	newTodos.append(toolPanel);

	const compliteBtn = document.createElement('button');
	compliteBtn.classList.add('complete');
	compliteBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.textContent = 'EDIT';

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
	toolPanel.append(compliteBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		editTodo(e);
	} else if (e.target.matches('.delete')) {
		deleteTodo(e);
	}
};
const editTodo = (e) => {
	todoToEdit = e.target.closest('li');
	popupInput.value = todoToEdit.firstChild.textContent;
	popup.style.display = 'flex';
};
const closePopup = () => {
	popup.style.display = 'none';
	popupInfo.textContent = '';
};
const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value;
		popup.style.display = 'none';
		popupInfo.textContent = '';
	} else {
		popupInfo.textContent = 'musisz podać jakąś treść!';
	}
};
const deleteTodo = (e) => {
	e.target.closest('li').remove();
	const allTodos = document.querySelectorAll('li');
	console.log(allTodos);

	if (allTodos.length === 0) {
		errorInfo.textContent = 'brak zadań';
	}
};
document.addEventListener('DOMContentLoaded', main);

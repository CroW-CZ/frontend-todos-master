
var todoStringField = document.getElementById('todoString');
var todoTemplate = document.getElementById('todoTemplate').innerHTML;
var listDom = document.getElementById('todoList');

todoStringField.addEventListener('keyup', addTodo);

listDom.addEventListener('click', checkDelete);

listDom.innerHTML = loadData();

function addTodo(event) {
	if (event.keyCode !== 13 || todoStringField.value === "") {
		event.stopPropagation();
		return;
	}

	var newTodo = todoStringField.value;
	todoStringField.value = "";

	console.log('새로운 todo : ', newTodo);

	listDom.innerHTML += tmpl(todoTemplate, {todo: newTodo});

	saveData();
}

function checkDelete(event){
	if(event.target.className !== 'delete'){
		return;
	}

	var deleteBtn = event.target;

	deleteBtn.parentElement.remove();

	saveData();
}

function loadData(){
	console.log('loadData()');
	return	localStorage.getItem('todoHtml');
}

function saveData(){
	console.log('saveData()');
	localStorage.setItem('todoHtml', listDom.innerHTML);
}

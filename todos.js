//start...


//console.log('hello world')

function getDom(id){
	return document.getElementById(id);
}



//var todoStringField = document.getElementById('todoString');
var todoStringField = getDom('todoString');

//var from = document.getElementById('todoForm');

todoStringField.addEventListener('keyup', function(event){

	//console.log(event.keyCode)
	//console.log( todoStringField , todoStringField.value );
	if(event.keyCode === 13){
		console.log(todoStringField.value);

		var newTodo = todoStringField.value;
		todoStringField.value = "";

		var listDom = getDom('todoList');

		listDom.innerHTML += ' \
		<li>\
			<button class="delete">×</button>\
            <input type="checkbox" class="toggle-checked" id="todoString">\
            <span class="text">' + newTodo +'</span>\
        </li>\
        '
	}
});


console.log( todoStringField, todoStringField.value );
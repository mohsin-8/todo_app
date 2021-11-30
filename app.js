// Todo App Functionality

var listItems = document.getElementById('todoList');

function addTodo() {
    var inputField = document.getElementById('inputField');
    // console.log(inputField.value);
    if (inputField.value.length > 2) {
        var list = document.createElement('li');
        var node = document.createTextNode(inputField.value);
        list.appendChild(node);
        list.style.listStyleType = 'none';
        list.className = ('list');
        // console.log(list);


        var editBtn = document.createElement('button');
        var nodeAddBtn = document.createTextNode('Edit');
        editBtn.setAttribute("onclick", 'editListTodo(this)');
        editBtn.appendChild(nodeAddBtn);
        list.appendChild(editBtn);
        editBtn.className = ('addBtn');
        // console.log(list);

        var delBtn = document.createElement('button');
        var nodeTextDelBtn = document.createTextNode('Delete');
        delBtn.setAttribute('onclick', 'delListTodo(this)');
        delBtn.appendChild(nodeTextDelBtn);
        list.appendChild(delBtn);
        delBtn.className = ('delBtn');

        inputField.value = "";

        listItems.appendChild(list)
    } else {
        alert('Enter Proper Value');
    };
}

function delTodo() {
    listItems.innerHTML = "";
}

function editListTodo(e) {
    var listTxt = e.parentNode.firstChild.nodeValue;
    // console.log(listTxt);
    var editListTxt = prompt('Edit Todo List: ', listTxt);
    // console.log(editListTxt);
    // e.parentNode.firstChild.nodeValue = editListTodo;

    e.parentNode.firstChild.nodeValue = editListTxt;
}

function delListTodo(e) {
    e.parentNode.remove();
}
/* database */

const firebaseConfig = {
    apiKey: "AIzaSyBFBAZer8mn6UE3d3A1iPYBhTlaWOMc0Iw",
    authDomain: "todo-application-34d04.firebaseapp.com",
    projectId: "todo-application-34d04",
    storageBucket: "todo-application-34d04.appspot.com",
    messagingSenderId: "230880809080",
    appId: "1:230880809080:web:3e3a6476a48f79a8dbdd8d"
};

const app = firebase.initializeApp(firebaseConfig);
// console.log(app);
// console.log(app.database);
// console.log(firebase);

/* database */

// Todo App Functionality

var listItems = document.getElementById('todoList');

// firebase.database().ref('todos').on('child_added', function (data) {
//     console.log(data.val());
// })

firebase.database().ref('todos').on('child_added', function (data) {
    console.log(data.val());

    if (inputField.value.length > 2) {
        var list = document.createElement('li');
        var node = document.createTextNode(data.val().value);
        list.appendChild(node);
        list.style.listStyleType = 'none';
        list.className = ('list');
        // console.log(list);


        var editBtn = document.createElement('button');
        var nodeAddBtn = document.createTextNode('Edit');
        editBtn.setAttribute('id', data.val().key);
        editBtn.setAttribute("onclick", 'editListTodo(this)');
        editBtn.appendChild(nodeAddBtn);
        list.appendChild(editBtn);
        editBtn.className = ('addBtn');
        // console.log(list);

        var delBtn = document.createElement('button');
        var nodeTextDelBtn = document.createTextNode('Delete');
        delBtn.setAttribute('id', data.val().key);
        delBtn.setAttribute('onclick', 'delListTodo(this)');
        delBtn.appendChild(nodeTextDelBtn);
        list.appendChild(delBtn);
        delBtn.className = ('delBtn');

        listItems.appendChild(list);

        inputField.value = "";

    }
});

function addTodo() {
    var inputField = document.getElementById('inputField');
    // console.log(inputField.value);

    var key = firebase.database().ref('todos').push().key;
    var todo = {
        value: inputField.value,
        key: key
    }
    // console.log(todo);

    firebase.database().ref('todos').child(key).set(todo);
    inputField.value = "";

};

function delTodo() {
    listItems.innerHTML = "";
}

function editListTodo(e) {
    var listTxt = e.parentNode.firstChild.nodeValue;
    // console.log(listTxt);
    var editListTxt = prompt('Edit Todo List: ', listTxt);
    // console.log(editListTxt);
    // e.parentNode.firstChild.nodeValue = editListTodo;

    var editTodo = {
        value: editListTxt,
        key: e.id
    }
    // console.log(editTodo);
    firebase.database().ref('todos').child(e.id).set(editTodo)
    e.parentNode.firstChild.nodeValue = editListTxt;
}

function delListTodo(e) {
    firebase.database().ref('todos').child(e.id).remove()
    // console.log(e.id);
    e.parentNode.remove();
}
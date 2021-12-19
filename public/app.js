// /* database */

// const firebaseConfig = {
//     apiKey: "AIzaSyBFBAZer8mn6UE3d3A1iPYBhTlaWOMc0Iw",
//     authDomain: "todo-application-34d04.firebaseapp.com",
//     projectId: "todo-application-34d04",
//     storageBucket: "todo-application-34d04.appspot.com",
//     messagingSenderId: "230880809080",
//     appId: "1:230880809080:web:3e3a6476a48f79a8dbdd8d"
// };

// const app = firebase.initializeApp(firebaseConfig);
// // console.log(app);
// // console.log(app.database);
// // console.log(firebase);

// /* database */

// // Todo App Functionality
// var database = app.database()

// var listItems = document.getElementById('todoList');

// // firebase.database().ref('todos').on('child_added', function (data) {
// //     console.log(data.val());
// // })

// function addTodo() {
//     var inputField = document.getElementById('inputField');
//     // console.log(inputField.value);
//     if (inputField.value.length > 2) {
//         var key = database.ref('/').push().key;
//         var todoObj = {
//             key: key,
//             todo: inputField.value
//         }
//         // console.log(todo);

//         database.ref('todos').child(key).set(todoObj);
//         inputField.value = "";

//     } else {
//         alert('enter correct value');
//     }
// };


// database.ref('todos').on('child_added', function (data) {
//     console.log(data.val());

//     if (inputField.value.length > 2) {
//         var list = document.createElement('li');
//         var node = document.createTextNode(data.val().todo);
//         list.appendChild(node);
//         list.style.listStyleType = 'none';
//         list.className = ('list');
//         // console.log(list);


//         var editBtn = document.createElement('button');
//         var nodeAddBtn = document.createTextNode('Edit');
//         editBtn.setAttribute('id', data.val().key);
//         editBtn.setAttribute("onclick", 'editListTodo(this)');
//         editBtn.appendChild(nodeAddBtn);
//         list.appendChild(editBtn);
//         editBtn.className = ('addBtn');
//         // console.log(list);

//         var delBtn = document.createElement('button');
//         var nodeTextDelBtn = document.createTextNode('Delete');
//         delBtn.setAttribute('id', data.val().key);
//         delBtn.setAttribute('onclick', 'delListTodo(this)');
//         delBtn.appendChild(nodeTextDelBtn);
//         list.appendChild(delBtn);
//         delBtn.className = ('delBtn');

//         listItems.appendChild(list);

//         // inputField.value = "";

//     }
// });

// function delTodo() {
//     listItems.innerHTML = "";
// }

// function editListTodo(e) {
//     var listTxt = e.parentNode.firstChild.nodeValue;
//     // console.log(listTxt);
//     var editListTxt = prompt('Edit Todo List: ', listTxt);
//     // console.log(editListTxt);
//     // e.parentNode.firstChild.nodeValue = editListTodo;

//     var editTodo = {
//         value: editListTxt,
//         key: e.id
//     }
//     // console.log(editTodo);
//     database.ref('todos').child(e.id).set(editTodo)
//     e.parentNode.firstChild.nodeValue = editListTxt;
// }

// function delListTodo(e) {
//     database.ref('todos').child(e.id).remove()
//     // console.log(e.id);
//     e.parentNode.remove();
// }


const firebaseConfig = {
    apiKey: "AIzaSyBFBAZer8mn6UE3d3A1iPYBhTlaWOMc0Iw",
    authDomain: "todo-application-34d04.firebaseapp.com",
    projectId: "todo-application-34d04",
    storageBucket: "todo-application-34d04.appspot.com",
    messagingSenderId: "230880809080",
    appId: "1:230880809080:web:3e3a6476a48f79a8dbdd8d"
};

const app = firebase.initializeApp(firebaseConfig);

var database = app.database();
// console.log(database);
// console.log(app);
var listItems = document.getElementById('todoList');

function addTodo() {
    var inputField = document.getElementById('inputField');
    // console.log(inputField.value);

    if (inputField.value.length > 2) {
        var key = database.ref('/').push().key;

        var todoObj = {
            key: key,
            todo: inputField.value
        }
        database.ref('todos').child(key).set(todoObj);

        inputField.value = "";
    } else {
        alert('Enter Correct Value');
    }
}


database.ref("todos").on("child_added", function (data) {
    // console.log(data.val().key);

    var list = document.createElement('li');
    var listNode = document.createTextNode(data.val().todo);
    list.style.listStyleType = 'none';
    list.className = ('list');

    list.appendChild(listNode);

    var editBtn = document.createElement('button');
    var nodeAddBtn = document.createTextNode('Edit');
    editBtn.setAttribute("onclick", 'editListTodo(this)');
    editBtn.setAttribute('id', data.val().key);
    editBtn.appendChild(nodeAddBtn);
    list.appendChild(editBtn);
    editBtn.className = ('addBtn');
    // console.log(list);

    var delBtn = document.createElement('button');
    var nodeTextDelBtn = document.createTextNode('Delete');
    delBtn.setAttribute('onclick', 'delListTodo(this)');
    delBtn.setAttribute('id', data.val().key);
    delBtn.className = ('delBtn');
    delBtn.appendChild(nodeTextDelBtn);
    list.appendChild(delBtn);

    listItems.appendChild(list);

});

function delTodo() {
    listItems.innerHTML = "";
    database.ref('/todos').remove();
}


function editListTodo(e) {
    var listTxt = e.parentNode.firstChild.nodeValue;
    // console.log(listTxt.nodeValue);

    var editListTxt = prompt('Edit Todo', listTxt);

    // console.log(editListTxt);

    e.parentNode.firstChild.nodeValue = editListTxt;

    database.ref('todos').child(e.id).update({
        todo: editListTxt
    });
};

function delListTodo(e) {
    // console.log(e.parentNode)
    e.parentNode.remove()
    // console.log(e.id)
    database.ref("todos").child(e.id).remove()

}
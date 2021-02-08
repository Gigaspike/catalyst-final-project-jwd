// const newTaskNameInput = document.getElementById('taskName');
// const newTaskAsigned = document.getElementById('taskAsign');
// const newTaskDetails = document.getElementById('taskDetail');
// const newTaskDate = document.getElementById('taskDate');
// //const newTaskStatus = document.getElementById('status');
// const newForm = document.getElementById('zform');
// const errorElement = document.getElementById('error');
// //variables being applied
// // const name1 = newTaskNameInput.value;
// // const asigned = newTaskAsigned.value;
// // const detail = newTaskDetails.value;
// // const setDate = newTaskDate.value;
// //const setstatus = newTaskStatus.value;
// //test area
// // console.log('name: ' + name1);
// //class setup for input fields
// // class Task{
// //     constructor(a,b,c,d,e){
// //         this.taskAsign = 'Ex Lisa';
// //         this.taskName = 'ex taskName'; 
// //         this.taskDetail = 'ex  Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
// //         this.taskDate = '01/02/2021';
// //         this.status = 'assigned';
// //     }
// //     getstatus(){
// //         return this.status;
// //     }
// //     setstatus(){
// //         if (this.status === 'assigned'){
// //             this.status = 'In progress';
// //         }else if(this.status === 'In progress'){
// //             this.status = 'Complete';
// //         }else{
// //             this.status = 'assigned';
// //         }
// //     }
// // }


// newForm.addEventListener('submit', (e) => {
//     let messages = [];
//     if(newTaskNameInput.value === null || newTaskNameInput.value === ''){
//         messages.push('A name for the task is required.')
//     }
//      if(newTaskAsigned.value === null || newTaskAsigned.value === ''){
//         messages.push('Assign a someone to the task.')
//     }
//      if(newTaskDetails.value === null || newTaskDetails.value === ''){
//         messages.push('Please leave a detail description of the task.')
//     }
//      if(newTaskDate.value === null || newTaskDate.value === ''){
//         messages.push('Please select a due date.')
//     }

//     if(messages.length > 0){
//         e.preventDefault();
//         errorElement.innerText = messages.join(', ');
//         errorElement.style.display = 'block';
//         setTimeout(function() {
//             errorElement.setAttribute('class', 'alert alert-warning');
//             errorElement.style.color = 'Red';
//             //your code to be executed after 1 second
//           }, 500); 
//           setTimeout(function() {
//             errorElement.setAttribute('class', 'alert alert-danger');
//             errorElement.style.color = 'Black';
//             //your code to be executed after 1 second
//           }, 1000);
//           setTimeout(function() {
//             errorElement.setAttribute('class', 'alert alert-warning');
//             errorElement.style.color = 'Red';
//             //your code to be executed after 1 second
//           }, 1500); 
//           setTimeout(function() {
//             errorElement.setAttribute('class', 'alert alert-danger');
//             errorElement.style.color = 'Black';
//             //your code to be executed after 1 second
//           }, 2000);
//     }else{
//         console.log('no errors')
//         errorElement.style.display = 'none';
//         e.preventDefault();
//     }
    
// })

// function validFormFieldInput(data){
// return console.log('not implemented yet')
// }


let todoList = [{
  'todo': 'Do task ',
  'id': 'todo'
},
  {
  'todo': 'Do task ',
  'id': 'todo'
}];

let pageList = new Array();
let currentPage = 1;
let numberPerPage = 10;
let numberOfPages = 0;

function newElement() {
  let inputTitle = document.getElementById('title').value,
    inputUser = document.getElementById('usr').value,
    inputDate = document.getElementById('due-date').value,
    todo = '';
  if (inputTitle === '') {
    alert("Please enter a task");
    return;
  } else {
    todo = inputTitle;
    if (inputUser != '') {
      todo = inputUser + " needs to complete " + inputTitle;
    }
    if (inputDate != '') {
      todo = todo + " by " + inputDate
    }
  }
  let newTodoId = findNextId(),
    newTodo = {
      'todo': todo,
      'id': 'todo' + newTodoId
    };
  todoList.push(newTodo);
  sortElementsById();
  clearFields();
}

function fetchIdFromObj(todo) {
  return parseInt(todo.id.slice(4));
}

function findNextId() {
  if (todoList.length === 0) {
    return 0;
  }
  let lastElementId = fetchIdFromObj(todoList[todoList.length - 1]),
    firstElementId = fetchIdFromObj(todoList[0]);
  return (firstElementId >= lastElementId) ? (firstElementId + 1) : (lastElementId + 1);
}

function clearFields() {
  document.getElementById('title').value = '';
  document.getElementById('usr').value = '';
  document.getElementById('due-date').value = '';
}

function deleteElement(event) {
  let idOfEltToBeDeleted = event.target.parentElement.id;
  let arrayIndex = todoList.findIndex(function(singleTodo) {
    return singleTodo.id === idOfEltToBeDeleted;
  });
  if (arrayIndex !== -1) {
    todoList.splice(arrayIndex, 1);
  }
  load(todoList);
}

function displayOneElement(todoObject) {
  let li_element = document.createElement("li");
  let p_element = document.createElement("p");
  p_element.className = "task-name";
  li_element.appendChild(p_element);
  li_element.setAttribute("id", todoObject.id);
  let text_node = document.createTextNode(todoObject.todo);
  p_element.appendChild(text_node);
  let span_element = document.createElement("SPAN");
  span_element.className = "close";
  let txt_node = document.createTextNode("\u00D7");
  span_element.appendChild(txt_node);
  span_element.onclick = deleteElement;
  li_element.appendChild(span_element);
  document.getElementById("task-list").appendChild(li_element);
}

function sortElementsById() {
  let manyTodos = todoList.sort(function(a, b) {
    let x = fetchIdFromObj(a);
    let y = fetchIdFromObj(b);
    if (x > y) {
      return -1;
    }
    if (x < y) {
      return 1;
    }
    return 0;
  })
  load(manyTodos);
}

function sortElementsByName() {
  let manyTodos = todoList.sort(function(a, b) {
    let x = a.todo.toLowerCase();
    let y = b.todo.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  })
  load(manyTodos);
}



function getNumberOfPages(manyTodos) {
  return Math.ceil(manyTodos.length / numberPerPage);
}

function gotoPage(event) {
  currentPage = parseInt(event.target.id);
  loadList(todoList);
}

function refreshPaginations() {
  let paginationTarget = document.getElementById('pagination'),
    setActiveClass = false;
  paginationTarget.innerHTML = '';
  for (let i = 1; i <= numberOfPages; i++) {
    let li_element = document.createElement("li"),
      a_element = document.createElement('a');
    if (i === currentPage) {
      li_element.className = 'active';
      setActiveClass = true;
    } else {
      a_element.onclick = gotoPage;
    }
    a_element.setAttribute('id', i);
    a_element.innerHTML = i;
    li_element.appendChild(a_element);
    paginationTarget.appendChild(li_element);
  }
  if (numberOfPages > 0 && setActiveClass === false) {
    currentPage = 1;
    refreshPaginations();
    loadList(todoList);
  }
}

function loadList(manyTodos) {
  let begin = ((currentPage - 1) * numberPerPage);
  let end = begin + numberPerPage;
  pageList = manyTodos.slice(begin, end);
  refreshPaginations();
  drawList(pageList);
}

function drawList(manyTodos) {
  document.getElementById("task-list").innerHTML = "";
  manyTodos.forEach(function(singleTodo) {
    displayOneElement(singleTodo);
  });
}

function load(manyTodos) {
  numberOfPages = getNumberOfPages(manyTodos);
  loadList(manyTodos);
}

window.onload = function() {
  sortElementsById();
}
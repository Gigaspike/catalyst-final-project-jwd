class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  getNextNode() {
    return this.next;
  }
}

module.export = Node;












/*
if(name1.value === null || name1.value === ''){
  errorElement.style.display = 'block';
  errorElement.innerText='Submit failed! label the task with a name is required.';
  setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-warning');
      errorElement.style.color = 'Red';
      //your code to be executed after 1 second
    }, 500); 
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-danger');
      errorElement.style.color = 'Black';
      //your code to be executed after 1 second
    }, 1000);
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-warning');
      errorElement.style.color = 'Red';
      //your code to be executed after 1 second
    }, 1500); 
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-danger');
      errorElement.style.color = 'Black';
      //your code to be executed after 1 second
    }, 2000); 
}else if(asigned.value === null || asigned.value === ''){
  errorElement.style.display = 'block';
  errorElement.innerText='Submit failed! asigned field cannot be blank.';
  setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-warning');
      errorElement.style.color = 'Red';
      //your code to be executed after 1 second
    }, 500); 
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-danger');
      errorElement.style.color = 'Black';
      //your code to be executed after 1 second
    }, 1000);
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-warning');
      errorElement.style.color = 'Red';
      //your code to be executed after 1 second
    }, 1500); 
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-danger');
      errorElement.style.color = 'Black';
      //your code to be executed after 1 second
    }, 2000); 

}else if(detail.value === '' || detail.value === null){
  errorElement.style.display = 'block';
  errorElement.innerText='Submit failed! Please fill in detailed task description.';
  setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-warning');
      errorElement.style.color = 'Red';
      //your code to be executed after 1 second
    }, 500); 
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-danger');
      errorElement.style.color = 'Black';
      //your code to be executed after 1 second
    }, 1000);
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-warning');
      errorElement.style.color = 'Red';
      //your code to be executed after 1 second
    }, 1500); 
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-danger');
      errorElement.style.color = 'Black';
      //your code to be executed after 1 second
    }, 2000); 

}else if(setDate.value === null || setDate.value === ''){
  errorElement.style.display = 'block';
  errorElement.innerText='Submit failed! Due date required for each task.';
  setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-warning');
      errorElement.style.color = 'Red';
      //your code to be executed after 1 second
    }, 500); 
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-danger');
      errorElement.style.color = 'Black';
      //your code to be executed after 1 second
    }, 1000);
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-warning');
      errorElement.style.color = 'Red';
      //your code to be executed after 1 second
    }, 1500); 
    setTimeout(function() {
      errorElement.setAttribute('class', 'alert alert-danger');
      errorElement.style.color = 'Black';
      //your code to be executed after 1 second
    }, 2000); 
}*/
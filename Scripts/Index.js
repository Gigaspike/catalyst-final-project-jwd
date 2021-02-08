const newTaskNameInput = document.getElementById('taskName');
const newTaskAsigned = document.getElementById('taskAsign');
const newTaskDetails = document.getElementById('taskDetail');
const newTaskDate = document.getElementById('taskDate');
//const newTaskStatus = document.getElementById('status');
const newForm = document.getElementById('zform');
const errorElement = document.getElementById('error');
//variables being applied
// const name1 = newTaskNameInput.value;
// const asigned = newTaskAsigned.value;
// const detail = newTaskDetails.value;
// const setDate = newTaskDate.value;
//const setstatus = newTaskStatus.value;
//test area
// console.log('name: ' + name1);
//class setup for input fields
// class Task{
//     constructor(a,b,c,d,e){
//         this.taskAsign = 'Ex Lisa';
//         this.taskName = 'ex taskName'; 
//         this.taskDetail = 'ex  Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
//         this.taskDate = '01/02/2021';
//         this.status = 'assigned';
//     }
//     getstatus(){
//         return this.status;
//     }
//     setstatus(){
//         if (this.status === 'assigned'){
//             this.status = 'In progress';
//         }else if(this.status === 'In progress'){
//             this.status = 'Complete';
//         }else{
//             this.status = 'assigned';
//         }
//     }
// }

/*This is in place of validFormFieldInput(data)*/
newForm.addEventListener('submit', (e) => {
    let messages = [];
    if(newTaskNameInput.value === null || newTaskNameInput.value === ''){
        messages.push('A name for the task is required.')
    }
     if(newTaskAsigned.value === null || newTaskAsigned.value === ''){
        messages.push('Assign a someone to the task.')
    }
     if(newTaskDetails.value === null || newTaskDetails.value === ''){
        messages.push('Please leave a detail description of the task.')
    }
     if(newTaskDate.value === null || newTaskDate.value === ''){
        messages.push('Please select a due date.')
    }

    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
        errorElement.style.display = 'block';
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
    }else{
        console.log('no errors')
        errorElement.style.display = 'none';
        e.preventDefault();
    }
    
})


// //task 4 instructions this was not required after i the code above was completed and streamlined.
/* function validFormFieldInput(data){
return console.log('not implemented yet')
}
 */

//start of task 5 here
const thisTask = new TaskManager();
console.log(thisTask.tasks);
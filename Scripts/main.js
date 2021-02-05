const name = document.getElementById('taskName');
const named = document.getElementById('taskAsign');
const details = document.getElementById('taskDetail');
const taskDate = document.getElementById('taskDate');
const status = document.getElementById('status');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
let messages = []
if (name.value === '' || name.value === null){
    messages.push('Name is required');
}
if (messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
}
})



class Task{
    constructor(a,b,c,d,){
        this.taskAsign = 'Ex Lisa';
        this.taskName = 'ex taskName'; 
        this.taskDetail = 'ex  Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
        this.taskDate = '01/02/2021';
        this.status = 'assigned';
    }
}




const newTaskNameInput = document.getElementById('taskName');
const named = document.getElementById('taskAsign');
const details = document.getElementById('taskDetail');
const taskDate = document.getElementById('taskDate');
const status = document.getElementById('status');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')
//variables being applied
const name1 = newTaskNameInput.nodeValue;
//test area
console.log('name: ' + name1);
//class setup for input fields
class Task{
    constructor(a,b,c,d,){
        this.taskAsign = 'Ex Lisa';
        this.taskName = 'ex taskName'; 
        this.taskDetail = 'ex  Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
        this.taskDate = '01/02/2021';
        this.status = 'assigned';
    }
    getstatus(){
        return this.status;
    }
    setstatus(){
        if (this.status === 'assigned'){
            this.status = 'In progress';
        }else if(this.status === 'In progress'){
            this.status = 'Complete';
        }else{
            this.status = 'assigned';
        }
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
})

function validFormFieldInput(data){

}



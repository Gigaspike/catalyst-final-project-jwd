class TaskManager{
    constructor(currentID,){
        this.tasks = [];
        this.currentID = 0;
    }

    addTask(a1,a2, a3, a4, a5){
        this.currentID += 1;
        this.tasks.push({id: this.currentID, name: a1, description: a2, assignedTo: a3, dueDate: a4, status: 'assigned'});
    }
}
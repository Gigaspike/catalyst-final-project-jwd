class TaskManager{
    constructor(currentID = 0,){
        this.tasks = [];
        this.currentID = currentID;
    }

    addTask(a1,a2, a3, a4){
        this.currentID++;
        this.tasks.push({id: this.currentID, name: a1, description: a2, assignedTo: a3, dueDate: a4, status: 'assigned'});
    }
}
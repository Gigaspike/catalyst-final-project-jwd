const createTaskHtml = (insertname, insertdescription, insertassignedto, insertdate, insertstatus) => {
    <li class="list-group-item">
    <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <h5>${insertname}</h5>  <p>${insertstatus}</p>
        <span class="badge badge-danger">${insertdescription}</span>
    </div>
    <div class="d-flex w-100 mb-3 justify-content-between">
        <small>${insertassignedto}</small>
        <small>${insertdate}</small>
    </div>
    <p>Take out the trash to the front of the house</p>
    </li>
}

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
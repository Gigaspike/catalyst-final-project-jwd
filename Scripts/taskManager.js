const createTaskHtml = (insertname, insertdescription, insertassignedto, insertdate, insertstatus) => {
  const html=`
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
    `
    return html;
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

    render(){
        let tasksHtmlList = [];
        tasksHtmlList.foreach(taskvar);
        let formattedDate = new Date(dueDate);
    }
}
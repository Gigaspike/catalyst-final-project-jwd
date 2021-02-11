const createTaskHtml = (insertname, insertdescription, insertassignedto, insertdate, insertstatus) => {
  const html=`
    <li class="list-group-item" id='taskelements' style='max-width: 300px'>
        <div class="col-md-auto col-xs-8">
            <div class="card border-0">
                <div class="card-body">
                <p class="card-text text-center"><h5>${insertname}</h5></p>
                <span class="badge badge-primary inline">Status: ${insertstatus}</span>
                <p>Assigned to:<small>${insertassignedto}</small></p>
                <h6>${insertdescription}</h6>
                <h6>Due Date : <strong>${insertdate}</strong></h6>
      
                
                </div>
            <button type="button" class="btn btn-primary">In Progress</button>
            <button type="button" class="btn btn-success" id="del">Delete</button>
            </div>
        </div>
    </li>
    `
    return html;
}

class TaskManager{
    constructor(currentID = 0){
        this.tasks = [];
        this.currentID = currentID;
    }

    addTask(a1,a2, a3, a4, a5){
        this.currentID++;
        this.tasks.push({id: this.currentID, name: a1, description: a2, assignedTo: a3, dueDate: a4, status: a5});
    }

    render(){
        let tasksHtmlList = [];
        this.tasks.forEach(e => {
            const datez = `${moment(e.dueDate).format("dddd")}, ${moment(e.dueDate).format("MMM Do YY")}`;
            //let sdate = new Date(e.dueDate);
            // let formattedDate = `${sdate.getMonth()}, ${sdate.getDate()}, ${sdate.getFullYear()}`;
            let taskHtml = createTaskHtml(e.name, e.description, e.assignedTo, datez, e.status);
            tasksHtmlList.push(taskHtml);
        });
        let tasksHtml = tasksHtmlList.join('\n');
        document.getElementById('taskslist').innerHTML = tasksHtml;
        document.getElementsByClassName('tasklist')[0].style.display = 'block';
        document.getElementById('taskslist').style.display = 'grid';
    }
}
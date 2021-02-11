const createTaskHtml = (insertname, insertdescription, insertassignedto, insertdate, insertstatus) => {
  const html=`
    <li class="list-group-item" id='taskelements' style='max-width: 300px'>
        <div class="col-sm">
            <div class="card border-0">
            <h6>Task:</h1>
                <p class="card-text" style='display: inline-flex;'><h5>${insertname}</h5><span class="badge badge-primary" style='display: inline-flex;'>Status: ${insertstatus}</span></p>
                <div class="card-body align-center">
                <p style='border-color: #FCF3CF; border-style: solid'>Assigned to:<br><small>${insertassignedto}</small></p>
                <h6>${insertdescription}</h6>
                <h6>Due Date : <strong>${insertdate}</strong></h6>
      
                
                </div>
            <button type="button" class="done-button btn btn-primary">Mark As Done</button>
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
        document.getElementById('taskslist').style.display = 'flex';
    }

}
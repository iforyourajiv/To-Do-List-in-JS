// Global Empty Array
var task = [];
var completed = [];

// Function That will Add Task On Global Task Array
function addtask() {
    var taskname = document.getElementById("task").value;
    if (taskname == "") {
        document.getElementById("status").innerHTML = "Plz Enter Some task";
    } else {
        document.getElementById("status").innerHTML = "";
        task.push(taskname);
        document.getElementById("task").value = "";
        displayTask();

    }


}

// Function That will Display Task
function displayTask() {
    var html = "<table style='border:none;margin-left:30%'>";
    for (i = 0; i <= task.length - 1; i++) {
        html += "<tr id='row'>";
        html +=
            "<td><input type='checkbox'  value='" +
            task[i] +
            "' onclick=donetask(" +
            i +
            ")></td>";
        html += "<td>" + task[i] + "</td>";
        html +=
            "<td><input type='text' id='edittask" +
            i +
            "' value='" +
            task[i] +
            "'></td>";
        html +=
            "<td style='text-align:center;'>" +
            "<input type='button' onclick='editTask(" +
            i +
            ")' value='Edit'/>" +
            "</td>";
        html +=
            "<td style='text-align:center;'>" +
            "<input type='button'  onclick='delTask(" +
            i +
            ")' value='Delete'/>" +
            "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("showtask").innerHTML = html;
}

// Function That will Edit Task
function editTask(element) {
    let update = document.getElementById("edittask" + element).value;
    task[element] = update;
    displayTask();
}

// Function That will Delete Task
function delTask(element) {
    task.splice(element, 1);
    displayTask();
}

// Function That will Add Completed Task On Global Completed Array
function donetask(element) {
    let selectedTask = task[element];
    task.splice(element, 1);
    displayTask();
    completed.push(selectedTask);
    displaycompletedTask();
}

// Function That will Display Completed Task
function displaycompletedTask() {
    var html = "<table style='border:none;margin-left:30%'>";
    for (i = 0; i <= completed.length - 1; i++) {
        html += "<tr id='row'>";
        html +=
            "<td><input type='checkbox' id='completedtask' value='" +
            completed[i] +
            "' onclick=undotask(" +
            i +
            ") checked></td>";
        html += "<td>" + completed[i] + "</td>";
        html +=
            "<td><input type='text' id='completetask" +
            i +
            "' value='" +
            completed[i] +
            "' ></td>";
        html +=
            "<td style='text-align:center;'>" +
            "<input type='button' onclick='editCompleteTask(" +
            i +
            ")' value='Edit'/>" +
            "</td>";
        html +=
            "<td style='text-align:center;'>" +
            "<input type='button'  onclick='delCompleteTask(" +
            i +
            ")' value='Delete'/>" +
            "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("completetask").innerHTML = html;
}

// Function That will Undo Completed Task
function undotask(element) {
    let selectedTask = completed[element];
    completed.splice(element, 1);
    displaycompletedTask();
    task.push(selectedTask);
    displayTask();
}

// Function That will Edit Completed Task
function editCompleteTask(element) {
    let update = document.getElementById("completetask" + element).value;
    completed[element] = update;
    displaycompletedTask();
}

// Function That will Delete Completed Task
function delCompleteTask(element) {
    completed.splice(element, 1);
    displaycompletedTask();
}
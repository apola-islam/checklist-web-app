function addTask(){
if (document.querySelector("#newtask input").value.length==0){
    alert("Empty Input");
} else {
    document.querySelector("#tasks").innerHTML
    += `
    <div class=task> 
    <span id="taskname"> ${document.querySelector("#newtask input").value}</span>
    <button class="delete" onclick="deleteTask()"> </button>
    </div>
    `
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function() {
        this.classList.toggle("completed");}
    }
    }
}

function deleteTask(){
    var current_tasks = document.querySelector(".delete")
    current_tasks.parentNode.remove();
}

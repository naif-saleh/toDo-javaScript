const inputTask = document.getElementById("task-value");
const addTask = document.getElementById("add-task");
const list = document.getElementById("list");
const alert = document.querySelector(".alert");
const alertSuccess = document.querySelector(".alert-success");

addTask.addEventListener("click" , ()=>{
    if(inputTask.value === ''){
        alert.style.display = "block";
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        list.appendChild(li);
        let deleteIcon = document.createElement("span")
        deleteIcon.innerHTML = "\u00d7"
        li.appendChild(deleteIcon)
    }
    inputTask.value = '';
    saveTasks()
})

list.addEventListener("click" , (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveTasks()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        alertSuccess.style.display = "block"
        setInterval(function(){
            alertSuccess.style.display = "none"
        }, 3000)
        saveTasks()
    }
})


function saveTasks(){
    localStorage.setItem("tasks" , list.innerHTML)
}
function showTasks(){
    list.innerHTML = localStorage.getItem("tasks")
}
showTasks();
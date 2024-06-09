document.getElementById("resetButton").addEventListener("click",()=>{
    document.getElementById("task").value = "" ;
})
allTasks = new Array();
var errorMsg = document.getElementById("errMsg") ; 
document.getElementById("addTask").addEventListener("click",()=>{
    let getTask = document.getElementById("task").value ; 
    errorMsg.style.cssText = "color:red;font-size:1.3rem;text-align:center;"
    if(getTask == ""){
        errorMsg.innerText = "Must fill the field first !";
        setTimeout(()=>{
            errorMsg.innerText = "";
        },3000)
    }else if(getTask.length>35){
        errorMsg.innerText = "Task too long !";
        setTimeout(()=>{
            errorMsg.innerText = "";
        },3000)
    }else{
        errorMsg.style.cssText = "color:green;font-size:1.3rem;text-align:center;"
        errorMsg.innerText = "Task added succesfully !";
        setTimeout(()=>{
            errorMsg.innerText = "";
        },3000)
        let htmlTasksContainer = document.getElementById("addedTasks") ;
        let newTaskContainer = document.createElement("div") ;
        let deleteButton  = document.createElement("button") ;
        deleteButton.innerHTML = "DELETE <i class='fa-solid fa-trash'></i>" ; deleteButton.id = "deleteButton"
        deleteButton.onclick=function(){
            this.parentElement.remove() ;
        } 
        let task = document.createElement("p") ;
        let div = document.createElement("div") ;
        div.className = "oneTaskContainer" ;
        task.style.float="left"
        task.innerText = getTask ; 
        newTaskContainer.appendChild(task) ; 
        div.appendChild(newTaskContainer) ;
        div.appendChild(deleteButton) ;
        div.style.cssText = "border:1px solid #000 ; border-radius : .3rem ; overflow:hidden"
        htmlTasksContainer.appendChild(div)
        console.log(allTasks)
        localStorage.clear();
        allTasks.push(getTask)
        localStorage.allTasks = JSON.stringify(allTasks);
    }
})
document.getElementById("deleteAll").addEventListener("click",()=>{
    if(document.getElementById("addedTasks").innerText == "" ){
        errorMsg.style.cssText = "color:red;font-size:1.3rem;text-align:center;"
        errorMsg.innerText = "There's no tasks , insert some :)" ;
        setTimeout(() => {
            errorMsg.innerText = ""
        }, 3000);
    }else{
        document.getElementById("addedTasks").innerText = ""
        errorMsg.style.cssText = "color:green;font-size:1.3rem;text-align:center;"
        errorMsg.innerText = "Tasks delete succefully !"
        setTimeout(() => {
            errorMsg.innerText = ""
        }, 3000);
    }
})
console.log(localStorage.allTasks)
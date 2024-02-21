function save(){
    let nom = document.getElementById("lastname").value;
    let prenom = document.getElementById("firstname").value;

    
    alert(nom + ", " + prenom)
    localStorage.setItem("nom", nom);
    localStorage.setItem("prénom", prenom);

    window.location.replace(acceuil.html);
}




const taskInput = document.getElementById("taskInput") ;

const addTaskBtn = document.getElementById("addTask") ;

const taskList = document.getElementById("taskList") ;

const clearAll = document.getElementById("clearAll")
var tasklocal = "task"
var task = "undone task ";
var done = "task done ";
var i = 0;
var j = 0;
// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.


addTaskBtn.addEventListener("click", addTask);


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
 
 function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText !==""){

    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    taskInput.value = "";

    const doneBtn = document.createElement("img");

    doneBtn.setAttribute("src", "./Images/done.png");
    doneBtn.setAttribute('height', '30px');
    doneBtn.setAttribute('width', '30px');

    listItem.appendChild(doneBtn);

    doneBtn.addEventListener("click", () => {
        listItem.id = "taskDone"});

    const editBtn = document.createElement("img");

    editBtn.setAttribute("src", "./Images/icons8-edit-file-50.png");
    editBtn.setAttribute('height', '18px');
    editBtn.setAttribute('width', '18px');

    listItem.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
        taskInput.value = listItem.textContent
        listItem.remove()
    });

    const deleteBtn = document.createElement("img");

    deleteBtn.setAttribute("src", "./Images/delete.png");
    deleteBtn.setAttribute('height', '30px');
    deleteBtn.setAttribute('width', '30px');
    deleteBtn.setAttribute('color','#ff7777');
    deleteBtn.setAttribute('background-color','#ff7777');

    // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau noeud ou repositionner un

    //noeud existant en tant que dernier enfant d'un noeud parent particulier.

    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {

    listItem.remove();

    });


    }else{
        alert("Veuillez entrer une tâche valide.");
    }
localStorage.setItem(task.concat(i), (taskText), i++)
clearAll.addEventListener("click", () => {
    localStorage.clear()
})
localStorage.setItem(tasklocal.concat(i), taskText);
i++;
}
/**les valeurs rechercher dans le formulaire html qui demande une tache
 * taskInput qui est la tache rentrer par l'utilisateur
 * addTaskBtn qui ajoute la tache sur le html
 * tasklist qui met la tache dans une list
 * tasklocal pour mettre la tache dans du local storage
 */
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearAll = document.getElementById("clearAll");
var tasklocal = "task";
var task = "undone task ";
var i = 0;

addTaskBtn.addEventListener("click", addTask);
/**fonction qui permet d'ouvrir la barre latéral */
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("button =").style.display = "none";
}
/**fonction qui permet de fermer la barre latéral */
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("button =").style.display = "block";
}
/** fonction qui permet
 * d'ajouter une tache
 * et la mettre dans une liste
 * de la modifier
 * de la compléter
 * de la supprimer
 */
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    taskInput.value = "";

    const doneBtn = document.createElement("img");

    doneBtn.setAttribute("src", "./Images/done.png");
    doneBtn.setAttribute("height", "30px");
    doneBtn.setAttribute("width", "30px");

    listItem.appendChild(doneBtn);

    doneBtn.addEventListener("click", () => {
      listItem.id = "taskDone";
    });

    const editBtn = document.createElement("img");

    editBtn.setAttribute("src", "./Images/icons8-edit-file-50.png");
    editBtn.setAttribute("height", "18px");
    editBtn.setAttribute("width", "18px");

    listItem.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
      taskInput.value = listItem.textContent;
      listItem.remove();
    });

    const deleteBtn = document.createElement("img");

    deleteBtn.setAttribute("src", "./Images/delete.png");
    deleteBtn.setAttribute("height", "30px");
    deleteBtn.setAttribute("width", "30px");

    // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau noeud ou repositionner un
    //noeud existant en tant que dernier enfant d'un noeud parent particulier.
    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });
  } else {
    alert("Veuillez entrer une tâche valide.");
  }
  localStorage.setItem(task.concat(i), taskText, i++);
  clearAll.addEventListener("click", () => {
    localStorage.clear();
  });
  localStorage.setItem(tasklocal.concat(i), taskText);
  i++;
}

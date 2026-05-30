const addBtn = document.getElementById("addBtn");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    if(taskInput.value === ""){

        alert("Veuillez entrer une tâche");

        return;

}

    const li = document.createElement("li");

    li.textContent = taskInput.value;

    li.addEventListener("click", () => {

        li.style.textDecoration = "line-through";

    });

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Supprimer";

    deleteBtn.onclick = () => {

        li.remove();

    };

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

});

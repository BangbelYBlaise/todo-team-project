// 1. Sélection des éléments HTML via leurs IDs exacts
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// 2. Écoute du clic sur le bouton "Ajouter"
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    // Vérification que l'utilisateur a bien écrit quelque chose
    if (taskText !== "") {
        // Création d'un nouvel élément de liste (li)
        const li = document.createElement('li');
        
        // Structure interne de la tâche avec son bouton Supprimer
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" style="background-color: #dc3545; color: white; border: none; padding: 5px 10px; cursor: pointer; margin-left: 10px;">Supprimer</button>
        `;

        // Ajout du bouton de suppression dynamique
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });

        // Insertion de la tâche dans la liste (ul)
        taskList.appendChild(li);

        // Réinitialisation du champ de saisie
        taskInput.value = "";
    } else {
        alert("Veuillez saisir une tâche avant d'ajouter !");
    }
});

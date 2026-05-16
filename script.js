// Attendre que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments HTML
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
    
    // Vérifier que les éléments existent
    if (!taskInput || !addBtn || !taskList) {
        console.error("Éléments HTML manquants !");
        return;
    }
    
    console.log("ToDo List prête !");
    
    // Fonction pour ajouter une tâche
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Veuillez entrer une tâche');
            return;
        }
        
        // Créer l'élément <li>
        const li = document.createElement('li');
        li.textContent = taskText;
        li.style.margin = '10px 0';
        li.style.padding = '8px';
        li.style.backgroundColor = '#f9f9f9';
        li.style.borderRadius = '5px';
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        
        // Conteneur pour les boutons
        const buttonContainer = document.createElement('div');
        
        // Bouton terminé
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✓ Terminé';
        completeBtn.style.marginRight = '5px';
        completeBtn.style.padding = '5px 10px';
        completeBtn.style.cursor = 'pointer';
        completeBtn.style.backgroundColor = '#28a745';
        completeBtn.style.color = 'white';
        completeBtn.style.border = 'none';
        completeBtn.style.borderRadius = '3px';
        completeBtn.onclick = function() {
            li.style.textDecoration = 'line-through';
            li.style.backgroundColor = '#d4edda';
            completeBtn.disabled = true;
            completeBtn.style.backgroundColor = '#6c757d';
        };
        
        // Bouton supprimer
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✗ Supprimer';
        deleteBtn.style.padding = '5px 10px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.backgroundColor = '#dc3545';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.borderRadius = '3px';
        deleteBtn.onclick = function() {
            li.remove();
        };
        
        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);
        li.appendChild(buttonContainer);
        taskList.appendChild(li);
        
        // Vider l'input
        taskInput.value = '';
    }
    
    // Événement du bouton Ajouter
    addBtn.addEventListener('click', addTask);
    
    // Ajouter avec la touche Entrée
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

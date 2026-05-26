// On récupère les éléments HTML
const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

// Fonction pour ajouter une tâche
btn.addEventListener('click', function() {
    // On vérifie que le champ n'est pas vide
    if (input.value.trim() !== "") {
        // Création d'un nouvel élément de liste (li)
        const newItem = document.createElement('li');
        newItem.textContent = input.value;
        
        // Ajout de l'élément à la liste (ul)
        list.appendChild(newItem);
        
        // On vide le champ de saisie
        input.value = "";
    } else {
        alert("Veuillez entrer une tâche !");
    }
});

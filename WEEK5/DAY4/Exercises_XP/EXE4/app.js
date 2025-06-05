import { TodoList } from "./todo.js";

// Crée une instance
const myList = new TodoList();

// Ajoute des tâches
myList.addTask("Faire les courses");
myList.addTask("Réviser l'examen");
myList.addTask("Envoyer un email important");

// Marque la deuxième tâche comme complétée 
myList.markComplete(1);

// Affiche toutes les tâches
myList.listTasks();

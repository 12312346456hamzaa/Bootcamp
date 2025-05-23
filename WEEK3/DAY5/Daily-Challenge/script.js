
const tasks = []; 
let taskCounter = 0;

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const tasksDiv = document.querySelector('.listTasks');
const clearBtn = document.getElementById('clearBtn');

// Ajout d'une tâche
form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

// Fonction pour ajouter une tâche
function addTask() {
  const text = input.value.trim();
  if (text === '') return;
  const task = {
    task_id: taskCounter++,
    text: text,
    done: false
  };
  tasks.push(task);
  renderTasks();
  input.value = '';
}

// Fonction pour afficher toutes les tâches 
function renderTasks() {
  tasksDiv.innerHTML = '';
  for (const task of tasks) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';
    taskDiv.setAttribute('data-task-id', task.task_id);

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => doneTask(task.task_id));

    // Label
    const label = document.createElement('span');
    label.className = 'task-label';
    label.textContent = task.text;
    if (task.done) label.classList.add('task-done');

    // Bouton de suppression 
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.innerHTML = '<i class="fas fa-times"></i>';
    delBtn.addEventListener('click', () => deleteTask(task.task_id));

    // Ajout des éléments
    taskDiv.appendChild(delBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    tasksDiv.appendChild(taskDiv);
  }
}

// Marquer comme fait / non fait
function doneTask(id) {
  const task = tasks.find(t => t.task_id === id);
  if (!task) return;
  task.done = !task.done;
  renderTasks();
}

// Supprimer une tâche
function deleteTask(id) {
  const index = tasks.findIndex(t => t.task_id === id);
  if (index > -1) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Vider toutes les tâches
clearBtn.addEventListener('click', () => {
  tasks.length = 0;
  renderTasks();
});

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = { description, completed: false };
    this.tasks.push(task);
    console.log(`Task added: "${description}"`);
  }

  markComplete(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
      console.log(`Task completed: "${this.tasks[index].description}"`);
    } else {
      console.log("Invalid task index.");
    }
  }

  listTasks() {
    console.log("\nAll Tasks:");
    this.tasks.forEach((task, i) => {
      const status = task.completed ? "✅ Done" : "❌ Not done";
      console.log(`${i}: ${task.description} [${status}]`);
    });
    console.log("");
  }
}

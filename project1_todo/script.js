document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  console.log("rELOADED");
  let task_array = JSON.parse(localStorage.getItem("tasks")) || []; //Array OF Object
  task_array.forEach((ele) => {
    renderTask(ele);
  });

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    task_array.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = "";
  });

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(task_array)); //local storage can take only key=String value=String
  }

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
      <span>${task.text}</span>
      <button>Delete</button>
      `;

    todoList.appendChild(li);
    // This function id forming a Closure for every li element having the lexical environment that stores the task variable
    li.addEventListener("click", (e) => {
      if (e.target.tagName == "BUTTON") {
        task_array = task_array.filter((t) => t.id != task.id);
        console.log(li);

        todoList.removeChild(li);
        saveTasks();
        return;
      }

      console.log(task.text);

      task.completed = !task.completed; //task is a reference to a object which is present inside the arrayOf Object task_array
      li.classList.toggle("completed");
      saveTasks();
    });
  }
});

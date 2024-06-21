document.getElementById("addTaskButton").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const ul = document.getElementById("tasks");
    const li = document.createElement("li");
    li.textContent = taskText;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "removeButton";
    removeButton.addEventListener("click", function () {
      ul.removeChild(li);
    });
    li.appendChild(removeButton);
    ul.appendChild(li);
    taskInput.value = "";
  }
});

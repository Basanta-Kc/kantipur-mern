const ul = document.querySelector("ul");
console.log(ul);

ul.innerHTML = "<li> test </li> <li> another </li>";

const form = document.querySelector("form");

// document.getElementById("body").addEventListener("click", (e) => {
//   console.log("any where in the body");
//   console.log(e);
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("input").value;
  alert(username);
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  console.log(e);
  alert("heeloo");
});

const tasks = ["learn html", "learn css", "learn php"];
tasks[1] = "learn java";
tasks[2] = "learn php";

// create, read, update, delete
const deleteTask = (indexToBeDeleted) => {
  tasks.splice(indexToBeDeleted, 1);
};

const updateTask = (index, updatedTask) => {
  tasks[index] = updatedTask;
  // task [0] = learn testing
};

const addTask = (newTask) => {
  tasks.push(newTask);
};

const readTask = () => {
  tasks.forEach((task) => {
    console.log(task);
  });
};

// readTask() => task list console
// updateTask(index, value) => a[0] => learn php
// deteTask(index)
// addTask(value)
addTask("learn java");
addTask("learn laravel");
readTask();
deleteTask(4);
readTask();
updateTask(0, "learn testing");
readTask();

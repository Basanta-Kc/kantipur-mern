localStorage.setItem("name", "basanta");
localStorage.setItem("age", 10);
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

// localStorage.clear();

const todos = ["learn html,css & js", "learn css"];

localStorage.setItem('todos', JSON.stringify(todos))
const todosFromLS = localStorage.getItem('todos')
console.log(JSON.parse(todosFromLS))


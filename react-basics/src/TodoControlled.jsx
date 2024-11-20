import { useState } from "react";
import "./App.css";
function App() {
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  // const todos = ["learn html", "learn css"];
  const [todos, setTodos] = useState(["learn html", "learn css"]);

  const handleAdd = () => {
    if (indexToBeEdited == null) {
      todos.push(newTodo);
    } else {
      todos[indexToBeEdited] = newTodo;
      setIndexToBeEdited(null);
    }

    setTodos([...todos]);
    setNewTodo("");

    // setcount(count + 1)
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleDelete = (indexToBeDeleted) => {
    const updatedTodos = todos.filter(
      (todo, index) => index !== indexToBeDeleted
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <input value={newTodo} type="text" onChange={handleChange} />
      <button onClick={handleAdd}>
        {indexToBeEdited == null ? "Add" : "Update"}
      </button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo} <button onClick={() => handleDelete(index)}>delete</button>{" "}
              <button
                onClick={() => {
                  setIndexToBeEdited(index);
                  setNewTodo(todos[index]);
                }}
              >
                edit
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

// count = 0;
// setCount(coutn + 1 => 0 + 1 = 1) , count = 1

// todos = ["learn html"]
// todos.push("learn node")
// setTodos(todos) = [learnhtml, learn node]
// ===

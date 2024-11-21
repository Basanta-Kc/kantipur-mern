import { useState, useRef } from "react";
import "./App.css";
function App() {
  const todoInputRef = useRef(null);
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  // const todos = ["learn html", "learn css"];
  const [todos, setTodos] = useState(["learn html", "learn css"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (indexToBeEdited == null) {
      todos.push(todoInputRef.current.value);
    } else {
      todos[indexToBeEdited] = newTodo;
      setIndexToBeEdited(null);
    }

    todoInputRef.current.value = "";
    setTodos([...todos]);
    setNewTodo("");

    // setcount(count + 1)
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value + "reakes");
  };

  const handleDelete = (indexToBeDeleted) => {
    const updatedTodos = todos.filter(
      (todo, index) => index !== indexToBeDeleted
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={todoInputRef} type="text" />
        <button type="submit">
          {indexToBeEdited == null ? "Add" : "Update"}
        </button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo} <button onClick={() => handleDelete(index)}>delete</button>{" "}
              <button
                onClick={(e) => {
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

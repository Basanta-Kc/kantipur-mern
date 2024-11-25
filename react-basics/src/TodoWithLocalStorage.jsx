import { useState, useEffect } from "react";
import "./App.css";
// useState(0) // useState(() => { computation  return computeValue})
const getTodoFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return JSON.parse(todos) ?? [];
};

function App() {
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(getTodoFromLocalStorage);
  // const [todos, todosDispatch] = useReducer(reducer, [], getTodoFromLocalStorage)

  // useEffect(() => {
  //   console.log("first");
  // });

  // useEffect(() => {
  //   console.log("second");
  // }, []);

  // useEffect(() => {
  //   console.log("third, newTodo");
  // }, [newTodo]);

  // useEffect(() => {
  //   console.log("fourth, todos");
  // }, [todos]);

  // useEffect(() => {
  //   console.log("fifith, indextobeedit");
  // }, [indexToBeEdited]);

  // useEffect(() => {
  //   console.log("sixth, all");
  // }, [indexToBeEdited, todos, newTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (indexToBeEdited == null) {
      todos.push(newTodo);
    } else {
      todos[indexToBeEdited] = newTodo;
      setIndexToBeEdited(null);
    }
    setTodos([...todos]);
    setNewTodo("");
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
      <form onSubmit={handleSubmit}>
        <input value={newTodo} type="text" onChange={handleChange} />
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

// resusable button component (state vs props)

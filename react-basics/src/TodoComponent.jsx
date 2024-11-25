import { useState, useEffect } from "react";
import "./App.css";
// useState(0) // useState(() => { computation  return computeValue})
const getTodoFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return JSON.parse(todos) ?? [];
};

// props = { lable : "edit"}
// error = red
// success = green
// default = blue
const COLORS = {
  error: "red",
  success: "green",
};

function Button({ label, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{
        color: "white",
        background: COLORS[color] ?? "blue",
        marginRight: "5px",
        padding: "0px"
      }}
    >
      {label}
    </button>
  );
}

function TodoForm({ handleSubmit, newTodo, handleChange, indexToBeEdited }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={newTodo} type="text" onChange={handleChange} />
      <Button label={indexToBeEdited == null ? "Add" : "Update"} />
    </form>
  );
}

function App() {
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(getTodoFromLocalStorage);

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
      <TodoForm
        newTodo={newTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        indexToBeEdited={indexToBeEdited}
      />
      {/* make this component */}
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <Button
                color="error"
                label="Delete"
                onClick={() => handleDelete(index)}
              />
              <Button
                color="success"
                label="Edit"
                onClick={() => {
                  setIndexToBeEdited(index);
                  setNewTodo(todos[index]);
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

// resusable button component (state vs props)
// separate component into three layers for todoapp (heading, form , title)
// fetch user data, post data, different component
// create reusable hook
// use useReducer on counter
// use userREducer on api call
// useMemo, useCallback, react.memo()

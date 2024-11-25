import { useReducer } from "react";
import "./App.css";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
  // if (action.type === "increment") return { count: state.count + 1 };
  // if (action.type === "decrement") return { count: state.count - 1 };
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <p>
        {state.count > 10 ? "count cannot be greater than 10" : ""}
        <button disabled={state.count > 9} onClick={handleIncrement}>
          +
        </button>
        {state.count}
        {state.count < -10 ? "count cannot be less than -10" : ""}

        <button disabled={state.count < -9} onClick={handleDecrement}>
          -
        </button>
      </p>
    </div>
  );
}

// document.getElelm('id').addEventLister('click', () => {})

export default Counter;

// function test(){
//   console.log("test")
// }

// test()
// test()

/// pure function
function add(a, b) {
  return a + b;
}

add(2, 3);
add(2, 3);

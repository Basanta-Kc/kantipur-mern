import {
  useReducer,
  useState,
  useEffect,
  useMemo,
  memo,
  useCallback,
} from "react";
import "./App.css";
import PropTypes from "prop-types";

const calculateFactorial = (n) => {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};

// calulateFactorial(5) => 120

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

function Header({ value }) {
  useEffect(() => {
    return () => {
      console.log("cleanup function called");
    };
  }, []);
  return <h1>{value}</h1>;
}

Header.propTypes = {
  value: PropTypes.string,
};

function Input({ value, handleChange }) {
  console.log("Input component called (render)");
  return <input type="text" value={value} onChange={handleChange} />;
}

const MemoizedInput = memo(Input);

// React.memo()
const MemoizedHeader = memo(Header);

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [value, setValue] = useState("");
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("cleanup");
    };
  }, [state.count]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const factorial = useMemo(
    () => calculateFactorial(state.count),
    [state.count]
  );

  // const factorial = calculateFactorial(state.count);

  return (
    <div>
      {state.count < 2 && <MemoizedHeader value={value} />}
      <MemoizedInput value={value} handleChange={handleChange} />
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
      <p>
        Factorial of {state.count} is {factorial}
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

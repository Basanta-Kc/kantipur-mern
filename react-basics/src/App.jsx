import { useState } from "react";
import "./App.css";
// setCount(value) , setCount((prev) => {})
function App() {
  // let count = 0;
  let [count, setCount] = useState(0);
  const handleIncrement = () => {
    // count = count + 1;
    setCount(count + 1);
    // setCount((prev) => {
    //   return prev + 1;
    // }); // 0 + 1
    // setCount((prev) => {
    //   return prev + 1;
    // }); // 0 + 1
  };
  const handleDecrement = () => {
    alert("- clicked");
    // count = count - 1;
    setCount(count - 1);
  };

  console.log("app function called");
  return (
    <div>
      <p>
        {count > 10 ? "count cannot be greater than 10" : ""}
        <button disabled={true} onClick={handleIncrement}>
          +
        </button>
        {count}
        {count < -10 ? "count cannot be less than -10" : ""}

        <button disabled={true} onClick={handleDecrement}>-</button>
      </p>
    </div>
  );
}

// document.getElelm('id').addEventLister('click', () => {})

export default App;

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

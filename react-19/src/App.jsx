import "./App.css";
import { create } from "zustand";

const useCountStore = create((set, get) => ({
  count: 0,
  handleIncrement: () => {
    // get().count
    set((state) => ({ count: state.count + 1 }));
  },
  handleDecrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  reset: () => {
    set({ count: 0 });
  },
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}));

function App() {
  const { count, handleDecrement, handleIncrement, reset } = useCountStore();
  // const [count, setCount] = useState(0);

  // // setCount(12) setCount(prevState => {
  // const handleIncrement = () => setCount(count + 1);
  // const handleDecrement = () => setCount(count - 1);
  return (
    <>
      <button onClick={handleIncrement}>+</button>
      {count}
      <button onClick={handleDecrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;

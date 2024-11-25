import { createContext, useState, useContext } from "react";
import Counter from "./Counter";

const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

function App() {
  const [user, setUser] = useState({ name: "Admin", role: ["admin"] });
  return (
    <>
      <UserContext.Provider value={user}>
        {/* <Users />
        <Pokemons /> */}
        <Counter />
      </UserContext.Provider>
    </>
  );
}

export default App;

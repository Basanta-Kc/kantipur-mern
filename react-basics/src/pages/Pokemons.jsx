import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";

// https://jsonplaceholder.typicode.com/posts
function useQueryPokemon() {
  const [state, setState] = useState("loading");
  const [error, setError] = useState();
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    // data is fetching
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        // data is fetched
        // throw new Error("time limit exceeded");
        setState("success");
        setPokemons(data.results);
      })
      .catch((err) => {
        setState("error");
        setError(err.message);
      });
  }, []);

  return { state, error, pokemons };
}

function Pokemons() {
  // const user = useContext(UserContext)
  const {
    state,
    error,
    data
  } = useQuery("https://pokeapi.co/api/v2/pokemon");


  return (
    <>
      <h2>Pokemon</h2>
      <form>
        <input type="text" />
        <button type="submit"> search</button>
      </form>
      {state === "loading" && <p>loading...</p>}
      {state === "success" && (
        <ul>
          {data.results.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
      {state === "error" && <p>{error}</p>}
    </>
  );
}

export default Pokemons;

import { useQuery } from "../hooks/useQuery";
import { useUser } from "../App";

// function useQueryUsers() {
//   const [state, setState] = useState("loading");
//   const [error, setError] = useState();
//   const [users, setUsers] = useState();

//   useEffect(() => {
//     // data is fetching
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         // data is fetched
//         // throw new Error("time limit exceeded");
//         setState("success");
//         console.log(data);
//         setUsers(data);
//       })
//       .catch((err) => {
//         setState("error");
//         setError(err.message);
//       });
//   }, []);

//   return { state, error, users };
// }

function ActionButtons() {
  const user = useUser();
  return (
    <>
      {user.role.includes("admin") && (
        <>
          <button>edit</button>
          <button>delete</button>{" "}
        </>
      )}

      {user && <button>view</button>}
    </>
  );
}

function Users() {
  const {
    state,
    error,
    data: users,
  } = useQuery("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      <h2>Users</h2>
      {state === "loading" && <p>loading...</p>}
      {state === "success" && (
        <ul>
          {users.map(({ name }) => (
            <li key={name}>
              {name} <ActionButtons />
            </li>
          ))}
        </ul>
      )}
      {state === "error" && <p>{error}</p>}
    </>
  );
}

export default Users;

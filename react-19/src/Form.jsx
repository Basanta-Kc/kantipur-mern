import { useActionState, useOptimistic, useState } from "react";
import "./App.css";
import { useFormStatus } from "react-dom";

const updateUserName = async (username) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  if (username.length < 4)
    throw new Error("username must have atleast 4 chars.");
  return username;
};

function App() {
  const [state, formAction] = useActionState(updateFormState, {
    name: "",
    error: null,
  });
  const [udpatedUsername, setUpdatedUsername] = useOptimistic(state.name);

  async function updateFormState(prevState, formData) {
    try {
      const username = formData.get("username");
      setUpdatedUsername(username);
      await updateUserName(username);
      return { name: username, error: null };
    } catch (error) {
      return { name: prevState.name, error };
    }
  }

  return (
    <>
      <title>Profile Page</title>
      <meta name="keywords" content="React" />
      <meta name="description" content="A site map for the React website" />
      <h2>Profile Page: {udpatedUsername} </h2>
      <form action={formAction}>
        <input type="text" name="username" />
        {state.error && <p>{state.error.message}</p>}
        <Button />
      </form>
    </>
  );
}

function Button() {
  // const { pending } = useFormStatus();
  // return <button type="submit">{pending ? "updating..." : "update"}</button>;
  return <button type="submit">update</button>;
}

export default App;

// twitter => 2like (backend X) 3comments

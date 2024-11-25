import { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "success":
      return { state: "success", error: null, data: action.payload };
    case "error":
      return { state: "error", error: action.payload, data: null };
  }
  return state;
}

const getValueFromLocalStorage = (state) => {

  return {}
}


export function useQuery(url) {
  //   const [state, setState] = useState("loading");
  //   const [error, setError] = useState();
  //   const [data, setData] = useState();

  const [{ state, error, data }, dispatch] = useReducer(reducer, {
    state: "loading",
    error: null,
    data: null,
  },);

  useEffect(() => {
    // data is fetching
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // data is fetched
        // throw new Error("time limit exceeded");
        // setState("success");
        // console.log(data);
        // setData(data);
        dispatch({ type: "success", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "error", payload: err.message });
        // setState("error");
        // setError(err.message);
      });
  }, []);

  return { state, error, data };
}

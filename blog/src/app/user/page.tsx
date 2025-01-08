// local state : useState, useReducer
// global: useContext (useState, useREducer, perf = useCallback, useMemo)
// global(frequently changes) => zustand, jotai,  (), redux, 
// server state: tanstakc-query(reqct-query)


import { Suspense, use } from "react";
const getPostAsync = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  const data = await res.json();
  return data;
};

function PostList() {
  const data = use(getPostAsync());

  return (
    <>
      {data.map(({ _id, title }) => (
        <li key={_id}>{title}</li>
      ))}
    </>
  );
}

export default function Posts() {
  return (
    <Suspense fallback="loading...">
      <PostList />
    </Suspense>
  );
}

import { useEffect, useState } from "react";

export default function useDebounce(search, delay = 1000) {
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedSearch(search);
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [search, delay]);

  return debouncedSearch;
}

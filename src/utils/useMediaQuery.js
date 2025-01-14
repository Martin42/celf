import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (e) => setMatches(e.matches);

    mediaQueryList.addEventListener("change", handleChange);

    // Prevent memory leaks
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;

// hooks/useMediaQuery.ts
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [isClient, setIsClient] = useState(false);
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    handleChange(); // set initial value
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [isClient, query]);

  return matches;
}

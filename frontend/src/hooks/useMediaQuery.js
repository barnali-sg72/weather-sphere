import { useState, useEffect } from 'react';

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);

    /*function handleChange(e: MediaQueryListEvent) {
        setMatches(e.matches);
    }
    isTablet.addEventListener("change", handleChange);*/
    const listener = (e) => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
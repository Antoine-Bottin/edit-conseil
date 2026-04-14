import { useState, useEffect, RefObject } from 'react';

// Added '| null' to the type definition here
export const useScroll = (ref?: RefObject<HTMLElement | null>) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Use an internal variable to handle the null check safely
    const currentRef = ref?.current;
    const target = currentRef ? currentRef : window;

    const handleScroll = () => {
      if (currentRef) {
        setScrollPosition({
          x: currentRef.scrollLeft,
          y: currentRef.scrollTop,
        });
      } else {
        setScrollPosition({
          x: window.scrollX,
          y: window.scrollY,
        });
      }
    };

    target.addEventListener('scroll', handleScroll, { passive: true });

    // Run once to catch initial position
    handleScroll();

    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, [ref]); // Still watch the ref object

  return scrollPosition;
};

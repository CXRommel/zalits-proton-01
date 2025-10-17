import { useState, useCallback, useRef, useEffect } from "react";

export function useAnimation(defaultDuration = 1000) {
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const triggerAnimation = useCallback(
    (duration = defaultDuration) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setIsAnimating(true);

      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        timeoutRef.current = null;
      }, duration);
    },
    [defaultDuration]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isAnimating,
    triggerAnimation,
  };
}

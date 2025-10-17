import { useState, useCallback, useRef, useEffect } from "react";

export function useInteractiveCard() {
  const [clickCount, setClickCount] = useState(0);
  const [isPartyMode, setIsPartyMode] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = useCallback(() => {
    setClickCount((prev) => {
      const newCount = prev + 1;

      if (newCount >= 3) {
        setIsPartyMode(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsPartyMode(false);
          setClickCount(0);
          timeoutRef.current = null;
        }, 13000);

        return 0;
      }

      return newCount;
    });
  }, []);

  const resetInteraction = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setClickCount(0);
    setIsPartyMode(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    clickCount,
    isPartyMode,
    handleClick,
    resetInteraction,
  };
}

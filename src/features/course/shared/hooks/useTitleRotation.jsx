import { useState, useCallback, useRef, useEffect } from "react";
import { getRandomTitleWithRotation } from "../utils/phraseUtils";

export function useTitleRotation() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [isRotating, setIsRotating] = useState(false);
  const [finalTitle, setFinalTitle] = useState("");
  const [isDisplayingFinal, setIsDisplayingFinal] = useState(false);
  const rotationRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const startRotation = useCallback(
    (options = {}) => {
      if (isRotating) return;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setIsRotating(true);
      setFinalTitle("");
      setIsDisplayingFinal(false);

      const { rotationCount = 6, maxSpeed = 80, minSpeed = 1000 } = options;

      getRandomTitleWithRotation(
        (title) => {
          setCurrentTitle(title);
        },
        (title) => {
          setFinalTitle(title);
          setCurrentTitle(title);
          setIsRotating(false);
          setIsDisplayingFinal(true);

          timeoutRef.current = setTimeout(() => {
            setIsDisplayingFinal(false);
            setCurrentTitle("");
            setFinalTitle("");
          }, 10000);
        },
        rotationCount,
        maxSpeed,
        minSpeed
      );
    },
    [isRotating]
  );

  const stopRotation = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsRotating(false);
    setIsDisplayingFinal(false);
  }, []);

  const resetRotation = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCurrentTitle("");
    setFinalTitle("");
    setIsRotating(false);
    setIsDisplayingFinal(false);
  }, []);

  return {
    currentTitle,
    finalTitle,
    isRotating,
    isDisplayingFinal,
    startRotation,
    stopRotation,
    resetRotation,
  };
}

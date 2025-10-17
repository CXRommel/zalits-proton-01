import phrasesData from "../../data/phrases.json";

export function getRandomTitleWithRotation(
  callback,
  onComplete,
  rotationCount = 5,
  maxSpeed = 100,
  minSpeed = 800
) {
  const { funnyTitles } = phrasesData;
  let currentIndex = 0;
  let iterations = 0;
  const totalIterations = rotationCount + Math.floor(Math.random() * 3);
  const shuffledTitles = shuffleArray([...funnyTitles]);

  function rotate() {
    const currentTitle = shuffledTitles[currentIndex];
    callback(currentTitle);

    currentIndex = (currentIndex + 1) % shuffledTitles.length;
    iterations++;

    if (iterations >= totalIterations) {
      const finalTitle = getFinalRandomTitle(currentTitle);
      setTimeout(() => {
        callback(finalTitle);
        onComplete(finalTitle);
      }, minSpeed);
      return;
    }

    const progress = iterations / totalIterations;
    const currentSpeed =
      maxSpeed + (minSpeed - maxSpeed) * Math.pow(progress, 2);
    setTimeout(rotate, currentSpeed);
  }

  rotate();
}

export function getRandomFunnyTitle() {
  const { funnyTitles } = phrasesData;
  const randomIndex = Math.floor(Math.random() * funnyTitles.length);
  return funnyTitles[randomIndex];
}

export function getTitleStats() {
  const { funnyTitles } = phrasesData;
  return {
    totalTitles: funnyTitles.length,
    categories: ["comedy"],
    sampleTitles: funnyTitles.slice(0, 3),
  };
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getFinalRandomTitle(excludeTitle) {
  const { funnyTitles } = phrasesData;
  const availableTitles = funnyTitles.filter((title) => title !== excludeTitle);
  const randomIndex = Math.floor(Math.random() * availableTitles.length);
  return availableTitles[randomIndex];
}

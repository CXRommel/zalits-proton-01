import { useState, useEffect } from "react";

/**
 * Example Timer Component
 *
 * This is another reference implementation showing how to create
 * a component for the Fight Section.
 *
 * Key principles demonstrated:
 * - Self-contained (no props required)
 * - Manages its own state with useEffect
 * - Uses Tailwind CSS for styling
 * - Responsive and visually appealing
 * - Handles cleanup properly
 */
function TimerComponent() {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(60);

  useEffect(() => {
    let interval = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, seconds]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(initialTime);
  };

  const addTime = (amount) => {
    setSeconds((prev) => Math.max(0, prev + amount));
  };

  const setPreset = (time) => {
    setIsRunning(false);
    setSeconds(time);
    setInitialTime(time);
  };

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return (seconds / initialTime) * 100;
  };

  const getTimerColor = () => {
    const percentage = getProgressPercentage();
    if (percentage > 50) return "text-green-400";
    if (percentage > 25) return "text-yellow-400";
    return "text-red-400";
  };

  const getProgressColor = () => {
    const percentage = getProgressPercentage();
    if (percentage > 50) return "bg-green-500";
    if (percentage > 25) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6">
      {/* Timer Display */}
      <div className="relative">
        <div className={`text-8xl font-bold ${getTimerColor()} transition-colors duration-300 tabular-nums`}>
          {formatTime(seconds)}
        </div>
        {seconds === 0 && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl animate-bounce">
            ⏰
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md bg-slate-700/50 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${getProgressColor()} transition-all duration-300 ease-linear`}
          style={{ width: `${getProgressPercentage()}%` }}
        />
      </div>

      {/* Main Controls */}
      <div className="flex gap-4">
        <button
          onClick={toggleTimer}
          disabled={seconds === 0}
          className={`px-8 py-3 rounded-lg border-2 font-semibold transition-all duration-200
            ${isRunning
              ? 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border-yellow-500/50 hover:border-yellow-500'
              : 'bg-green-500/20 hover:bg-green-500/30 text-green-300 border-green-500/50 hover:border-green-500'}
            ${seconds === 0 ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {isRunning ? '⏸ Pause' : '▶ Start'}
        </button>
        <button
          onClick={resetTimer}
          className="px-8 py-3 bg-slate-500/20 hover:bg-slate-500/30 text-slate-300 rounded-lg border-2 border-slate-500/50 hover:border-slate-500 transition-all duration-200 font-semibold"
        >
          🔄 Reset
        </button>
      </div>

      {/* Quick Time Adjustments */}
      <div className="flex gap-2">
        <button
          onClick={() => addTime(-10)}
          disabled={isRunning}
          className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded border border-red-500/50 hover:border-red-500 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          -10s
        </button>
        <button
          onClick={() => addTime(-5)}
          disabled={isRunning}
          className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded border border-red-500/50 hover:border-red-500 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          -5s
        </button>
        <button
          onClick={() => addTime(5)}
          disabled={isRunning}
          className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded border border-green-500/50 hover:border-green-500 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +5s
        </button>
        <button
          onClick={() => addTime(10)}
          disabled={isRunning}
          className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded border border-green-500/50 hover:border-green-500 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +10s
        </button>
      </div>

      {/* Preset Times */}
      <div className="w-full max-w-md">
        <div className="text-sm text-slate-400 mb-2 text-center">Quick Presets:</div>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => setPreset(30)}
            className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded border border-purple-500/50 hover:border-purple-500 transition-all duration-200 text-sm"
          >
            30s
          </button>
          <button
            onClick={() => setPreset(60)}
            className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded border border-purple-500/50 hover:border-purple-500 transition-all duration-200 text-sm"
          >
            1m
          </button>
          <button
            onClick={() => setPreset(300)}
            className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded border border-purple-500/50 hover:border-purple-500 transition-all duration-200 text-sm"
          >
            5m
          </button>
          <button
            onClick={() => setPreset(600)}
            className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded border border-purple-500/50 hover:border-purple-500 transition-all duration-200 text-sm"
          >
            10m
          </button>
        </div>
      </div>

      {/* Status */}
      <div className="text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700">
          <span className="text-sm text-slate-400">
            Status:{' '}
            <span className={isRunning ? 'text-green-400' : 'text-slate-300'}>
              {isRunning ? '🟢 Running' : '⚪ Paused'}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TimerComponent;

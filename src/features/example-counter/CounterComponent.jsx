import { useState } from "react";

/**
 * Example Counter Component
 *
 * This is a reference implementation showing how to create
 * a component for the Fight Section.
 *
 * Key principles demonstrated:
 * - Self-contained (no props required)
 * - Manages its own state
 * - Uses Tailwind CSS for styling
 * - Responsive and visually appealing
 * - Clean and simple implementation
 */
function CounterComponent() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    setCount(prev => prev + 1);
    setHistory(prev => [...prev, 'Incremented'].slice(-5));
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    setHistory(prev => [...prev, 'Decremented'].slice(-5));
  };

  const reset = () => {
    setCount(0);
    setHistory(prev => [...prev, 'Reset'].slice(-5));
  };

  const getCountColor = () => {
    if (count > 0) return "text-green-400";
    if (count < 0) return "text-red-400";
    return "text-slate-300";
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6">
      {/* Display */}
      <div className="text-center">
        <div className={`text-7xl font-bold ${getCountColor()} transition-colors duration-300`}>
          {count}
        </div>
        <div className="text-sm text-slate-400 mt-2">Current Count</div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg border-2 border-red-500/50 hover:border-red-500 transition-all duration-200 font-semibold"
        >
          - Decrement
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-slate-500/20 hover:bg-slate-500/30 text-slate-300 rounded-lg border-2 border-slate-500/50 hover:border-slate-500 transition-all duration-200 font-semibold"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-6 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-lg border-2 border-green-500/50 hover:border-green-500 transition-all duration-200 font-semibold"
        >
          + Increment
        </button>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="w-full max-w-md">
          <div className="text-sm text-slate-400 mb-2">Recent Actions:</div>
          <div className="space-y-1">
            {history.map((action, index) => (
              <div
                key={index}
                className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded"
                style={{ opacity: 0.5 + (index * 0.1) }}
              >
                {action}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-md">
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-green-400">
            {Math.max(0, count)}
          </div>
          <div className="text-xs text-slate-400">Positive</div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-slate-300">
            {Math.abs(count)}
          </div>
          <div className="text-xs text-slate-400">Absolute</div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-red-400">
            {Math.abs(Math.min(0, count))}
          </div>
          <div className="text-xs text-slate-400">Negative</div>
        </div>
      </div>
    </div>
  );
}

export default CounterComponent;

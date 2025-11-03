import { useState } from "react";

/**
 * Template Component for Fight Section
 *
 * INSTRUCTIONS:
 * 1. Copy this entire folder and rename it (e.g., "my-awesome-feature")
 * 2. Rename this file to match your component (e.g., "AwesomeComponent.jsx")
 * 3. Rename the function below to match your component name
 * 4. Update the export in index.js
 * 5. Implement your component logic below
 * 6. Register in src/shared/fight-registry/registry.js
 *
 * RULES:
 * ✅ Must be self-contained (no props)
 * ✅ Use useState/useEffect for state
 * ✅ Use Tailwind CSS for styling
 * ✅ Clean up effects properly
 * ✅ Keep it responsive
 *
 * EXAMPLE WORKFLOW:
 * 1. Copy: cp -r _template-fight-component my-feature
 * 2. Rename files and functions
 * 3. Code your component
 * 4. Add to registry.js
 */
function MyComponent() {
  // ========================================================================
  // STATE - Add your state variables here
  // ========================================================================

  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // ========================================================================
  // EFFECTS - Add your useEffect hooks here
  // ========================================================================

  // Example: Cleanup pattern
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Do something
  //   }, 1000);
  //
  //   return () => clearInterval(interval); // Always cleanup!
  // }, [dependencies]);

  // ========================================================================
  // HANDLERS - Add your event handlers here
  // ========================================================================

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleToggle = () => {
    setIsActive(prev => !prev);
  };

  const handleReset = () => {
    setCount(0);
    setIsActive(false);
  };

  // ========================================================================
  // HELPERS - Add helper functions here
  // ========================================================================

  const getStatusColor = () => {
    return isActive ? "text-green-400" : "text-slate-400";
  };

  // ========================================================================
  // RENDER - Customize your UI here
  // ========================================================================

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-2">
          Your Component Name
        </h3>
        <p className="text-sm text-slate-400">
          Replace this with your description
        </p>
      </div>

      {/* Main Display */}
      <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 min-w-[300px]">
        <div className="text-center space-y-4">
          {/* Value Display */}
          <div className={`text-6xl font-bold ${getStatusColor()} transition-colors duration-300`}>
            {count}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-slate-500'} transition-colors`} />
            <span className="text-sm text-slate-400">
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <button
          onClick={handleIncrement}
          className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg border-2 border-blue-500/50 hover:border-blue-500 transition-all duration-200 font-semibold"
        >
          Increment
        </button>

        <button
          onClick={handleToggle}
          className="px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg border-2 border-purple-500/50 hover:border-purple-500 transition-all duration-200 font-semibold"
        >
          Toggle
        </button>

        <button
          onClick={handleReset}
          className="px-6 py-3 bg-slate-500/20 hover:bg-slate-500/30 text-slate-300 rounded-lg border-2 border-slate-500/50 hover:border-slate-500 transition-all duration-200 font-semibold"
        >
          Reset
        </button>
      </div>

      {/* Additional Info/Stats */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4">
        <div className="bg-slate-800/30 rounded-lg p-4 text-center border border-slate-700/50">
          <div className="text-2xl font-bold text-purple-400">{count}</div>
          <div className="text-xs text-slate-400 mt-1">Total Count</div>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-4 text-center border border-slate-700/50">
          <div className="text-2xl font-bold text-blue-400">
            {isActive ? '✓' : '✗'}
          </div>
          <div className="text-xs text-slate-400 mt-1">Status</div>
        </div>
      </div>

      {/* Footer/Notes */}
      <div className="text-xs text-slate-500 text-center max-w-md">
        💡 Tip: Replace this template with your own implementation.
        Check the example-counter and example-timer features for inspiration!
      </div>
    </div>
  );
}

export default MyComponent;

import { useEffect, useState } from "react";
import { getComponentById } from "#src/shared/fight-registry/registry";

/**
 * Standalone Menu Viewer
 *
 * This page displays a single menu component in isolation.
 * It reads the component ID from URL parameters and renders it.
 *
 * Usage: /menu?id=component-id
 */
function StandaloneMenuViewer() {
  const [component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get component ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const componentId = urlParams.get("id");

    if (!componentId) {
      setError("No component ID provided in URL");
      return;
    }

    // Get component from registry
    const foundComponent = getComponentById(componentId);

    if (!foundComponent) {
      setError(`Component with ID "${componentId}" not found`);
      return;
    }

    setComponent(foundComponent);
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="bg-red-500/10 border-2 border-red-500/50 rounded-lg p-8 max-w-md">
          <div className="text-6xl text-center mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-red-400 mb-2 text-center">
            Error
          </h1>
          <p className="text-red-300 text-center">{error}</p>
          <button
            onClick={() => window.close()}
            className="mt-6 w-full bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  if (!component) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-slate-400 text-lg">Loading component...</p>
        </div>
      </div>
    );
  }

  const { Component, name, author, description } = component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-1">{name}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>by {author}</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">{description}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                title="Print"
              >
                <span className="text-lg">🖨️</span>
                <span className="hidden sm:inline">Print</span>
              </button>
              <button
                onClick={() => window.close()}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                title="Close"
              >
                <span className="text-lg">✖️</span>
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Component Display */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
          <Component />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-800/30 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-slate-500 text-sm">
          <p>
            Zalits Proton - Component Viewer
            <span className="mx-2">•</span>
            Standalone View
          </p>
        </div>
      </div>
    </div>
  );
}

export default StandaloneMenuViewer;

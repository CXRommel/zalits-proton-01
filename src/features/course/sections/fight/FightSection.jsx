import { useState } from "react";
import ComponentSelector from "./ComponentSelector";
import { getAvailableComponents } from "#src/shared/fight-registry/registry";

function FightSection() {
  const [leftComponent, setLeftComponent] = useState(null);
  const [rightComponent, setRightComponent] = useState(null);

  const availableComponents = getAvailableComponents();

  const openInNewWindow = (componentId) => {
    const url = `${window.location.origin}/?standalone=true&id=${componentId}`;
    window.open(url, "_blank", "width=1200,height=800");
  };

  return (
    <section id="fight-section" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            ⚔️ Component Fight Arena ⚔️
          </h2>
          <p className="text-xl text-purple-200">
            Compare components side by side. Choose your fighters!
          </p>
        </div>

        {/* Fight Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-18">
          {/* Left Side */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border-2 border-blue-500/50">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">
                🔵 Left Fighter
              </h3>
              <ComponentSelector
                availableComponents={availableComponents}
                selectedComponent={leftComponent}
                onSelect={setLeftComponent}
                side="left"
                otherSelectedComponentId={rightComponent?.id}
              />
            </div>

            {/* Left Component Display */}
            <div className="overflow-auto bg-slate-800/50 rounded-lg p-6 border-2 border-blue-500/30 h-[600px]">
              {leftComponent ? (
                <div className="h-full">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-blue-500/30">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-300 font-semibold">
                        {leftComponent.name}
                      </span>
                      <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
                        by {leftComponent.author}
                      </span>
                    </div>
                    <button
                      onClick={() => openInNewWindow(leftComponent.id)}
                      className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-3 py-1.5 rounded text-sm transition-colors flex items-center gap-1.5"
                      title="Open in new window"
                    >
                      <span className="text-base">🪟</span>
                      <span className="hidden sm:inline">Open</span>
                    </button>
                  </div>
                  <div className="component-wrapper grid grid-cols-1">
                    <leftComponent.Component />
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎯</div>
                    <p>Select a component to mount</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* VS Badge (centered between panels) */}
          <div className="lg:absolute sm:row-span-1 justify-self-center place-items-center place-self-center">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-4xl px-8 py-4 rounded-full shadow-2xl border-4 border-white/20 animate-pulse">
              VS
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border-2 border-red-500/50">
              <h3 className="text-2xl font-bold text-red-300 mb-4 text-center">
                🔴 Right Fighter
              </h3>
              <ComponentSelector
                availableComponents={availableComponents}
                selectedComponent={rightComponent}
                onSelect={setRightComponent}
                side="right"
                otherSelectedComponentId={leftComponent?.id}
              />
            </div>

            {/* Right Component Display */}
            <div className="overflow-auto bg-slate-800/50 rounded-lg p-6 border-2 border-red-500/30 h-[600px]">
              {rightComponent ? (
                <div className="h-full">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-red-500/30">
                    <div className="flex items-center gap-2">
                      <span className="text-red-300 font-semibold">
                        {rightComponent.name}
                      </span>
                      <span className="text-xs text-red-400 bg-red-500/20 px-2 py-1 rounded">
                        by {rightComponent.author}
                      </span>
                    </div>
                    <button
                      onClick={() => openInNewWindow(rightComponent.id)}
                      className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-3 py-1.5 rounded text-sm transition-colors flex items-center gap-1.5"
                      title="Open in new window"
                    >
                      <span className="text-base">🪟</span>
                      <span className="hidden sm:inline">Open</span>
                    </button>
                  </div>
                  <div className="component-wrapper">
                    <rightComponent.Component />
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎯</div>
                    <p>Select a component to mount</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-purple-500/10 rounded-lg p-6 border border-purple-500/30">
          <h4 className="text-lg font-semibold text-purple-300 mb-3">
            📝 How to add your component:
          </h4>
          <ol className="text-purple-200 space-y-2 list-decimal list-inside">
            <li>
              Create your component in the{" "}
              <code className="bg-purple-500/20 px-2 py-1 rounded text-sm">
                components/
              </code>{" "}
              folder
            </li>
            <li>
              Register it in{" "}
              <code className="bg-purple-500/20 px-2 py-1 rounded text-sm">
                registry.js
              </code>
            </li>
            <li>Your component will automatically appear in the selector!</li>
            <li>Follow the component rules to ensure compatibility</li>
          </ol>
        </div>
      </div>
    </section >
  );
}

export default FightSection;

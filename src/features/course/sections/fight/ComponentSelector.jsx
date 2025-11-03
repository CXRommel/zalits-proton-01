function ComponentSelector({
  availableComponents,
  selectedComponent,
  onSelect,
  side,
}) {
  const sideColors = {
    left: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      hover: "hover:bg-blue-500/20",
      text: "text-blue-300",
      focus: "focus:border-blue-500",
    },
    right: {
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      hover: "hover:bg-red-500/20",
      text: "text-red-300",
      focus: "focus:border-red-500",
    },
  };

  const colors = sideColors[side] || sideColors.left;

  return (
    <div className="space-y-3">
      <label className={`block text-sm font-medium ${colors.text}`}>
        Select Component
      </label>
      <select
        value={selectedComponent?.id || ""}
        onChange={(e) => {
          const component = availableComponents.find(
            (c) => c.id === e.target.value
          );
          onSelect(component || null);
        }}
        className={`
          w-full px-4 py-3 rounded-lg
          ${colors.bg} ${colors.border} ${colors.text}
          border-2 ${colors.hover} ${colors.focus}
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
          cursor-pointer
          text-white
        `}
      >
        <option value="" className="bg-slate-800 text-slate-300">
          -- Choose a component --
        </option>
        {availableComponents.map((component) => (
          <option
            key={component.id}
            value={component.id}
            className="bg-slate-800 text-white"
          >
            {component.name} - by {component.author}
          </option>
        ))}
      </select>

      {selectedComponent && (
        <div className="mt-2 p-3 bg-slate-900/50 rounded border border-slate-700">
          <p className="text-sm text-slate-300">{selectedComponent.description}</p>
        </div>
      )}
    </div>
  );
}

export default ComponentSelector;

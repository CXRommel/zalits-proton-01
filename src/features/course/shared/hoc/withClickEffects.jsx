import { useState, forwardRef } from "react";

const withClickEffects = (WrappedComponent) => {
  const WithClickEffectsComponent = forwardRef((props, ref) => {
    const [ripples, setRipples] = useState([]);

    const createRipple = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;
      const x = event.clientX - rect.left - radius;
      const y = event.clientY - rect.top - radius;

      const rippleId = Date.now() + Math.random();
      const newRipple = { id: rippleId, x, y, diameter };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== rippleId));
      }, 600);
    };

    return (
      <div
        className="relative overflow-hidden"
        onClick={createRipple}
        style={{ isolation: "isolate" }}
      >
        <WrappedComponent ref={ref} {...props} />

        {ripples.map((ripple) => (
          <RippleElement key={ripple.id} ripple={ripple} />
        ))}
      </div>
    );
  });

  WithClickEffectsComponent.displayName = `withClickEffects(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithClickEffectsComponent;
};

function RippleElement({ ripple }) {
  return (
    <>
      <span
        className="absolute bg-white/30 rounded-full pointer-events-none"
        style={{
          left: `${ripple.x}px`,
          top: `${ripple.y}px`,
          width: `${ripple.diameter}px`,
          height: `${ripple.diameter}px`,
          animation: "ripple 0.6s linear forwards",
          transform: "scale(0)",
        }}
      />

      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}

export default withClickEffects;

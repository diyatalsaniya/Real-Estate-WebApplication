import React, { useState, useRef, useCallback } from 'react';

/**
 * RippleButton — a self-contained button with a Material-style ripple effect.
 * Drop-in replacement; accepts all standard button props + className.
 */
const RippleButton = ({ children, onClick, className = '', style = {}, ...rest }) => {
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);

  const addRipple = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // diameter = longest side so ripple always covers the whole button
    const size = Math.max(rect.width, rect.height) * 2;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y, size }]);

    // Remove ripple after animation ends
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    if (onClick) onClick(e);
  }, [onClick]);

  return (
    <button
      ref={containerRef}
      onClick={addRipple}
      className={`relative overflow-hidden ${className}`}
      style={style}
      {...rest}
    >
      {children}

      {/* Render all active ripple circles */}
      {ripples.map(({ id, x, y, size }) => (
        <span
          key={id}
          style={{
            position: 'absolute',
            left: x - size / 2,
            top: y - size / 2,
            width: size,
            height: size,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.35)',
            transform: 'scale(0)',
            animation: 'ripple-expand 0.6s ease-out forwards',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Keyframe injected once */}
      <style>{`
        @keyframes ripple-expand {
          to { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </button>
  );
};

export default RippleButton;

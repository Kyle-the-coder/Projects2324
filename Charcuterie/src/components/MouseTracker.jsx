import React, { useState, useEffect } from "react";

export function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div
        className="mouse-tracker"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      ></div>
    </div>
  );
}

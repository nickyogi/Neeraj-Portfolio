import React, { useEffect, useState } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-10 h-10 rounded-full border-[1px] border-white bg-transparent transition-transform duration-75 ease-linear"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`
      }}
    />
  );
}

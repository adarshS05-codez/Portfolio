import React, { useEffect, useRef } from 'react';
import '../styles/cursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
      if (ringRef.current) {
        // Slight lag for the ring
        setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.left = e.clientX + 'px';
            ringRef.current.style.top = e.clientY + 'px';
          }
        }, 60);
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

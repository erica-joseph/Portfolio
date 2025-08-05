import React, { useState, useRef } from 'react';

const DraggableWindow = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    // Add mouse listeners to the whole document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const newX = e.clientX - offset.current.x;
    const newY = e.clientY - offset.current.y;
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: 300,
        height: 200,
        border: '2px solid black',
        backgroundColor: 'white',
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 10,
      }}
    >
      <div
        style={{
          backgroundColor: '#444',
          color: 'white',
          padding: '8px',
          cursor: 'move',
          userSelect: 'none',
        }}
        onMouseDown={handleMouseDown}
      >
        Drag Me!
      </div>
      <div style={{ padding: '10px' }}>
        <p>This is a draggable window.</p>
        <p>Try dragging the top bar!</p>
      </div>
    </div>
  );
};

export default DraggableWindow;

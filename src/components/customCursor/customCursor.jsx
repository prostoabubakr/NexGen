import React, { useEffect } from 'react';
import './customCursor.css'; // Add the necessary CSS

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  }, []);

  return <div className="custom-cursor" />;
};

export default CustomCursor;

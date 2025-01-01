import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 30); 
      return () => clearTimeout(timeout);
    } else {
      onComplete && onComplete();
    }
  }, [currentIndex, text]);

  return <p>{displayedText}</p>;
};

export default TypingEffect;
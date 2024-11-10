import React, { useEffect, useRef, useState } from "react";
import "./FadeInContent.css";

function FadeInContent({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your callback, check for the first entry (if multiple are observed) and its 'isIntersecting' property
      if (entries[0].isIntersecting) {
        setVisible(true);
        // Once we have the entry we're looking for, we can stop observing it
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.disconnect(); // Clean up the observer on component unmount
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInContent;

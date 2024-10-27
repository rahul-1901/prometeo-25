import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NotFound.css"
import sadPenguinImage from '../assets/sad-penguin.png';
import FadeIn from '../components/stars';

const NotFound = () => {
  return (
    <FadeIn duration={500}>
      <div className="notfound">
        <div className="container">
          <h1>404 - Page Not Found</h1>
          <img src={sadPenguinImage} alt="Sad Penguin" />
        </div>
        <h3
          style={{
            marginTop: "10px",
            fontWeight: "300",
            fontFamily: "Share Tech, sans-serif",
          }}
        >
          Sorry, the page you're looking for seems to be missing or the link is
          incorrect.
        </h3>
        <NavLink to="/">
          <button className="back">Go Back to Home</button>
        </NavLink>
      </div>
    </FadeIn>
  );
}

export default NotFound

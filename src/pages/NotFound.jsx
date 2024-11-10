import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import sadPenguinImage from "../assets/sad-penguin.webp";
import { HOME_PAGE_URL } from "../config";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notFound-container">
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
      <Link to={HOME_PAGE_URL}>
        <button className="notFound-back-btn">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;

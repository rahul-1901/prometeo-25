import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import sadPenguinImage from "../assets/sad-penguin.webp";
import { HOME_PAGE_URL } from "../config";
import pageNot from "../assets/pageNot.png";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notFound-container">
        <img className="" src={pageNot}></img>
      </div>
      <h3>
        This page didn't get the invite to <b>Prometeo</b>. But don't worry—<b>you did!</b> Let's get you back on <Link to="/"><b>Home Page</b></Link>
      </h3>
    </div>
  );
};

export default NotFound;

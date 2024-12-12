import { useProgress } from "@react-three/drei";
import { Link } from "react-router-dom";
import { usePlay } from "./Play";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import '../Navbar.css'

export default function OverlayLanding() {
    const { progress } = useProgress();
    const { play, end, setPlay, hasScroll } = usePlay();
    const { user } = useContext(AuthContext);
    return (
      <div
        className={`overlay ${play ? "overlay--disable" : ""}
      ${hasScroll ? "overlay--scrolled" : ""}`}
      > 
        <div
          className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
        />
        {progress === 100 && (
          <div className={`intro ${play || end ? "intro--disappear" : ""}`}>
            <h1 className="logo-home">
              Prometeo '25
            </h1>
            <p className="intro__scroll">Scroll to begin the journey</p>
            <button
              className="explore"
              onClick={() => {
                  setPlay(true);
              }}
            >
              Start the Journey
            </button>
          </div>
        )}
        <div className={`outro ${end ? "outro--appear" : ""}`}>
          {/* <p className="outro__text" onClick={() => {
            // console.log("clicked")
            window.location.href = "/register";
          }}>Ending text</p> */}
            <button className="outro__text" onClick={() => {
                  window.location.reload(false);
              }}>Restart Journey</button>
          <div className="__text_group">
          <Link to="/register">
          
            <button className="__text" o>Register</button>
          </Link>
          <Link to="/events">
            <button className="__text">Events</button>
          </Link>
          </div>
        </div>
      </div>
    );
  };

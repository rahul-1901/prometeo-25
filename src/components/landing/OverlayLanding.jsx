import { useProgress } from "@react-three/drei";
import { Link } from "react-router-dom";
//import { usePlay } from "../contexts/Play";
import { usePlay } from "./Play";
import { useState, useContext } from "react";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
import smallLogo from "../../assets/logo.gif";
import { HOME_PAGE_URL } from "../../config";
import AuthContext from "../../context/AuthContext";
import Navbar from "../Navbar";
import '../Navbar.css'

const navlinks = [
  {
    path: "/theme",
    name: "Theme",
  },

  {
    path: "/ca",
    name: "Campus Ambassador",
  },
  {
    path: "/accommodation",
    name: "Accommodation",
  },
  // {
  //   path: "/sponsors",
  //   name: "Sponsors",
  // },
  // {
  //   path: "/past-speakers",
  //   name: "Past Speakers",
  // },
  {
    path: "/events",
    name: "Events",
  },
  // {
  //   path: "/workshop",
  //   name: "Workshops",
  // },
  // {
  //   path: "/informals",
  //   name: "Informals",
  // },
  {
    path: "/team",
    name: "Team",
  },

  // {
  //   path: "/preregister",
  //   name: "Pre-register",
  // },
];

export default function OverlayLanding() {
    const { progress } = useProgress();
    const { play, end, setPlay, hasScroll } = usePlay();
    const { user } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState("");
    return (
      <div
        className={`overlay ${play ? "overlay--disable" : ""}
      ${hasScroll ? "overlay--scrolled" : ""}`}
      > 
        {/* <Navbar/> */}
        <div className="navbar">
          <Link to={HOME_PAGE_URL}>
            <img
              className="home-img"
              src={smallLogo}
              alt="click to go home"
              onClick={() => {
                setSelected("");
                setToggle(false);
              }}
            />
          </Link>
          <div className="nav-links-container">
            {navlinks.map((item, index) => {
              return (
                <Link key={index} to={`${item.path}`} className="nav-links">
                  <div
                    onClick={() => setSelected(item.name)}
                    className={selected === item.name ? "highlight" : ""}
                  >
                    {item.name}
                  </div>
                </Link>
              );
            })}
            <div className="">
              {!user ? (
                <Link to="/register">
                  <button
                    onClick={() => setSelected("register")}
                    className={selected === "register" ? "" : "register"}
                  >
                    REGISTER
                  </button>
                </Link>
              ) : (
                <Link to="/dashboard">
                  <button
                    onClick={() => setSelected("register")}
                    className={selected === "register" ? "" : "register"}
                  >
                    Dashboard
                  </button>
                </Link>
              )}
              {/* <button className="login">LOGIN</button> */}
            </div>
          </div>
        </div>
        <div
          className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
        />
        {progress === 100 && (
          <div className={`intro ${play ? "intro--disappear" : ""}`}>
            <h1 className="logo">
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
          <p className="outro__text">Ending text</p>
        </div>
      </div>
    );
  };

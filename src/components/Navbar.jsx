import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import smallLogo from "../assets/logo.gif";
import React, { useContext } from "react";
import { HOME_PAGE_URL } from "../config";
import AuthContext from "../context/AuthContext";
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

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div id="navbar">
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

      <div className="nav-mobile-container">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`nav-mobile ${toggle ? "active" : ""}`}>
          <div className="nav-mobile-links-container">
            {navlinks.map((item, index) => (
              <Link key={index} to={`${item.path}`} className="nav-links">
                <div
                  onClick={() => {
                    // setSelected(item.name);
                    setToggle((prev) => !prev);
                  }}
                  // className={selected === item.name ? "highlight" : ""}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <div
              className=""
              onClick={() => {
                // setSelected(item.name);
                setToggle((prev) => !prev);
              }}
            >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
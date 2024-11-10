import React, { useState, useEffect, useContext, useRef } from "react";
import AuthContext from "../context/AuthContext";
import "./dashboard.css";
import bg from "../assets/tpalace.webp";
// import EventPasses from "./eventPasses";
import useAxios from "../context/UseAxios";
import { API_BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import king from "../assets/dashboard/king.png";
import queen from "../assets/dashboard/queen.png";
import EventPasses from "./eventPasses";
import { toPng } from "html-to-image";

const Dasboard = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const api = useAxios();
  const [userPassDetails, setUserPassDetails] = useState({});
  const [passCondition, setPassCondition] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
    const userDetails = async () => {
      const response = await api.get(`${API_BASE_URL}/accounts/userdata/`);
      if (response.status === 200) {
        setUserData(response.data);
        // console.log(response.data);
      } else {
        console.log("error");
      }
    };
    userDetails();
  }, []);

  useEffect(() => {
    const userDetails = async () => {
      const response = await api.get(`${API_BASE_URL}/accounts/user-passes/`);
      if (response.status === 200) {
        setPassCondition(true);
        setUserPassDetails(response.data);
      } else if (response.status === 400) {
        setPassCondition(false);
      }
    };
    console.log(userPassDetails);
    userDetails();
  }, []);

  const ref = useRef(null);
  const downloadPng = async () => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download =
          userData.first_name + "_" + userPassDetails[0].name + ".png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePass = () => {
    if (passCondition) {
      downloadPng();
    } else {
      navigate("/accommodation");
    }
  };

  return (
    <div className="dashboard__main" style={{ backgroundImage: `url(${bg})` }}>
      <div className="dashboard-title">
        <h1 className="m-0 heading">Dashboard</h1>
        <h2 className="m-0 heading">Personal Details</h2>
      </div>
      <div className="dashboard__upper">
        <div className="dashboard__profile">
          <div className="user_image">
            {userData.gender === "Male" ? (
              <img src={king} />
            ) : (
              <img src={queen} />
            )}
          </div>
          <div className="user_text">
            {userData.first_name + " " + userData.last_name}
          </div>
          {/* <div className="user_text">{userData.email}</div> */}
          {/* <div className="user_text">{userData.college}</div> */}
          <button
            onClick={() => navigate("/edit-profile")}
            style={{ marginTop: "5px", marginBottom: "5px" }}
          >
            Edit Profile
          </button>
        </div>
        <div className="dashboard__description">
          <div className="user__line">
            <div className="user__left">Full Name</div>
            <div className="user__right">
              {userData.first_name + " " + userData.last_name}
            </div>
          </div>
          <hr />
          <div className="user__line">
            <div className="user__left">Email</div>
            <div className="user__right">{userData.email}</div>
          </div>
          <hr />
          <div className="user__line">
            <div className="user__left">College</div>
            <div className="user__right">{userData.college}</div>
          </div>
          <hr />
          <div className="user__line">
            <div className="user__left">Contact</div>
            <div className="user__right">{userData.contact}</div>
          </div>
          <hr />
          <div className="user__line">
            <div className="user__left">CA</div>
            <div className="user__right">
              {userData.ambassador === true ? "Yes" : "No"}
            </div>
          </div>
          <hr />
          {userData.ambassador === true ? (
            <div className="user__line">
              <div className="user__left">Invite Referral</div>
              <div className="user__right">{userData.invite_referral}</div>
            </div>
          ) : (
            <></>
          )}
          {userData.ambassador === true ? <hr /> : <></>}
          {userData.ambassador === true ? (
            <div className="user__line">
              <div className="user__left">CA Stats</div>
              <div className="user__right">Contact PR after 10 reg </div>
            </div>
          ) : (
            <></>
          )}
          {userData.ambassador === true ? <hr /> : <></>}

          <div className="user__line">
            <div className="user__left">Accommodation Status</div>
            <div className="user__right">
              {passCondition
                ? userPassDetails[0].name === "Accommodation"
                  ? "Paid"
                  : "Unpaid"
                : "Unpaid"}
            </div>
          </div>
          <hr />

          <div className="user__line">
            <div className="user__left">Pass Status</div>
            <div className="user__right">
              {passCondition === true ? userPassDetails[0].name : "NIL"}
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="dashboard_button">
        <button onClick={handlePass}>
          {passCondition ? "Download Pass" : "Buy Pass"}
        </button>
        <button onClick={logoutUser} style={{ color: "red" }}>
          Logout
        </button>
      </div>
      <div className="dashboard__passes">
        {passCondition === true ? (
          <div ref={ref} className="dashboard_pass_element">
            <EventPasses
              passType={userPassDetails[0].name}
              regId={userData.registration_id}
              fName={userData.first_name}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Dasboard;

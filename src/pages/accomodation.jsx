import React, { useEffect, useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageLoader from "../components/PageLoader";
import FadeIn from "../components/FadeIn";
import Go2Top from "../components/Go2Top";
import "./accomodation.css";
import bg from "../assets/Background.jpg";
import aboutUsImage from "../assets/About Us.jpg";
import instru1 from "../assets/instru1.jpg";

import guideImage from "../assets/guidelines.jpg";
import PassesCard from "../components/passesCard";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxios from "../context/UseAxios";
import { API_BASE_URL } from "../config";
import image4 from "../assets/hostels/image4.webp";
import image5 from "../assets/hostels/image5.webp";
import image7 from "../assets/hostels/image7.webp";
import image9 from "../assets/hostels/image9.webp";
import image10 from "../assets/hostels/image10.webp";
import image11 from "../assets/hostels/image11.webp";

const Accomodation = () => {
  const api = useAxios();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);

  const IMAGES = [{ id: "1", url: bg }];

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;

    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // Simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setLoading(false))
      .catch((err) => console.log("Failed to load images", err));

    const fetchProfileData = async () => {
      try {
        if (user) {
          const response = await api.get(`${API_BASE_URL}/accounts/userdata/`);
          setIsProfileCompleted(response.data.isProfileCompleted);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleAccRegistration = () => {
    if (!user) {
      navigate("/register");
    } else {
      if (isProfileCompleted) {
        navigate("/dashboard");
      } else {
        // Redirect to profile completion page
        toast.error("Please complete your profile first");
        navigate("/edit-profile");
        console.log("Profile not completed");
      }
    }
  };

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div
            className="accomodation-main"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="acc-header">
              {/*<h1>Accommodation</h1>
              <p>A COMFORTABLE AND CONVENIENT ACCOMMODATION IN PROMETEO</p> */}
            </div>
            <div className=" acc-passes">
              {/* <PassesCard /> */}
            </div>
            <div className="acc-content">
              <div className="acc-content-text">
                {/* Replacing the About Us text with the image */}
                <img
                  src={aboutUsImage} // The path to your JPG image
                  alt="About Us"
                  className="about-us-image" // Add styling for the image if needed
                />
              </div>
              <div className="acc-content-list">
                <img
                  src={guideImage} // Replace with the path to your guidelines.png
                  alt="Guidelines"
                  className="guidelines-image" // Custom class for styling the image
                />
              </div>
              <div className="acc-content-list">
              <img src={instru1}
              alt="instructions for school students"
              classname="instr-student" />
              </div>
              <button onClick={handleAccRegistration} className="acc-button">
                <span className="button-text">Register</span>
              </button>
            </div>
            <Go2Top />
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Accomodation;

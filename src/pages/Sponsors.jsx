import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Sponsors.css";
import PageLoader from "../components/PageLoader";
import Go2Top from "../components/Go2Top";
import FadeIn from "../components/FadeIn";
import { useNavigate } from "react-router-dom";
import useAxios from "../context/UseAxios";
import { API_BASE_URL } from "../config";
import FadeInContent from "../components/FadeInContent";
import Heading from "../components/Heading";
import bg_first from "../assets/sponsors/sp bg.jpg";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [loading, setLoading] = useState(true);

  const IMAGES = [
    {
      id: "1",
      url: bg_first,
    },
  ];

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

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div className="container-spos"
            {/* Title Section with Background Image */}
            
              style={{ backgroundImage: `url(${bg_first})` }}
            >
              <div className="overLayer"></div>
              <div className="sponsors-title-main">
                <p className="title-sponsors" style={{ backgroundImage: `url(${bg_first})` }}>
                  SPONSORS
                </p>
              </div>
              <div className="gradient_first"></div>
            </div>

            {/* Sponsors List */}
            {Object.keys(sponsors).map((spos, index) => (
              <FadeInContent key={index}>
                <div className="spos">
                  <div className="spos-title">
                    <h1>{spos}</h1>
                  </div>
                  <div className="spos-image">
                    {sponsors[spos].map((sponsor) => (
                      <img
                        src={`${API_BASE_URL}${sponsor.image}`}
                        alt={sponsor.name}
                        key={sponsor.name}
                      />
                    ))}
                  </div>
                </div>
                <hr />
              </FadeInContent>
            ))}
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Sponsors;

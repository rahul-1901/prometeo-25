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
import bg_first from "../assets/sponsors/spBg.jpg";



const Sponsors = () => {
  const [sponsors, setSponsors] = useState({}); 
  const [loading, setLoading] = useState(true);
  const [isProfileCompleted, setIsProfileCompleted] = useState(false); 
  const api = useAxios(); 

  const IMAGES = [
    {
      id: "1",
      url: bg_first,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const navBarEle = document.getElementById("navbar");
    if (navBarEle) {
      navBarEle.style.opacity = 1;
    }

    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setLoading(false))
      .catch((err) => console.error("Failed to load images", err));

      const fetchProfileData = async () => {
        try {
          const response = await axios.get("https://api.prometeo.in/home/sponsors/");
          // console.log('API Response:', response.data);
          setIsProfileCompleted(response.data.isProfileCompleted);
          setSponsors(response.data.Sponsors || {}); 
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
          <div className="sponsorsPage" style={{ backgroundImage: `url(${bg_first})` }}>
            <div
              className="container-spos"
              
              >
              <div className="sponsors-title-main">
                <p className="title-sponsors">Current Sponsors</p>
                
             
              </div>

             
            </div>

            
           {/* {Object.keys(sponsors).map((spos, index) => (
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
            ))} */}
      {Object.keys(sponsors).map((category, index) => (
  <FadeInContent key={index}>
    <div className="spos"  >
      <div className="spos-title">
        <h1>{category}</h1>
      </div>
      <div className="spos-image" style={{display:"flex",flexDirection:"row" , alignItems:"center"
    }}>
        {sponsors[category] && sponsors[category].map((sponsor) => (
          <div key={sponsor.id} className="sponsor-item">
             <a href={sponsor.sponsor_link} target="_blank" rel="noopener noreferrer">
            <img
              src={`https://api.prometeo.in${sponsor.image}`}
              alt={sponsor.name}
              className="sponsor-image"
            />
              </a>
            {/* <div className="sponsor-info">
              <p>{sponsor.name}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
    
  </FadeInContent>
))}
          
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Sponsors;
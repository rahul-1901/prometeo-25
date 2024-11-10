import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../components/Heading.jsx";
import { API_BASE_URL } from "../config.js";
import "./gallery.css";

const Gallery = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;

    const fetch = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/home/gallery/`);
      setCardData(data[""]);
    };
    fetch();
  }, []);

  return (
    <div className="gallery-main">
      <div className="gallery-header">
        <Heading title="Gallery" subheading="" alignment="center" />
      </div>
      <div className="gallery-background-container1">
        <div className="gallery-grid-container">
          {cardData.map((e, index) => (
            <div key={index} className="gallery-card-container">
              <div className="gallery-card">
                {/* <h3 style={{ position: 'relative', zIndex: 1 }}>Hover me</h3> */}
                <div
                  className="gallery-img-layer"
                  style={{
                    backgroundImage: `url(${API_BASE_URL + "/media/" + e.image})`,
                    // "--tz": "0em",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import Stars from "./components/stars.jsx";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./components/modal.jsx";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Home.css";
import logo from "./assets/coming-soon/logo-new.svg";
import title from "./assets/coming-soon/main_heading.svg";
import FogLeft from "./components/fogLeft.jsx";
import FogRight from "./components/fogRight.jsx";
// import { gsap, Power2 } from 'gsap';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const starsRef = useRef(null); // Ref to store the stars container
  // const fogRef = useRef([]);
  // const fogMidRef = useRef(null);
  // const fogBottomRef = useRef(null);
  // const fogTopRef = useRef(null);
  const handlePreRegisterClick = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // useEffect(() => {
  //   if (!loading) {
  //     const starsWrapper = starsRef.current;
  //     if (!starsWrapper) return;
  //     // Determine number of stars based on screen size
  //     const isMobile = window.innerWidth <= 450; // Example mobile breakpoint
  //     const numStars = isMobile ? 100 : 400;

  //     const stars = new Array(numStars).fill(0).map(() => {
  //       const star = document.createElement("div");
  //       star.className = "star"; // Add a class for styling
  //       starsWrapper.append(star);

  //       return {
  //         star,
  //         x: Math.random() * window.innerWidth,
  //         y: Math.random() * starsWrapper.clientHeight,
  //         r: Math.random() * 2,
  //         twinkle: Math.random() * 1 + 0.1,
  //       };
  //     });

  //     function update() {
  //       const speedMultiplier = isMobile ? 0.05 : 0.9;
  //       stars.forEach((star) => {
  //         star.x += star.r * speedMultiplier;
  //         if (star.x > window.innerWidth) {
  //           star.x = 0;
  //         }
  //         // Position and style stars within the wrapper
  //         star.star.style.transform = `translate(${star.x}px, ${star.y}px) scale(${star.r})`;
  //         star.star.style.opacity = star.twinkle;
  //       });
  //       requestAnimationFrame(update);
  //     }

  //     requestAnimationFrame(update);

  //     // Cleanup on unmount
  //     return () => {
  //       starsWrapper.innerHTML = "";
  //     };
  //   }
  // }, [loading]);

  // Preload images before rendering
  useEffect(() => {
    const IMAGES = [
      {
        id: "1",
        url: "https://s3-alpha-sig.figma.com/img/5913/49db/a11a9df23f11a4616a33f42eb7785aff?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M-tENTWoDmOQ2j6c8wkJXsi9WQqogzhPVrOQg034svt0kZ13rXmmDxUn~oDA4Tvet219pV9tWlHAj4b3POHM3r7LfUqzD-KHQVUcThrBLX62fH8~PjOK18cZWBY-jqzeui~HYTyT6tEParOd2hztF-pP3zyR5IF2GqWIKIYa9GGAobBk7Yb5G9hgob96rWBc-st2nytQ-l5bmA2lbLbbVbk5Sp8hxT9tVSKGs3dWtugy3yGESQMjPexTh6FoatFux34pVCNlLwNyY1X9246d~aDgb6jKUk0cT0Iqv5YDVU5u0BPiPuAXOOcUJYnYYlS1HV4NG7vO87045jNt4b~wbQ__",
      },
    ];

    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => setTimeout(() => resolve(image.url), 100);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setLoading(false))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div>
          <div className="home-body">
            <div ref={starsRef} className="stars">
              
              <Stars number={700}/>
            </div>
            <div className="home-main-container">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="home-title">
                <img src={title} alt="Comming Sooon" />{" "}
              </div>
              <div className="pre-register">
                <span onClick={handlePreRegisterClick}>PRE-REGISTER NOW</span>
              </div>
              
              <div className="fogLeftContainer">
                <FogLeft/>
        
              </div>
              <div className="fogRightContainer">
                <FogRight/>
              </div>
            </div>
            <div className="home-footer">
              <div className="home-socialmedia">
                <a
                  href="https://www.linkedin.com/company/prometeo2023/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={40} color="#FFFFFF" />
                </a>
                <a
                  href="https://twitter.com/IITJ_Prometeo?t=RAvD5KTW1SQD1772wsIIsw&s=08"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter size={35} color="#FFFFFF" />
                </a>

                <a
                  href="https://www.instagram.com/prometeo.iitj"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={40} color="#FFFFFF" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="home-footer">
            <div className="home-socialmedia">
              <a
                href="https://www.linkedin.com/company/prometeo2023/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={40} color="#FFFFFF" />
              </a>
              <a
                href="https://twitter.com/IITJ_Prometeo?t=RAvD5KTW1SQD1772wsIIsw&s=08"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter size={35} color="#FFFFFF" />
              </a>
              <a
                href="https://www.instagram.com/prometeo.iitj"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={40} color="#FFFFFF" />
              </a>
            </div>
          </div> */}
          <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
        </div>
      )}
    </>
  );
};

export default Home;

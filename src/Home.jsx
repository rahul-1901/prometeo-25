
//import Loader from "./pages/loader.jsx";
// import BGmusic from "./assets/coming-soon/bg-music.mp3";
import Stars from "./components/stars.jsx";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./components/modal.jsx";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Home.css";
import logo from "./assets/coming-soon/logo-new.svg";
import title from "./assets/coming-soon/main_heading.svg";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const starsRef = useRef(null); // Ref to store the stars container

  const handlePreRegisterClick = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Star creation effect
  // useEffect(() => {
  //   if (!loading) {
  //     const starsWrapper = starsRef.current;
  //     if (!starsWrapper) return;

      // const stars = new Array(1500).fill(0).map(() => {
      //   const star = document.createElement("div");
      //   star.className = "star"; // Add a class for styling
      //   starsWrapper.append(star);

  // useEffect(() => {
  //   if (!loading ) {
  //     // Use setTimeout to ensure this runs after rendering
  //     const timer = setTimeout(() => {
  //       const starsWrapper = starsRef.current;
  //       console.log(starsWrapper.clientHeight)
  //       if (!starsWrapper) {
  //         console.log('starsWrapper is null');
  //         return;
  //       }
  
  //       const stars = new Array(500).fill(0).map(() => {
  //         const star = document.createElement("div");
  //         star.className = "star"; // Optional: add a class for styling
  //         starsWrapper.append(star);
  
  //         return {
  //           star,
  //           x: Math.random() * window.innerWidth,
  //           y: Math.random() * starsWrapper.clientHeight, // Y position within stars div
  //           r: Math.random() * 2,
  //           twinkle: Math.random() * 0.5 + 0.5, // Random initial opacity
  //         };
  //       });
  
  //       function update() {
  //         stars.forEach((star) => {
  //           // Move the star
  //           star.x += star.r*0.2; // Increase x position by its speed/radius
  //           if (star.x > window.innerWidth) {
  //             star.x = 0; // Reset position to the left side if it goes off screen
  //           }
        
  //           // Update star position and size
  //           star.star.style.transform = `translate(${star.x}px, ${star.y}px) scale(${star.r})`;
            
  //           // Ensure the star is positioned within the stars wrapper
  //           star.star.style.opacity = star.twinkle; // Apply the opacity
  //         });
  //         requestAnimationFrame(update);
  //       }
          
  //       requestAnimationFrame(update);
  
  //       // Cleanup function to remove stars on unmount
  //       return () => {
  //         starsWrapper.innerHTML = ""; // Clear stars when component unmounts
  //       };
  //     }, 0); // Set timeout to 0 to defer to the next event loop cycle
  
  //     // Cleanup timer if component unmounts
  //     return () => clearTimeout(timer);
  //   }
  // }, [loading]); // Run this effect after loading completes
  

  const IMAGES = [
    {
      id: "1",
      url: "https://ik.imagekit.io/nrcvcirqj/assets/coming-soon/logo%20(2).svg?updatedAt=1699094086033",
    },
  ];

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
        <div >
          <div  className="home-body">
            <div ref={starsRef} className="stars">
              <Stars/>
            </div>
            <div className="home-main-container">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="home-title">
                <img src={title} alt="Comming Sooon" />{" "}
              </div>
              <div className="pre-register">
                <span onClick={handlePreRegisterClick}>Pre-register now</span>
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
          <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
        </div>  
      )}
    </>
  );
};

export default Home;

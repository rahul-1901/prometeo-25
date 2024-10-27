import { useEffect, useRef, useState } from "react";
//import Loader from "./pages/loader.jsx";
// import BGmusic from "./assets/coming-soon/bg-music.mp3";
import Stars from "./components/stars.jsx";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import "./Home.css";
import "regenerator-runtime/runtime";
// import { IKImage } from 'imagekitio-react';

// const urlEndpoint = import.meta.env.VITE_REACT_APP_IMAGEKIT_URL_ENDPOINT;
// const publicKey = import.meta.env.VITE_REACT_APP_IMAGEKIT_PUBLIC_KEY;
import logo from "./assets/coming-soon/logo-new.svg"; // Adjust the path as needed
import title from "./assets/coming-soon/main_heading.svg";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const starsRef = useRef(null); // Ref to store the stars container



  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 1000); // 1000 ms delay (1 second)

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

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

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
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
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const handlePreRegisterClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            {/* <audio src={BGmusic} loop ref={audioRef}></audio> */}
          </div>
          {/* Modal for Pre-registration */}
          {isModalOpen && (
            <div className="modal-back">
              <div className="modal-overlay" onClick={closeModal}>
                <button className="close-button" onClick={closeModal}>
                  X
                </button>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <h2>Pre-register for Updates</h2>
                  <p>Enter your details to stay informed about our launch.</p>
                </div>
              </div>
            </div>
          )}
          
        </div>
      )}
    </>
  );
};

export default Home;

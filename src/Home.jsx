import Stars from "./components/stars.jsx";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./components/modal.jsx";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Home.css";
import logo from "./assets/coming-soon/logo-new.svg";
import title from "./assets/coming-soon/main_heading.svg";
import FogLeft from "./components/fogLeft.jsx";
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
                <span onClick={handlePreRegisterClick}>Pre-register now</span>
              </div>
              {/* <svg className="fog-svg" viewBox="0 0 800 600">
                <g ref={fogRef} className="fogGroup">
                  <g ref={fogMidRef} className="st22 fog fogMid">
                    <path className="st0">
                      <animate 
                        attributeName="d" 
                        dur="14000ms" 
                        repeatCount="indefinite"
                        values="
                          M610,292c-15.1-12.5-32.9,4.5-103,14.2c-30.7,4.2-32.9,8.5-89,8.5c0,0-70.1,7-84,30.4c-0.5,0.9-1.9,3.3-1,5
                          c2.5,4.7,19.5-0.5,37-4c21.4-4.3,34.2-6.9,49.8-5.5c23.5,2.1,53.2,11.3,63.5,8.6c1.8-0.5,3.8-1.1,5.6-0.7c3.6,0.7,4.8,4.9,3,7.7
                          c-1.8,2.7-5.4,4.1-8.9,5c-19.1,4.6-39.2-2.8-59-3.2c-39.8-0.8-75.1,26.2-114.8,25c-16.6-0.5-32.5-5.9-48.9-7.5
                          c-1.2-0.1-4.7-1-6.2,0.8c-2.2,2.6,1.5,9.2,2.8,11.4c7.3,12.7,91.7,55.4,258.3,34.4c44.5-5.6,66.4-12.2,83-30.6
                          C625.1,361.3,630.2,308.7,610,292z;

                          M610,292c-15.1-12.5-32.9,4.5-103,14.2c-30.7,4.2-32.9,8.5-89,8.5c0,0-70.1,7-84,30.4c-0.5,0.9-1.9,3.3-1,5
                          c2.5,4.7,19.5-0.5,37-4c21.4-4.3,34.2-6.9,49.8-5.5c23.5,2.1,53.2,11.3,63.5,8.6c1.8-0.5,3.8-1.1,5.6-0.7c3.6,0.7,4.8,4.9,3,7.7
                          c-2.1,3.2-6.6,4.6-8.9,5c-19.3,3.6-59-7.1-59-7.1c-44.1-11.8-68.3,19.5-116,19c-16-0.2-32.2,5.5-47.8,2.3c-1.1-0.2-4.7-1-6.2,0.8
                          c-2.2,2.6,1.5,9.1,2.8,11.4C271.7,413.7,373,410,373,410c173-6.3,198.4,11.3,225-18.8C626,359.7,627.8,306.7,610,292z;

                          M610,292c-15.1-12.5-32.9,4.5-103,14.2c-30.7,4.2-32.9,8.5-89,8.5c0,0-70.1,7-84,30.4c-0.5,0.9-1.9,3.3-1,5
                          c2.5,4.7,19.5-0.5,37-4c21.4-4.3,34.2-6.9,49.8-5.5c23.5,2.1,53.2,11.3,63.5,8.6c1.8-0.5,3.8-1.1,5.6-0.7c3.6,0.7,4.8,4.9,3,7.7
                          c-1.8,2.7-5.4,4.1-8.9,5c-19.1,4.6-39.2-2.8-59-3.2c-39.8-0.8-75.1,26.2-114.8,25c-16.6-0.5-32.5-5.9-48.9-7.5
                          c-1.2-0.1-4.7-1-6.2,0.8c-2.2,2.6,1.5,9.2,2.8,11.4c7.3,12.7,91.7,55.4,258.3,34.4c44.5-5.6,66.4-12.2,83-30.6
                          C625.1,361.3,630.2,308.7,610,292z;"
                      />
                    </path>
                  </g>
                  <g ref={fogBottomRef} className="st22 fog fogBottom">
                    <path className="st0">
                      <animate 
                              attributeName="d" 
                              dur="10000ms" 
                              repeatCount="indefinite"
                              values="
                                      M231.6,415.3c38.9-3.5,54.1,30.8,116.5,50.5c16,5,24,7.6,35,7.8c22.9,0.5,51.7,1.9,79.7-11.2
                      c4.6-2.2,12.5-3.4,13.2,1.1c0.3,1.7-2.6,4.2-4.7,5.8c-18,13.7-39.7,19-39.2,22.6c0.2,1.3,3.2,1.9,4,2c35.2,6.3,66.2-14.9,66.2-14.9
                      c5.6-3.9,13.7-7,24.3-10.8c2.3-0.8,10.5-0.9,12,2.3c2.8,5.8-17,20.8-23,25.3C459,538.6,403,544,403,544c-43.6,0-74-6.9-117-22.6
                      c-52.1-19-69.1-38.1-77.8-52.3c-4.2-6.8-14.9-24.5-8.2-38.1C206.5,417.6,227.2,415.7,231.6,415.3z;
                                      
                                      M251,412c35.5,3.4,40.7,28.6,97,53.9c22.3,10,36,15.9,55,15.1c36.2-1.5,59-13,59-13c3.3-1.6,12.3-6.4,13.9-4.4
                      c1.4,1.8-3.4,7.7-3.9,8.4c-13.5,16.7-40.2,16.5-40,20c0.1,1.3,3.6,1.9,4,2c41.8,7.7,65-7,65-7c12.3-7.8,17.4-16.4,29-16
                      c0.7,0,8.9,0.4,10,4c1.6,5.3-13.1,14.3-24.5,20.9C462.7,526.6,436.3,544,403,544c-43.6,0-74-6.9-117-22.6
                      c-52.1-19-69.1-38.1-77.8-52.3c-4.7-7.7-14.5-24.4-8.2-38.1C207.1,415.5,232.2,410.2,251,412z;
                                      
                                      M231.6,415.3c38.9-3.5,54.1,30.8,116.5,50.5c16,5,24,7.6,35,7.8c22.9,0.5,51.7,1.9,79.7-11.2
                      c4.6-2.2,12.5-3.4,13.2,1.1c0.3,1.7-2.6,4.2-4.7,5.8c-18,13.7-39.7,19-39.2,22.6c0.2,1.3,3.2,1.9,4,2c35.2,6.3,66.2-14.9,66.2-14.9
                      c5.6-3.9,13.7-7,24.3-10.8c2.3-0.8,10.5-0.9,12,2.3c2.8,5.8-17,20.8-23,25.3C459,538.6,403,544,403,544c-43.6,0-74-6.9-117-22.6
                      c-52.1-19-69.1-38.1-77.8-52.3c-4.2-6.8-14.9-24.5-8.2-38.1C206.5,417.6,227.2,415.7,231.6,415.3z;"/>
                    </path>
                  </g>
                  <g ref={fogTopRef} className="st22 fog fogTop">
                    <path className="st0">
                      <animate 
                              attributeName="d" 
                              dur="10000ms" 
                              repeatCount="indefinite"
                              values="
                                      M287.5,273c17.9-9.2,50.8-28.6,74.9-29.6c4.6-0.2,9-0.3,10.6,2.2c2.1,3.3-0.5,10.2-5.2,13.6
                      c-5.6,4.1-9.6,1.6-16.4,4.5c-5.2,2.2-9.5,8.3-6.2,12.7c2.8,3.9,9.3,3.6,12.9,6.8c4.6,4,0.7,12.9-0.1,15.1
                      c-4.6,12.3-18.4,18.2-53,30.7c-44.5,16.1-51.5,17.2-59,13c-9.6-5.3-16.4-17.1-16-29c0.5-13.6,10.1-24.5,19.5-28.7
                      c6.3-2.8,9-1.5,21.7-4.8C275.7,278.3,281.1,276.4,287.5,273z;
                                      
                                      M288,276c34.2-16,54.7-38.2,74.4-32.6c3.8,1.1,11.4,4.3,11.6,8.6c0.1,3.6-5,6.6-6.1,7.2
                      c-6.7,3.9-10.8,0.6-16.4,4.5c-3.2,2.2-6.4,6.3-5.5,9.3c1.3,4,9.1,2.8,11,7c1.8,4.1-3.4,10.2-5,12c-20.6,23.4-43,35-43,35
                      c-35.8,18.5-53.8,27.7-63,23c-11.9-6.1-17.9-22.9-16-37c1.5-11.2,8.4-24.7,19.5-28.7c6.4-2.3,9.7,0.2,21.5-2.3
                      C277.4,280.6,282.5,278.6,288,276z;
                                      
                                      M287.5,273c17.9-9.2,50.8-28.6,74.9-29.6c4.6-0.2,9-0.3,10.6,2.2c2.1,3.3-0.5,10.2-5.2,13.6
                      c-5.6,4.1-9.6,1.6-16.4,4.5c-5.2,2.2-9.5,8.3-6.2,12.7c2.8,3.9,9.3,3.6,12.9,6.8c4.6,4,0.7,12.9-0.1,15.1
                      c-4.6,12.3-18.4,18.2-53,30.7c-44.5,16.1-51.5,17.2-59,13c-9.6-5.3-16.4-17.1-16-29c0.5-13.6,10.1-24.5,19.5-28.7
                      c6.3-2.8,9-1.5,21.7-4.8C275.7,278.3,281.1,276.4,287.5,273z;"/>
                    </path>
                  </g>
                </g>
              </svg> 
              <g className="fogGroup">
                <g className="st22 fog fogMid">
                  <path className="st0">
                  <animate 
                          attributeName="d" 
                          dur="14000ms" 
                          repeatCount="indefinite"
                          values="
                                  M610,292c-15.1-12.5-32.9,4.5-103,14.2c-30.7,4.2-32.9,8.5-89,8.5c0,0-70.1,7-84,30.4c-0.5,0.9-1.9,3.3-1,5
                  c2.5,4.7,19.5-0.5,37-4c21.4-4.3,34.2-6.9,49.8-5.5c23.5,2.1,53.2,11.3,63.5,8.6c1.8-0.5,3.8-1.1,5.6-0.7c3.6,0.7,4.8,4.9,3,7.7
                  c-1.8,2.7-5.4,4.1-8.9,5c-19.1,4.6-39.2-2.8-59-3.2c-39.8-0.8-75.1,26.2-114.8,25c-16.6-0.5-32.5-5.9-48.9-7.5
                  c-1.2-0.1-4.7-1-6.2,0.8c-2.2,2.6,1.5,9.2,2.8,11.4c7.3,12.7,91.7,55.4,258.3,34.4c44.5-5.6,66.4-12.2,83-30.6
                  C625.1,361.3,630.2,308.7,610,292z;
                                  
                                  M610,292c-15.1-12.5-32.9,4.5-103,14.2c-30.7,4.2-32.9,8.5-89,8.5c0,0-70.1,7-84,30.4c-0.5,0.9-1.9,3.3-1,5
                  c2.5,4.7,19.5-0.5,37-4c21.4-4.3,34.2-6.9,49.8-5.5c23.5,2.1,53.2,11.3,63.5,8.6c1.8-0.5,3.8-1.1,5.6-0.7c3.6,0.7,4.8,4.9,3,7.7
                  c-2.1,3.2-6.6,4.6-8.9,5c-19.3,3.6-59-7.1-59-7.1c-44.1-11.8-68.3,19.5-116,19c-16-0.2-32.2,5.5-47.8,2.3c-1.1-0.2-4.7-1-6.2,0.8
                  c-2.2,2.6,1.5,9.1,2.8,11.4C271.7,413.7,373,410,373,410c173-6.3,198.4,11.3,225-18.8C626,359.7,627.8,306.7,610,292z;
                                  
                                  M610,292c-15.1-12.5-32.9,4.5-103,14.2c-30.7,4.2-32.9,8.5-89,8.5c0,0-70.1,7-84,30.4c-0.5,0.9-1.9,3.3-1,5
                  c2.5,4.7,19.5-0.5,37-4c21.4-4.3,34.2-6.9,49.8-5.5c23.5,2.1,53.2,11.3,63.5,8.6c1.8-0.5,3.8-1.1,5.6-0.7c3.6,0.7,4.8,4.9,3,7.7
                  c-1.8,2.7-5.4,4.1-8.9,5c-19.1,4.6-39.2-2.8-59-3.2c-39.8-0.8-75.1,26.2-114.8,25c-16.6-0.5-32.5-5.9-48.9-7.5
                  c-1.2-0.1-4.7-1-6.2,0.8c-2.2,2.6,1.5,9.2,2.8,11.4c7.3,12.7,91.7,55.4,258.3,34.4c44.5-5.6,66.4-12.2,83-30.6
                  C625.1,361.3,630.2,308.7,610,292z;"/>
                </path>
                </g>
                <g className="st22 fog fogBottom">
                  <path className="st0">
                  <animate 
                          attributeName="d" 
                          dur="10000ms" 
                          repeatCount="indefinite"
                          values="
                                  M231.6,415.3c38.9-3.5,54.1,30.8,116.5,50.5c16,5,24,7.6,35,7.8c22.9,0.5,51.7,1.9,79.7-11.2
                  c4.6-2.2,12.5-3.4,13.2,1.1c0.3,1.7-2.6,4.2-4.7,5.8c-18,13.7-39.7,19-39.2,22.6c0.2,1.3,3.2,1.9,4,2c35.2,6.3,66.2-14.9,66.2-14.9
                  c5.6-3.9,13.7-7,24.3-10.8c2.3-0.8,10.5-0.9,12,2.3c2.8,5.8-17,20.8-23,25.3C459,538.6,403,544,403,544c-43.6,0-74-6.9-117-22.6
                  c-52.1-19-69.1-38.1-77.8-52.3c-4.2-6.8-14.9-24.5-8.2-38.1C206.5,417.6,227.2,415.7,231.6,415.3z;
                                  
                                  M251,412c35.5,3.4,40.7,28.6,97,53.9c22.3,10,36,15.9,55,15.1c36.2-1.5,59-13,59-13c3.3-1.6,12.3-6.4,13.9-4.4
                  c1.4,1.8-3.4,7.7-3.9,8.4c-13.5,16.7-40.2,16.5-40,20c0.1,1.3,3.6,1.9,4,2c41.8,7.7,65-7,65-7c12.3-7.8,17.4-16.4,29-16
                  c0.7,0,8.9,0.4,10,4c1.6,5.3-13.1,14.3-24.5,20.9C462.7,526.6,436.3,544,403,544c-43.6,0-74-6.9-117-22.6
                  c-52.1-19-69.1-38.1-77.8-52.3c-4.7-7.7-14.5-24.4-8.2-38.1C207.1,415.5,232.2,410.2,251,412z;
                                  
                                  M231.6,415.3c38.9-3.5,54.1,30.8,116.5,50.5c16,5,24,7.6,35,7.8c22.9,0.5,51.7,1.9,79.7-11.2
                  c4.6-2.2,12.5-3.4,13.2,1.1c0.3,1.7-2.6,4.2-4.7,5.8c-18,13.7-39.7,19-39.2,22.6c0.2,1.3,3.2,1.9,4,2c35.2,6.3,66.2-14.9,66.2-14.9
                  c5.6-3.9,13.7-7,24.3-10.8c2.3-0.8,10.5-0.9,12,2.3c2.8,5.8-17,20.8-23,25.3C459,538.6,403,544,403,544c-43.6,0-74-6.9-117-22.6
                  c-52.1-19-69.1-38.1-77.8-52.3c-4.2-6.8-14.9-24.5-8.2-38.1C206.5,417.6,227.2,415.7,231.6,415.3z;"/>
                </path>
                </g>
                <g className="st22 fog fogTop">
                  <path className="st0">
                  <animate 
                          attributeName="d" 
                          dur="10000ms" 
                          repeatCount="indefinite"
                          values="
                                  M263,222c41.6-27.7,80.7-32.1,124-37c0,0,38.5-4.4,71.7,12.2c1.4,0.7,5.6,2.7,5.2,4.9
                  c-0.3,1.5-1.9,2.3-3.3,2.9c-12.7,5.1-27,1.8-40.5-0.5c-13.5-2.3-28.8-3.1-39.3,5.7c16.1,0.4,34,1.5,34.3,4.8
                  c0.3,3.2-16.5,5.8-39.5,12.3c-59.2,16.6-95.5,26.6-115.9,52.5c-3.1,4-9.2,12.6-17.6,12.6c-9.4,0-19.3-10.5-21-20.4
                  C217.7,252.2,247.1,232.6,263,222z;
                                  
                                  M262,228c18.2-11.7,65.9-42.3,126-47c0,0,28.5-2.2,57,10c3.1,1.3,11.5,4.9,11,8c-0.4,2.6-7,3.7-9,4
                  c-13.6,2.2-21.9-3.5-31-5c-7.6-1.2-19.2-0.1-35.3,12.2c13.1,2.6,28.5,6.1,28.3,8.8c-0.2,2.7-15.8,1-32,4
                  c-42.2,7.9-68.5,43.9-114,66c-3.6,1.7-11.8,5.6-21,3.4c-10.2-2.4-19.9-11.5-21-20.4C220.4,267.5,220.7,254.6,262,228z;
                                  
                                  M261,216c32-22.9,64-25.9,128-32c0,0,50-4.7,69.7,13.2c1.4,1.3,5.2,4.8,4.3,7.8c-0.2,0.5-1,2.8-7,4
                  c-13,2.6-25.8-4.7-36-7c-8.7-2-21.5-1.8-39.3,8.2c13.9,4.1,29.7,9.2,29.3,11.8c-0.5,2.5-15.8-0.8-33,1c-25.3,2.7-45.7,17-86,45
                  c-27.6,19.1-36.6,27.4-49,24.4c-9.7-2.3-18.8-10.7-21-20.4C215.8,248.3,250.2,223.7,261,216z;
                                  
                                  M263,222c41.6-27.7,80.7-32.1,124-37c0,0,38.5-4.4,71.7,12.2c1.4,0.7,5.6,2.7,5.2,4.9
                  c-0.3,1.5-1.9,2.3-3.3,2.9c-12.7,5.1-27,1.8-40.5-0.5c-13.5-2.3-28.8-3.1-39.3,5.7c16.1,0.4,34,1.5,34.3,4.8
                  c0.3,3.2-16.5,5.8-39.5,12.3c-59.2,16.6-95.5,26.6-115.9,52.5c-3.1,4-9.2,12.6-17.6,12.6c-9.4,0-19.3-10.5-21-20.4
                  C217.7,252.2,247.1,232.6,263,222z;"/>
                </path>
                </g>
                <g className="st22 fog fogTop">
                  <path className="st0">
                  <animate 
                          attributeName="d" 
                          dur="10000ms" 
                          repeatCount="indefinite"
                          values="
                                  M287.5,273c17.9-9.2,50.8-28.6,74.9-29.6c4.6-0.2,9-0.3,10.6,2.2c2.1,3.3-0.5,10.2-5.2,13.6
                  c-5.6,4.1-9.6,1.6-16.4,4.5c-5.2,2.2-9.5,8.3-6.2,12.7c2.8,3.9,9.3,3.6,12.9,6.8c4.6,4,0.7,12.9-0.1,15.1
                  c-4.6,12.3-18.4,18.2-53,30.7c-44.5,16.1-51.5,17.2-59,13c-9.6-5.3-16.4-17.1-16-29c0.5-13.6,10.1-24.5,19.5-28.7
                  c6.3-2.8,9-1.5,21.7-4.8C275.7,278.3,281.1,276.4,287.5,273z;
                                  
                                  M288,276c34.2-16,54.7-38.2,74.4-32.6c3.8,1.1,11.4,4.3,11.6,8.6c0.1,3.6-5,6.6-6.1,7.2
                  c-6.7,3.9-10.8,0.6-16.4,4.5c-3.2,2.2-6.4,6.3-5.5,9.3c1.3,4,9.1,2.8,11,7c1.8,4.1-3.4,10.2-5,12c-20.6,23.4-43,35-43,35
                  c-35.8,18.5-53.8,27.7-63,23c-11.9-6.1-17.9-22.9-16-37c1.5-11.2,8.4-24.7,19.5-28.7c6.4-2.3,9.7,0.2,21.5-2.3
                  C277.4,280.6,282.5,278.6,288,276z;
                                  
                                  M287.5,273c17.9-9.2,50.8-28.6,74.9-29.6c4.6-0.2,9-0.3,10.6,2.2c2.1,3.3-0.5,10.2-5.2,13.6
                  c-5.6,4.1-9.6,1.6-16.4,4.5c-5.2,2.2-9.5,8.3-6.2,12.7c2.8,3.9,9.3,3.6,12.9,6.8c4.6,4,0.7,12.9-0.1,15.1
                  c-4.6,12.3-18.4,18.2-53,30.7c-44.5,16.1-51.5,17.2-59,13c-9.6-5.3-16.4-17.1-16-29c0.5-13.6,10.1-24.5,19.5-28.7
                  c6.3-2.8,9-1.5,21.7-4.8C275.7,278.3,281.1,276.4,287.5,273z;"/>
                </path>
                </g>
              </g> */}
              <div className="fogLeftContainer">
              <FogLeft/>
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

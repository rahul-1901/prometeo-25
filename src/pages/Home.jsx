import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/landing/Experience";
import { ScrollControls } from "@react-three/drei";
import { usePlay } from "../components/landing/Play";
import OverlayLanding from "../components/landing/OverlayLanding";
import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";
import './Home.css'

const Home = () => {
  const { play, end } = usePlay();
  const [loading, setLoading] = useState(true); 
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 5000); 

    const contentTimer = setTimeout(() => {
      setShowContent(true); 
    }, 3100);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);
    
    return (
      
      <>
      {/* Loader (positioned absolutely on top of content) */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: loading ? 1 : 0, 
          visibility: loading ? 'visible' : 'hidden', // Hides after fade-out
          transition: 'opacity 0.8s ease-in-out, visibility 0s linear 0.8s',
        }}
      >
        <PageLoader />
      </div>

      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'black',
          opacity: showContent ? 1 : 0, // Fade in smoothly
          visibility: showContent ? 'visible' : 'hidden', // Waits until fade is complete
          transition: 'opacity 1s ease-in-out, visibility 0s linear 1s',
          pointerEvents: showContent ? 'auto' : 'none',
          overflow:"none"
        }}
      >
        <Canvas>
          <color attach="background" args={["#040404"]} />
          <ScrollControls
            pages={play && !end ? 20 : 0}
            damping={0.5}
            style={{
              top: "10px",
              left: "0px",
              bottom: "10px",
              right: "10px",
              width: "auto",
              height: "auto",
              animation: "fadeIn 2.4s ease-in-out 1s forwards",
              opacity: 1,
            }}
          >
            <Experience />
          </ScrollControls>
        </Canvas>
        <OverlayLanding />
      </div>
    </>
    );
}

export default Home


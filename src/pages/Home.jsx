import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/landing/Experience";
import { ScrollControls } from "@react-three/drei";
import { usePlay } from "../components/landing/Play";
import OverlayLanding from "../components/landing/OverlayLanding";
import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";
import './Home.css'

const Home = () => {
    const {play, end} = usePlay()
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(0); 

    useEffect(()=>{
      setTimeout(() => setLoading(false), 1000);
    }, [])
    useEffect(() => {
      const timer = setTimeout(() => {
        setOpacity(1); // Change opacity to 1 after 5 seconds
      }, 0); // 5000ms = 5 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }, []);
    
    return (
      
      <>
        {/* {loading ? (
        <PageLoader />
      ) : (
      <> */}
     
      <div
      style={{ 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: '#FFFFFF', 
        opacity: opacity, 
        transition: 'opacity 1s ease-in-out' 
      }}
      >         
          <Canvas >
          <color attach="background" args={["#040404"]} />
          <ScrollControls pages={play && !end ? 20 : 0}
            damping={0.5}
            style={{
              top: "10px",
              left: "0px",
              bottom: "10px",
              right: "10px",
              width: "auto",
              height: "auto",
              animation: "fadeIn 2.4s ease-in-out 1s forwards",
              opacity: 0,
            }} >
            <Experience />
          </ScrollControls>
        </Canvas>
        <OverlayLanding/>
        </div>
      {/* </>)} */}
        
      </>
    );
}

export default Home


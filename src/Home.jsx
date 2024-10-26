import { useEffect, useRef, useState } from "react";
import BGmusic from "./assets/coming-soon/bg-music.mp3";
import FadeIn from "./components/fadein.jsx";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import "./Home.css";
import 'regenerator-runtime/runtime';
import bgimgae from './assets/coming-soon/bg_image.png'
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [music, setMusic] = useState(false);
  const audioRef = useRef();

  const handleBGmusic = () => {
    if (music) {
      audioRef.current.pause();
      setMusic(false);
    } else {
      audioRef.current.play();
      audioRef.current.volume = audioRef.current.volume * 0.1;
      audioRef.current.speed = 0.1;
      setMusic(true);
    }
  };

  const IMAGES = [
    {
      id: "1",
      url:bgimgae,
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

  return (
    <>
        <FadeIn duration={500}>
          <div className="home-body">
            <div className="home-main-container">
              <div className="home-logo">
              {/* <IKImage
                publicKey={publicKey}
                urlEndpoint={urlEndpoint}
                src={IMAGES.filter((image) => image.id === "1")[0].url}
                border="0"
              /> */}
              </div>
              <div className="home-title">
                <h1>
                  <span>
                    <b>C</b>om<b>in</b>g
                  </span>
                  <span>
                    So<b>on</b>
                  </span>
                </h1>
              </div>
            </div>
            <div className="home-footer">
              <div className="home-socialmedia">
              <a
                  href="https://www.linkedin.com/company/prometeo2023/"
                  target="_blank"
                >
                  <FaLinkedinIn size={40} color="white" />
                </a>
                
                <a
                  href="https://twitter.com/IITJ_Prometeo?t=RAvD5KTW1SQD1772wsIIsw&s=08"
                  target="_blank"
                >
                  <IoLogoTwitter size={35} color="white" />
                </a>
                <a
                  href="https://www.instagram.com/prometeo.iitj"
                  target="_blank"
                >
                  <FaInstagram size={40} color="white" />
                </a>
              </div>
            </div>
            {/* <div id="leaves">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div> */}
          </div>
        </FadeIn>
    </>
  );
};

export default Home;

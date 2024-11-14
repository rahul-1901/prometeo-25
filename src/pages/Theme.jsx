import React, { useEffect } from "react";
import "./theme.css";
import purpleStone from "../assets/purple-bottle.webp";
import bg from "../assets/themeBg.webp";
import bgBottom from "../assets/bgBottom.webp";
import textBg from "../assets/textBg.jpeg";
import PageLoader from "../components/PageLoader";
import FadeIn from "../components/FadeIn";

const Theme = () => {
  const [content, setContent] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  const handleonclick = () => {
    setContent(!content);
    setVideo(!content);
  };
  const onclickclose = () => {
    setContent(!content);
  };

  // let container = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
  });

  const IMAGES = [
    {
      id: "1",
      url: purpleStone,
    },
    {
      id: "2",
      url: bg,
    },
    {
      id: "3",
      url: bgBottom,
    },
    {
      id: "4",
      url: textBg,
    }
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

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div className="theme-page">
            <div
              className="theme-container"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="nordic-text">NORDIC</div>
              <div className="nights-text">NIGHTS</div>
            </div>
            <div
              className="theme-content"
              style={{ backgroundImage: `url(${bgBottom})` }}>
              <div
                className="theme-text"
              >
                <p className="theme-detail" style={{ backgroundImage: `url(${textBg})` }}>
                  In the enchanting dimension of Nordic Nights, we dive into innovation and technologies inspired by the northern lights. It celebrates a harmony between modernity and tradition where ideas illuminate the skies. In the spirit of technological advancements and sustainability, we explore a canopy of stars and serenity.
                  It explores a magical dimension of transforming visions into realities.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Theme;

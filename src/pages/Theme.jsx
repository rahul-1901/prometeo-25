import React, { useEffect } from "react";
import "./theme.css";
import purpleStone from "../assets/purple-bottle.webp";
import bg from "../assets/purple-bg.webp";
import PageTitle from "../components/PageTitle";
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
          <div
            className="theme-container"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="theme-container-heading">
              <PageTitle
                title="THEME"
                stone="An Elixir Odyssey"
                bgImg={purpleStone}
                subheading="Journey to the elixir odyssey"
                color="147, 80, 203"
              />
            </div>
            <div className="theme-content-container">
              <div className="theme-container-video">
                <iframe
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/tXr0-hL-Yes?rel=0"
                  title="Prometeo '23 | IIT Jodhpur"
                  allowFullScreen="true"
                  autoFocus="true"
                  frameBorder="0"
                ></iframe>
              </div>
              <div className="theme-content-main">
                <p>
                  Imagine a vial, filled to the brim with the elixir of
                  innovation, the epitome of knowledge, waiting for the worthy
                  to find. Entwined with the notion of the sacred golden period,
                  it symbolizes the profound wisdom and enlightenment needed to
                  overcome the challenges the future will offer. In this race of
                  innovators pursuing the sacred elixir, propel yourself towards
                  technological enlightenment with the help of Prometeo. Join
                  our odyssey in pursuit of this ‘Elixir of Life’, as we sail
                  through the unexplored realms of technology, discovering new
                  possibilities along the way. Prometeo 2024 aspires to elevate
                  innovation, channeling creative ideas towards an enhanced
                  impact at the forefront of progress. Featuring a dynamic blend
                  of talks, workshops, and competitions that immerse
                  participants in the vast world of emerging technology,
                  Prometeo invites every thinker to set sail on an adventure of
                  ideas, collaboration and progress. Participate in one of the
                  most anticipated tech-fests and prove yourself worthy for the
                  ultimate reward.
                </p>
              </div>
              {/* <div className={`${content ? "content_nondisplay " : " "}`}>
                <div className="popup">
                  <div className="popup-inner">
                    <img src={close} alt="" onClick={onclickclose} />
                    <p>
                      Imagine a vial, filled to the brim with the elixir of
                      innovation, the epitome of knowledge, waiting for the
                      worthy to find. Entwined with the notion of the sacred
                      golden period, it symbolizes the profound wisdom and
                      enlightenment needed to overcome the challenges the future
                      will offer. In this race of innovators pursuing the sacred
                      elixir, propel yourself towards technological
                      enlightenment with the help of Prometeo. Join our odyssey
                      in pursuit of this ‘Elixir of Life’, as we sail through
                      the unexplored realms of technology, discovering new
                      possibilities along the way. Prometeo 2024 aspires to
                      elevate innovation, channeling creative ideas towards an
                      enhanced impact at the forefront of progress. Featuring a
                      dynamic blend of talks, workshops, and competitions that
                      immerse participants in the vast world of emerging
                      technology, Prometeo invites every thinker to set sail on
                      an adventure of ideas, collaboration and progress.
                      Participate in one of the most anticipated tech-fests and
                      prove yourself worthy for the ultimate reward.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Theme;

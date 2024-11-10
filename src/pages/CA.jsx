import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./CA.css";
import { description } from "./description";
import { silver_amabassador } from "./description";
import { gold_amabassador } from "./description";
import FadeIn from "../components/FadeIn";
import FadeInContent from "../components/FadeInContent";
import PageLoader from "../components/PageLoader";
import Go2Top from "../components/Go2Top";
import bg from "../assets/ca-bg.webp";
import AuthContext from "../context/AuthContext";

const CA = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const IMAGES = [
    {
      id: "1",
      url: bg,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;

    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const tablet = window.matchMedia("(max-width:1000px)");
    setIsTablet(tablet.matches);

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
      <section
        className="ca_page"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* <Heading
          title="CAMPUS AMBASSADOR PROGRAM"
          subheading={
            isMobile
              ? "CA partners are extended part of Prometeo team"
              : "CA partners are extending the impact of Prometeo BY actively promotig the festiva and expanding its reach"
          }
          alignment={isMobile ? "center" : "left"}
        /> */}
        {/* <PageTitle
          title="CAMPUS AMBASSADOR"
          stone=""
          bgImg={CA_title}
          // subheading={
          //   isMobile
          //     ? "CA partners are extended part of Prometeo team"
          //     : "CA partners are extending the impact of Prometeo BY actively promotig the festiva and expanding its reach"
          // }
          color="4,18,68"
        /> */}
        <div className="ca-title-main">
          <h1>
            CAMPUS AMBASSADOR
            <br />
          </h1>
          <p>
            {isMobile
              ? "CA partners are extended part of Prometeo team"
              : "CA partners are extending the impact of Prometeo by actively promoting the festival and expanding its reach"}
          </p>
          <hr />
        </div>
        <div className="ca_body">
          {description.map((item, index) => {
            return (
              <FadeInContent key={index}>
                <div className="ca_decription">
                  <div className="ca-info-container" key={index}>
                    <div className="ca_blocks">
                      <h1 className="no_margin">{item.heading}</h1>
                      <div
                        className="ca_info-content"
                        style={{
                          display: "flex",
                          flexDirection: `${
                            isTablet
                              ? "column-reverse"
                              : index % 2 != 0
                              ? "row-reverse"
                              : "row"
                          }`,
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p className="selected_p">{item.info}</p>
                        <img
                          src={item.img}
                          style={{ width: `${isTablet ? "50%" : "30%"}` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInContent>
            );
          })}
          <div className="ca-incentives">
            <FadeInContent>
              <h1>INCENTIVES</h1>
              <div className="incentives_body">
                <div className="silver_ambassador">
                  <div className="silver_incentives">
                    <h2>SILVER Campus Ambassador</h2>
                    <h3>10+ Registrations (with accommodation)</h3>
                  </div>
                  <div className="silver_brief">
                    {silver_amabassador.map((item, index) => (
                      <div key={index} className="ambassador_benefits">
                        <img src={item.img} />
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="gold_ambassador">
                  <div className="gold_incentives">
                    <h2>GOLD Campus Ambassador</h2>
                    <h3>20+ Registrations (with accommodation)</h3>
                  </div>
                  <div className="silver_brief">
                    {gold_amabassador.map((item, index) => (
                      <div key={index} className="ambassador_benefits">
                        <img src={item.img} />
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInContent>
          </div>
          <FadeInContent>
            <div className="ca-registration">
              <h1>REGISTRATION</h1>
              <h2>
                So, grab the opportunity and pre-register as soon as possible to
                win the goodies and wonderful perks!
              </h2>
              <div className="ca-register-btn">
                {!user ? (<Link to="/register">
                    <button>Register</button>
                  </Link> 
                  ) : (
                  <Link to="/dashboard">
                    <button>Dashboard</button>
                  </Link>
                  )}
              </div>
            </div>
          </FadeInContent>
        </div>
      </section>
      <Go2Top/>
    </FadeIn>)}
    </>
  );
};

export default CA;

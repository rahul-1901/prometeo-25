import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FadeIn from "../components/FadeIn";
import TeamCard from "../components/TeamCard";
import "./Team.css";
import FadeInContent from "../components/FadeInContent";
import bg from "../assets/golden-bg.webp";
import PageTitle from "../components/PageTitle";
import goldenStone from "../assets/golden-bottle.webp";
import PageLoader from "../components/PageLoader";
import { API_BASE_URL } from "../config";

const Team23 = () => {
  const [team23, setTeam23] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;

    const getTeam23 = async () => {
      const { data } = await axios.get(API_BASE_URL + "team/past-team/");
      setTeam23(data["Past-Team"]);
    };
    getTeam23();
  }, []);

  const IMAGES = [
    {
      id: "1",
      url: goldenStone,
    },
    {
      id: "2",
      url: bg,
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

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
          <div className="team-main" style={{ backgroundImage: `url(${bg})` }}>
            <div className="team-title">
              {/* <h1>Previous Year Team</h1>
          <p>
            Meet the visionaries behind last year's groundbreaking techno
            festival!
          </p> */}
              <PageTitle
                title="Team'2023"
                stone="Legacy Elixir"
                bgImg={goldenStone}
                subheading={
                  isMobile
                    ? "Visionaries behind last year's groundbreaking Techno festival!"
                    : "Meet the visionaries behind last year's groundbreaking techno festival!"
                }
                color="156,96,31"
              />
            </div>
            <div className="team-section">
              {Object.keys(team23).map((vertical, index) => {
                return (
                  <FadeInContent key={index}>
                    <div className="team-position-section">
                      <div className="team-verticle">
                        <h1>{vertical}</h1>
                      </div>
                      <div className="team-cards-container">
                        {team23[vertical].map((member) => {
                          return (
                            <>
                              <TeamCard
                                key={member.id}
                                name={member.name}
                                position={member.vertical_name}
                                moon-long
                                imgURL={API_BASE_URL + member.image}
                                phone={member.phoneNo}
                                email={member.email}
                                linkedin={member.linkedin_link}
                                instagram={member.instagram_link}
                              />
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </FadeInContent>
                );
              })}
            </div>
            <div className="current-team-main">
              <Link to="/team">
                <button className="current-team-btn">
                  Go to Current Team Prometeo'24
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Team23;

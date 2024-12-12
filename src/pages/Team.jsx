import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import ship from "../assets/ship.png"; // Update the path to your image
import { useState } from "react";
import FadeIn from "../components/FadeIn";
import TeamCard from "../components/TeamCard";
import FadeInContent from "../components/FadeInContent";
import bg from "../assets/team/Background.png";
import PageLoader from "../components/PageLoader";
import axios from "axios";
import { API_BASE_URL } from "../config";

const Team = () => {
  const [team24, setTeam24] = useState({});
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(0); // Track scroll state to apply animation
  const [transitioned, setTransitioned] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!transitioned && window.innerWidth>690) {
        const item = document.getElementById("team-title");
        let startY = 0;
        let endY = 0;

        const handleScroll = (e) => {
          e.preventDefault();

          const currentPosition = parseInt(
            item
              .querySelector("img")
              .style.transform.replace("translateX(", "")
              .replace("px)", "")
          );

          if (e.deltaY > 0 && currentPosition > -window.innerWidth) {
            setScrolling(window.innerWidth);
            setTimeout(() => {
              setTransitioned(true);
            }, 1000);
          }
        };

        const handleTouchStart = (e) => {
          startY = e.touches[0].clientY;
          console.log(startY);
        };

        const handleTouchMove = (e) => {
          e.preventDefault();
          endY = e.touches[0].clientY;
          console.log(endY);
        };

        const handleTouchEnd = () => {
          const swipeDistance = startY - endY;
          console.log(swipeDistance);
          if (swipeDistance > 50) {
            // Swipe left
            const currentPosition = parseInt(
              item
                .querySelector("img")
                .style.transform.replace("translateX(", "")
                .replace("px)", "")
            );

            if (currentPosition > -window.innerWidth ) {
              setScrolling(window.innerWidth);
              setTimeout(() => {
                setTransitioned(true);
              }, 1000);
            }
          }
        };

        item.addEventListener("wheel", handleScroll, { passive: false });
        item.addEventListener("touchstart", handleTouchStart, {
          passive: true,
        });
        item.addEventListener("touchmove", handleTouchMove, { passive: false });
        item.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
          item.removeEventListener("wheel", handleScroll);
          item.removeEventListener("touchstart", handleTouchStart);
          item.removeEventListener("touchmove", handleTouchMove);
          item.removeEventListener("touchend", handleTouchEnd);
        };
      }
    }
  }, [loading, transitioned]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
    const fetchEvents = async () => {
      const { data } = await axios.get(
        API_BASE_URL +"team/current-team/"
      );
      // console.log(data);
      const temp = Object.entries(data["Current-Team"]).map(
        ([vertical, members]) => ({
          id: vertical,
          name: vertical,
          members: members,
        })
      );
      setTeam24(temp);
      // console.log(temp);
      setLoading(false);
    };

    fetchEvents();
  }, []);
  // TODO:replace png images
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div className="team-main">
            <div id="team-title" className="team-title">
              <img
                src={ship}
                style={{
                  transform: `translateX(-${scrolling}px)`, // Apply horizontal translation based on scroll state
                  transition: "transform 0.9s ease-out", // Smooth transition for transform
                }}
                alt="ship"
              />
              <h3 className={`${transitioned ? "hide" : "visible"}`}>
                Scroll to see our Cruise
              </h3>
            </div>
            <div
              className="team-section"
              style={{ backgroundImage: `url(${bg})` }}
            >
              {team24.map((member) => (
                <FadeInContent key={member.id}>
                  <div className="team-position-section">
                    <div className="team-verticle w-full flex justify-center ">
                      <h1 className=" flex items-center justify-center">
                        {member.name == "Accommodation, Transport, Security"
                          ? "ATS"
                          : member.name}
                      </h1>
                    </div>
                    <div className="team-cards-container">
                      {member.members.map((team) => (
                        <TeamCard
                          key={team.id}
                          name={team.name}
                          position={team.vertical_name}
                          imgURL={`${API_BASE_URL}${team.image}`}
                          phone={team.phoneNo}
                          email={team.email}
                          linkedin={team.linkedin_link}
                          instagram={team.instagram_link}
                          yellow={member.id}
                        />
                      ))}
                    </div>
                  </div>
                </FadeInContent>
              ))}
               <Link to="/team24">
                <button className="current-team-btn bg-orange-400 text-white">
                  Go to Past Team Prometeo'24
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Team;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import { useState } from "react";
import FadeIn from "../components/FadeIn";
import TeamCard from "../components/TeamCard";
import FadeInContent from "../components/FadeInContent";
import bg from "../assets/team/Background.png";
import PageLoader from "../components/PageLoader";
import axios from "axios";

const Team = () => {
  const [team24, setTeam24] = useState({});
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
    const fetchEvents = async () => {
      const { data } = await axios.get('https://devluplabs.iitj.ac.in/ftadmin/current-team/');
      // console.log(data);
      const temp = Object.entries(data["Current-Team"]).map(([vertical, members]) => ({
        id: vertical,
        name: vertical,
        members: members,
      }));
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
          <div className="team-main" >
            <div className="animation h-svh w-full ">
              {/* <PageTitle
                title="Organizing Team"
                stone="Wisdom Elixir"
                bgImg={blueStone2}
                subheading="Meet the masterminds propelling our techno festival to new heights!"
                color="14,53,177"
              /> */}

              {/* animation here */}
            </div>

            <div className="team-section" style={{ backgroundImage: `url(${bg})` }}>
              {team24.map((member) => (
                <FadeInContent key={member.id}>
                  <div className="team-position-section">
                    <div className="team-verticle w-full flex justify-center ">
                      <h1 className=" flex items-center justify-center">{member.name=="Accommodation, Transport, Security"?"ATS":member.name}</h1>
                    </div>
                    <div className="team-cards-container">
                      {member.members.map((team) => (
                        <TeamCard
                          key={team.id}
                          name={team.name}
                          position={team.vertical_name}
                          imgURL={team.image}
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
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Team;

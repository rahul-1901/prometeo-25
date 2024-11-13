import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import { useState } from "react";
import FadeIn from "../components/FadeIn";
import TeamCard from "../components/TeamCard";
import FadeInContent from "../components/FadeInContent";
import bg from "../assets/team/Background.png";
import PageLoader from "../components/PageLoader";
import banner from "../assets/team/banner.png"
import PageTitle from "../components/PageTitle";
import blueStone2 from "../assets/blue-bottle.webp";
import DefaultIMG from "../assets/defaultIMG.jpg";

const Team = () => {
  const [team24, setTeam24] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;


    const verticles = [
      { "id": 1, "name": "Public Relations", "members": [
        {"id": 30, "name": "Anupam Singh Bhadouriya", "vertical": 3, "image": "https://imgur.com/fYyxlyR.jpg", "github_link": "", "instagram_link": "https://instagram.com/anupamsingh.25?igshid=YTQwZjQ0NmI0OA==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/anupam-singh-bhadouriya-525938256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "email": "bhadouriya.1@iitj.ac.in", "phoneNo": "7611856898"},
        {"id": 24, "name": "Nidhi Patel", "vertical": 3, "image": "https://imgur.com/5VZ7n6h.jpg", "github_link": "", "instagram_link": "https://instagram.com/nidhipatel233?igshid=dzFlYTl5bDFlODRh", "facebook_link": "", "linkedin_link": "", "email": "patel.32@iitj.ac.in", "phoneNo": "8154910122"},
        {"id": 12, "name": "Mohit Kumawat", "vertical": 3, "image": "https://imgur.com/sYVNQBi.jpg", "github_link": "", "instagram_link": "https://www.instagram.com/_kumawatmohit_/", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/kumawat-mohit/", "email": "kumawat.7@iitj.ac.in", "phoneNo": "7378242131"},
      ] },
      { "id": 2, "name": "Technical Events", "members": [
        {"id": 16, "name": "Devang Shrivastava", "vertical": 4, "image": "https://imgur.com/3ZAH9R3.jpg", "github_link": "", "instagram_link": "", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/feed/", "email": "shrivastava.11@iitj.ac.in", "phoneNo": "8889485733"},
        {"id": 13, "name": "Vidit Agrawal", "vertical": 4, "image": "https://imgur.com/lmdJZST.jpeg", "github_link": "", "instagram_link": "https://www.instagram.com/vidit2108/", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/vidit-agrawal-9a8496259/", "email": "agg", "phoneNo": "8140223000"},
        {"id": 2, "name": "Harshil Kaneria", "vertical": 4, "image": "https://imgur.com/fOpcdN2.jpg", "github_link": "", "instagram_link": "https://instagram.com/harshil__0733?igshid=MzNlNGNkZWQ4Mg==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/harshil-kaneria-917694229", "email": "k", "phoneNo": "7276464726"},
      ] },
      { "id": 3, "name": "Exhibition", "members":[
        {"id": 18, "name": "Ameen Rizvi", "vertical": 6, "image": "https://imgur.com/cOkcKcT.jpg", "github_link": "", "instagram_link": "https://www.instagram.com/a.mean.rizvi/", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/ameen-rizvi-755a7b224/", "email": "rizvi.1@iitj.ac.in", "phoneNo": "7045734582"},
        {"id": 5, "name": "Sandeep Singh", "vertical": 6, "image": "https://imgur.com/xJqIxlA.jpg", "github_link": "", "instagram_link": "https://instagram.com/innate.champ_sandy?igshid=OGQ5ZDc2ODk2ZA==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/sandeep-singh-401486227/", "email": "s", "phoneNo": "8467883884"},
        {"id": 22, "name": "Rishav Aich", "vertical": 6, "image": "https://imgur.com/PNejO2y.jpg", "github_link": "", "instagram_link": "https://instagram.com/rishavaich511?igshid=MzMyNGUyNmU2YQ==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/rishav-aich-ba88a7228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "email": "", "phoneNo": "7682816827"},
      ] },
      { "id": 5, "name": "Informals Events", "members":[
      ] },
      { "id": 7, "name": "Pronite", "members":[
        {"id": 15, "name": "Shivanshu Tomar", "vertical": 7, "image": "https://imgur.com/1VqE3PX.jpg", "github_link": "", "instagram_link": "https://instagram.com/vanshu_notfound?igshid=OGQ5ZDc2ODk2ZA==", "facebook_link": "", "linkedin_link": "https://in.linkedin.com/in/shivanshu-tomar-44355122b", "email": "", "phoneNo": "8384046310"},
        {"id": 10, "name": "Sushant Chivale", "vertical": 7, "image": "https://imgur.com/z0YkmAp.jpg", "github_link": "", "instagram_link": "https://instagram.com/sushant_chivale?igshid=OGQ5ZDc2ODk2ZA==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/sushant-chivale-ab6706234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "email": "", "phoneNo": "8888424929"},
      ] },
      { "id": 8, "name": "Marketing", "members":[
        // No members data provided
      ] },
    ];

    setTeam24(verticles);
    setMembers(verticles.members);
    setLoading(false);
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
                    <div className="team-verticle w-full flex justify-center">
                      <h1 className=" flex items-center justify-center">{member.name}</h1>
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
            <div className="past-team-main">
              <Link to="/team23">
                <button className="past-team-btn">
                  Checkout Team Prometeo'23
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

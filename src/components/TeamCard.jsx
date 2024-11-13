import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import DefaultIMG from "../assets/defaultIMG.jpg";
import "./TeamCard.css";
import yellowImageBox from "../assets/team/Image_Box.png"
import blueImageBox from "../assets/team/blueImagebox.png"
const TeamCard = ({
  name,
  position,
  imgURL,
  phone,
  email,
  linkedin,
  instagram,
  yellow
}) => {
  return (
    <>
      <div className="wrapper ">
        {/* image */}
        <div className="member-img" style={{ backgroundImage: `url(${imgURL})` }}>
          {  
            yellow%2!=0?(<img src={yellowImageBox} alt="" />):(<img src={blueImageBox} alt="" />)
          }
        </div>
        {/* text */}
        <div className="member-nm flex justify-center items-center w-full h-full">
          {name}
        </div>
      </div>
    </>
  );
};

export default TeamCard;

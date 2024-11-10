import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import DefaultIMG from "../assets/defaultIMG.jpg";
import "./TeamCard.css";
import imagebox from "../assets/team/Image_Box.png"
const TeamCard = ({
  name,
  position,
  imgURL,
  phone,
  email,
  linkedin,
  instagram,
}) => {
  return (
    <>
      <div className="wrapper ">
        {/* image */}
        <div className="member-img" style={{ backgroundImage: `url(${imgURL})` }}>
          <img src={imagebox} alt="" />
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

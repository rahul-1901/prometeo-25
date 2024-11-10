import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import DefaultIMG from "../assets/defaultIMG.jpg";
import "./TeamCard.css";

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
      <div className="wrapper bg-cyan-300">
        {/* image */}
        <div className="member-img bg-slate-800">

        </div>
      </div>
    </>
  );
};

export default TeamCard;

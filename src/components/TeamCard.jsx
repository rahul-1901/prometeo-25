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
      <div className="wrapper">
        <div className="membre">
          <div className="membre-img">
            <img src={imgURL ? imgURL : DefaultIMG} alt="" />
          </div>
          <div className="membre-info">
            <h1 className="name">{name}</h1>
            <p className="job">{position}</p>
          </div>
          <div className="overly left">
            <div className="middle">
              <div className="social-icones">
                {phone ? (
                  <a href={`tel:${phone}`} className="icon">
                    <AiOutlinePhone size={30} color="white" />
                  </a>
                ) : (
                  <></>
                )}
                {email ? (
                  <a href={`mailto:${email}`} className="icon">
                    <AiOutlineMail size={30} color="white" />
                  </a>
                ) : (
                  <></>
                )}
                {linkedin ? (
                  <a href={linkedin} className="icon">
                    <AiOutlineLinkedin size={30} color="white" />
                  </a>
                ) : (
                  <></>
                )}
                {instagram ? (
                  <a href={instagram} className="icon">
                    <AiOutlineInstagram size={30} color="white" />
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;

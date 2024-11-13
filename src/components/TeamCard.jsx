import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import DefaultIMG from "../assets/defaultIMG.jpg";
import "./TeamCard.css";
import yellowImage from "../assets/team/yellowboxsvg.svg"
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
  //TODO: how much from top
  return (
    <>
      <div className="wrapper ">
        {/* image */}
        <div className="membre ">
          <div className="member-img " >
            {  
              yellow%2!=0?( <div className="background-overlay " style={{ backgroundImage: `url(${yellowImage})`}}   ></div>)
              :( <div className="background-overlay " style={{ backgroundImage: `url(${blueImageBox})`}}   ></div>)
            }
            <img src={imgURL} alt="Image"/>
           
            
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
        {/* text */}
        <div className="member-nm flex justify-center items-center w-full h-full">
          {name}
        </div>
      </div>
    </>
  );
};

export default TeamCard;

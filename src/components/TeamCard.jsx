import React from "react";
import DefaultIMG from "../assets/defaultIMG.jpg";
import "./TeamCard.css";
import yellowImage from "../assets/team/yellowboxsvg.svg"
import blueImageBox from "../assets/team/blueImagebox.png"
import insta from "../assets/team/Insta.svg"
import linkdein from "../assets/team/link.svg"
import mail from "../assets/team/Mail.svg"
import phonesvg from "../assets/team/Phone.svg"
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
              yellow % 2 != 0 ? (<div className="background-overlay " style={{ backgroundImage: `url(${yellowImage})` }}   ></div>)
                : (<div className="background-overlay " style={{ backgroundImage: `url(${blueImageBox})` }}   ></div>)
            }
            { imgURL ?( <img src={imgURL} alt="" />): (<img src={DefaultIMG} />)}

          </div>
          <div className="overly left">
            <div className="middle">
              <div className="social-icones">
                {instagram ? (
                  <a href={instagram} className="icon" target="_blank" rel="noopener noreferrer">
                    <img src={insta} className="w-[30px] h-[30px]" alt="" />
                  </a>
                ) : (
                  <></>
                )}
                {linkedin ? (
                  <a href={linkedin} className="icon" target="_blank" rel="noopener noreferrer">
                    <img src={linkdein} className="w-[30px] h-[30px]" alt="" />
                  </a>
                ) : (
                  <></>
                )}
                {email ? (
                  <a href={`mailto:${email}`} className="icon" >
                    <img src={mail} className="w-[30px] h-[30px]" alt="" />
                  </a>
                ) : (
                  <></>
                )}

                {phone ? (
                  <a href={`tel:${phone}`} className="icon">
                    <img src={phonesvg} className="w-[30px] h-[30px]" alt="" />
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

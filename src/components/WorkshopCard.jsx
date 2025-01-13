import React from "react";
import { API_BASE_URL } from "../config";
import imageBox from "../assets/events/workshop-box.svg"
import btn1 from "../assets/events/button-1.svg"
import btn1h from "../assets/events/button-1hov.svg"
import btn2 from "../assets/events/button-2.svg"
import btn2h from "../assets/events/button-2hov.svg"
import "./WorkshopCard.css";

const WorkshopCard = ({
  imgURL,
  eventName,
  eventTime,
  eventButton,
  eventRegister,
  workshop,
  discription
}) => {
  const handleClick = () => {
    if (!eventRegister) {
      notify("Workshop Coming soon!!");
    } else {
      window.open(eventRegister);
    }
  }

  return (
    <div className='work-card' aria-labelledby="event card">
      <div className="event-card__filter membre">
        <div className="register-btn-div px-5 ml-2">
          <button className="work-btn">
            {discription}
          </button>
        </div>
        <a href={eventRegister}>
          <div className="member-img " >
            <div className="background-overlay " style={{ backgroundImage: `url(${imageBox})` }}   ></div>
            <img src={`${API_BASE_URL}${imgURL}`} alt="" />
          </div>
        </a>
      </div>
      <div className="contain">{eventName}</div>
      <div className="work-card__container ">
        <div className="btn-container" onClick={handleClick} >
          <img src={btn1} className="btn1" alt="" />
          <img src={btn1h} className="btn1-hov" alt="" />
        </div>

      </div>

    </div>
  );
};

export default WorkshopCard;

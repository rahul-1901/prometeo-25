import React from "react";
import { API_BASE_URL } from "../config";
import imageBox from "../assets/events/imageBox.svg"
import btn1 from "../assets/events/button-1.svg"
import btn1h from "../assets/events/button-1hov.svg"
import btn2 from "../assets/events/rulebook1.svg"
import btn2h from "../assets/events/rulebook2.svg"
import "./PreEventsCard.css";
import { toast } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";

const PreEventsCard = ({
  imgURL,
  eventName,
  eventTime,
  eventButton,
  eventRegister,
  workshop,
  description,
  rule
}) => {

  const notify = (mesg) => {
    toast(mesg, {
      duration: 3000, // Auto-close after 3 seconds
      position: "top-center", // Center the toast on the screen

    });
  };
  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  }
  const handleClick = () => {
    if (!eventRegister) {
      notify("Registration Coming soon!!");
    } else {
      window.open(eventRegister);
    }
  }
  const handleClick2 = () => {
    if (!rule) {
      notify("Rulebook Coming soon!!");
    } else {
      window.open(rule);
    }
  }
  
  return (
    <div className='event-card' aria-labelledby="event card">
      <div className="event-card__filter membre  ">
        <div className="register-btn-div">
          <p className="r-btn px-2">{truncateText(description, 35)}</p>
        </div>
        <a href={eventRegister}>
          <div className="member-img " >
            <div className="background-overlay " style={{ backgroundImage: `url(${imageBox})` }}   ></div>
            <img src={imgURL.replace(
              "http://localhost:8004",
              API_BASE_URL
            )} className="event-img" alt="" />
          </div>
        </a>
      </div>
      <div className="event-card__container ">
        <h2>{eventName}</h2>
        {/* <time>
          {eventTime
            .split("-")
            .join("-")
            .replace("01", "JAN")
            .replace("12", "DEC")}
        </time> */}
        <div className="work-card__container ">
        <div className="btn-container" onClick={handleClick}>
          <img src={btn1} className="btn1" alt="" />
          <img src={btn1h} className="btn1-hov" alt="" />
        </div>
        <div className="btn-container" onClick={handleClick2}>
          <img src={btn2} className="btn1" alt="" />
          <img src={btn2h} className="btn1-hov" alt="" />
        </div>

      </div>
        <div className="event-prize">
          {eventButton != "Coming soon..." ? (
            <>
              <p className="prizes">Prizes Worth</p>
              <span>{eventButton.replace("Prize", "")}</span>
            </>
          ) : (
            <></>
          )}
        </div>

      </div>

    </div>
  );
};

export default PreEventsCard;

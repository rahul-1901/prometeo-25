import React from "react";
import { API_BASE_URL } from "../config";
import "./PreEventsCard.css";

const PreEventsCard = ({
  imgURL,
  eventName,
  eventTime,
  eventButton,
  eventRegister,
  workshop,
}) => {
  return (
    <div className={workshop ? "event-card workshop" : `event-card`} aria-labelledby="event card">
      <div className="event-card__filter">
        <img
          className="event-card__photo"
          src={imgURL.replace(
            "http://localhost:8000",
            "https://apiv.prometeo.in"
          )}
          alt="A man in colorful clothing with the sun behind him on a beach."
        />
      </div>
      <div className="event-card__container">
        <h2>{eventName}</h2>
        <time>
          {eventTime
            .split("-")
            .reverse()
            .join("-")
            .replace("01", "JAN")
            .replace("12", "DEC")}
        </time>
        <div className="event-prize">
          {eventButton != "Coming soon..." ? (
            <>
              <p>Prizes Worth</p>
              <span>{eventButton.replace("Prize", "")}</span>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="register-btn-div">
        <a href={eventRegister}>
          <button>Register</button>
        </a>
      </div>
    </div>
  );
};

export default PreEventsCard;

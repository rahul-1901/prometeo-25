import React from "react";
import "./eventPasses.css";
import accPass from "../assets/passes/accommodation.webp";
import cutlPass from "../assets/passes/cultural.webp";

export default function EventPasses({ ...props }) {
  console.log(props)
  return (
    <div className="event_passes">
      <img className="event_passes" src={props.passType === "Accommodation" ? accPass : cutlPass} />
      <div className="overlay_text">
        <div className="event_passes_name">{props.fName}</div>
        <div className="regId">{props.regId}</div>
      </div>
    </div>
  );
}

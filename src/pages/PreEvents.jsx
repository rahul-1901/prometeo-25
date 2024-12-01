import React from "react";
import "./PreEvents.css";
import PreEventsCard from "../components/PreEventsCard";
import FadeInContent from "../components/FadeInContent";
import bplan from "../assets/bplan.png";
function createEntry(e) {
  return (
    <FadeInContent key={e.id}>
      <PreEventsCard
        imgURL={bplan}
        eventName={e.name}
        eventTime={e.date}
        eventRegister={e.external_link}
        eventButton={e.prize ? e.prize : "Coming soon..."}
        workshop={e.type === "informal"}
      />
    </FadeInContent>
  );
}

const PreEvents = (props) => {
  return (
    <div className="pre-events-main">
      <div className="pre-events-cards">
        <div className="pre-event-title">
        </div>
        <h2 className="blink_warning">
          {props.category === "Pre_Events" ? "Pre Events" : props.category}{" "}
          {props.workshop
            ? "Workshops"
            : props.informals
            ? "Informals"
            : props.category === "Pre_Events"
            ? ""
            : "Events "}{" "}
          registrations are closed!!!
        </h2>
        <div className="pre-events-cards-x">
          {props.data
            .filter((e) => {
              return (
                e.type === props.category.toLowerCase() ||
                props.category === "All"
              );
            })
            .map(createEntry)}
        </div>
      </div>
    </div>
  );
};

export default PreEvents;

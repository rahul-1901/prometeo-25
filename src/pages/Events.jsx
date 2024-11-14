import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import FadeInContent from "../components/FadeInContent";
import PageTitle from "../components/PageTitle";
import PageLoader from "../components/PageLoader";
import Go2Top from "../components/Go2Top";
import redStone from "../assets/red-bottle.webp";
import bg from "../assets/red-bg.webp";
import "./Events.css";
import PreEvents from "./PreEvents";
import pre_events from "../assets/events/pre-events.png";
import all_events from "../assets/events/all.png";
import technical_events from "../assets/events/technical.png";
import entrepreneurial_events from "../assets/events/entrepreneurial.png";
import eventsData from "./Events24";
import PreEventsCard from "../components/PreEventsCard";
import { events } from "@react-three/fiber";
import bplan from "../assets/bplan.png";

const Events = () => {
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const IMAGES = [
    {
      id: "1",
      url: redStone,
    },
    {
      id: "2",
      url: bg,
    },
  ];

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };
    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setLoading(false))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
  }, []);

  const element = document.getElementById("filter___id");

  function handleEventTab(e) {
    const filterBtns = document.querySelectorAll(".filter___button");
    const btn = filterBtns[e];
    filterBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  }

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div
            className="eventspage-main"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <FadeInContent>
              <div className="eventspage-events">
                <div className="events-heading">
                  <PageTitle
                    title="Events"
                    stone="Vitality Elixir"
                    bgImg={redStone}
                    // subheading="RELIVE THE MOMENTS THAT DEFINED INNOVATION, THE PIONEERING EVENTS OF PROMETEO'23!"
                    color="223,14,6"
                  />
                </div>
                <div className="filter" id="filter___id">
                  <button
                    className={`filter___button`}
                    onClick={(e) => {
                      setCategory("Pre_Events");
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      handleEventTab(0);
                    }}
                  >
                    <img className="" src={pre_events} alt="cloud" />
                  </button>
                  <button
                    className={`filter___button`}
                    onClick={(e) => {
                      setCategory("Technical");
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      handleEventTab(1);
                    }}
                  >
                    <img className="" src={technical_events} alt="cloud" />
                  </button>
                  <button
                    className={`filter___button`}
                    onClick={(e) => {
                      setCategory("Entrepreneurial");
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      handleEventTab(2);
                    }}
                  >
                    <img
                      className=""
                      src={entrepreneurial_events}
                      alt="cloud"
                    />
                  </button>
                  <button
                    className={`filter___button active`}
                    onClick={(e) => {
                      setCategory("All");
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      handleEventTab(3);
                    }}
                  >
                    <img className="" src={all_events} alt="cloud" />
                  </button>
                </div>
                <div className="pre-events" id="EventList">
                  {/* <h1>{category} Events</h1> */}
                  <PreEvents category={category} data={eventsData}/>
                  {/* <div className="event_cards_flex">
                    {eventsData.map(
                      (e) =>
                        e.type === category.toLowerCase() && (
                          <PreEventsCard
                            key={e.id}
                            imgURL={bplan}
                            eventName={e.name}
                            eventTime={e.date}
                            eventRegister={e.external_link}
                            eventButton={e.prize ? e.prize : "Coming soon..."}
                            workshop={e.type === "workshop"}
                          />
                        )
                    )}
                  </div> */}
                  {/* <PreEventsCard imgURL={redStone} eventName="Event Name" eventTime="Event Time" eventRegister="Event Register" eventButton="Event Button" workshop={true} /> */}
                </div>

                <div className="events-buttons">
                  <div className="events-allevents">
                    <Link
                      to="https://unstop.com/college-fests/prometeo23-indian-institute-of-technology-iit-jodhpur-80491"
                      target="_blank"
                    >
                      <button className="events-allevents-btn">
                        View Last Year Events
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInContent>
            {/* <iframe className="schedule" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1Rt01YMhN6phWYjU88ehzQQhECnlbfZZleDF1OzHkd1wBB5j5uL-fmyPEzgXI3omYY6NUOe_UH7zv/pubhtml?widget=true&amp;headers=false"></iframe> */}
          </div>
          <Go2Top />
        </FadeIn>
      )}
    </>
  );
};

export default Events;

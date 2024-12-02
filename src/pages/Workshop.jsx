import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import FadeInContent from "../components/FadeInContent";
import PageTitle from "../components/PageTitle";
import PageLoader from "../components/PageLoader";
import Go2Top from "../components/Go2Top";
import redStone from "../assets/blue_elixir.png";
import bg from "../assets/dashboard/dashboard_bg.png";
import "./Workshop.css";
import PreEvents from "./PreEvents";
import eventsDataTemp from "./Events24";

const Workshop = () => {
const [category, setCategory] = useState("All");
  const [eventsData, setEventsData] = useState({});
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
    setEventsData(eventsDataTemp)
  }, []);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const { data } = await axios.get(API_BASE_URL + `/events/event/?type=workshop&id=&rank=`);
  //     setEventsData(data);
  //     // console.log(data);
  //   };x

  //   fetchEvents();
  // }, []);

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
                    title="Workshop"
                    stone="Vitality Elixir"
                    bgImg={redStone}
                    // subheading="RELIVE THE MOMENTS THAT DEFINED INNOVATION, THE PIONEERING EVENTS OF PROMETEO'23!"
                    color="200,88,157"
                  />
                </div>
                {/* <div className="filter" id="filter___id">
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
                    className={`filter___button`}
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
                </div> */}
                <div className="pre-events workshops-content-main" id="EventList">
                  <PreEvents
                    category={category}
                    workshop={true}
                    data={eventsData}
                  />
                </div>
              </div>
            </FadeInContent>
          </div>
          <Go2Top />
        </FadeIn>
      )}
    </>
  );
};

export default Workshop;

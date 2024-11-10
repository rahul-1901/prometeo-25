import { useEffect, useState } from "react";
import axios from "axios";
import "./Speakers.css";
import { API_BASE_URL } from "../config";
import FadeIn from "../components/FadeIn";
import FadeInContent from "../components/FadeInContent";
// import Card2 from "../components/Speaker-Card";
import greenStone from "../assets/green-bottle.webp";
import bg from "../assets/green-bg.webp";
import PageTitle from "../components/PageTitle";
import PageLoader from "../components/PageLoader"

function SpeakerMessage(props) {
  return (
    <div className="blog-slider">
      <div className="blog-slider__item">
        <div className="blog-slider__img">
          <img src={props.image} alt="" />
        </div>
        <div className="blog-slider__content">
          <div className="blog-slider__title">{props.name}</div>
          <span className="blog-slider__code">{props.designation}</span>
          <div className="projcard-bar"></div>
          <div className="blog-slider__text">{props.description} </div>
        </div>
      </div>
    </div>
  );
}

function createEntry(term) {
  return (
    <SpeakerMessage
      key={term.id}
      image={term.image.replace(
        "http://localhost:8000",
        "https://apiv.prometeo.in"
      )}
      name={term.name}
      designation={term.designation}
      description={term.description}
    />
  );
}

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
    const fetchData = async () => {
      const { data } = await axios.get(
        API_BASE_URL + "/events/event/?type=talk&id=&rank="
      );
      setSpeakers(data);
    };
    fetchData();
  }, []);

  const IMAGES = [
    {
      id: "1",
      url: greenStone,
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

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div id="speakerPage" style={{ backgroundImage: `url(${bg})` }}>
            <FadeInContent>
              <div className="speakerHeading">
                <PageTitle
                  title="Past Speakers"
                  stone="Insight Elixir"
                  bgImg={greenStone}
                  subheading="DISCOVER THE VOICES IGNITING INNOVATION AT OUR TECHNO SYMPOSIUM!"
                  color="4, 147, 34"
                />
              </div>
              <div className="speakerCard">{speakers.map(createEntry)}</div>
            </FadeInContent>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Speakers;

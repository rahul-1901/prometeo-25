import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import "./Sponsors.css";
import FadeIn from "../components/FadeIn";
import FadeInContent from "../components/FadeInContent";
import Heading from "../components/Heading";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const getSponsors = async () => {
      const { data } = await axios.get(API_BASE_URL + "/home/sponsors/");
      setSponsors(data["Sponsors"]);
    };
    getSponsors();
  }, []);

  return (
    <FadeIn>
      <div className="container-spos">
        <div className="sponsors-container">
          <Heading
            title="SPONSORS"
            subheading={
              isMobile
                ? "Their support and partnership make success of Prometeo'24"
                : "Their invaluable support and partnership have been instrumental in making Prometeo 2024 a success."
            }
            alignment="center"
          />
        </div>
        {Object.keys(sponsors).map((spos, index) => (
          <FadeInContent>
            <div className="spos" key={index}>
              <div className="spos-title">
                <h1>{spos}</h1>
              </div>
              <div className="spos-image">
                {sponsors[spos].map((spos) => (
                  <img src={API_BASE_URL + spos.image} alt="" key={spos.name} />
                ))}
              </div>
            </div>
            <hr />
          </FadeInContent>
        ))}
      </div>
    </FadeIn>
  );
};

export default Sponsors;

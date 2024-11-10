import React from "react";
import { useEffect } from "react";
import FadeIn from "../../components/FadeIn";
import FadeInContent from "../../components/FadeInContent";
import PageTitle from "../../components/PageTitle";
import bg from "../../assets/darbar/golden_palace.png";
import goldStone from "../../assets/darbar/golden_elixir-removebg.png";
import "./darbar.css";
import UserCard from "./usercard";
import p1 from "../../assets/darbar/purabee.jpg"
import p2 from "../../assets/darbar/abhijeet.webp"
import p3 from "../../assets/darbar/mridula.jpg"
import p4 from "../../assets/darbar/raunak.jpg"
import p5 from "../../assets/darbar/sushil.jpg"
import p6 from "../../assets/darbar/devesh.jpg"
import p7 from "../../assets/darbar/ruchi.jpg"

const Darbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
  }, []);
  return (
    <FadeIn>
      <div className="darbar__main" style={{ backgroundImage: `url(${bg})` }}>
        <div className="darbaar__heading">
          <PageTitle
            title="Business Darbar"
            stone="From Pitch to Pinnacle"
            bgImg={goldStone}
            subheading=" Business Darbar, Where Visions Meet Visionaries."
            color="163, 86, 7"
          />
        </div>
        <div className="darbar__body">
          <div className="darbar__about">
            <div className="title">About</div>
            <div className="content">
              This is the flagship Entrepreneurial Event of Prometeo. Business
              Darbar is a pitching event where entrepreneurs are invited to
              pitch their venture to the panel consisting of Investors from
              various backgrounds. They will receive feedback from the panel,
              and they might have an opportunity to receive mentorship and
              funding from the investors.
            </div>
          </div>
          <div className="darbar__vision">
            <div className="title">Vision</div>
            <div className="content">
              Starting a new venture is a challenge and it is quite frequent
              that young founders lack proper mentorship and basic mistakes
              could be extremely threatening to the future of their venture. The
              vision of Business Darbar is to showcase the potential of
              innovative hidden ventures in India. It will serve as a platform
              for entrepreneurs to come and showcase their venture and pitch
              them in front of a panel of Investors. This will test their
              entrepreneurial aptitude.
            </div>
          </div>
          <div className="darbar__investors">
            <div className="title">Past Investors</div>
            <div className=" investor">
              <UserCard
                name="Purabee Mishra"
                description="CEO, IIT bhubaneswar Research and Entrepreneurship Park"
                imgUrl={p1}
              />
              <UserCard
                name="Abhijeet Kumar"
                description="Co-Founding Partner at ah! Ventures Fund"
                imgUrl={p2}
              />
              <UserCard
                name="Mridula Chhetri"
                description="Inmovidu, Founder and CEO"
                imgUrl={p3}
              />
              <UserCard
                name="Raunak Singhvi"
                description="iStart Rajasthan, Investor and Mentor"
                imgUrl={p4}
              />
              <UserCard
                name="Sushil Sharma"
                description="Mawari Catalysts, Founder and CEO"
                imgUrl={p5}
              />
              <UserCard
                name="Devesh Chawla"
                description="Chatur Ideas, Founder and CEO"
                imgUrl={p6}
              />
              <UserCard
                name="Ruchi Pincha"
                description="Unicorn India Ventures, Investment Associate"
                imgUrl={p7}
              />
            </div>
          </div>
          <div className="darbar__eligiblity">
            <div className="title">Eligibility</div>
            <div className="content">
              The event is open to all, startups can register and come to pitch
              it to the panel of investors
            </div>
          </div>
          <div className="darbar__rounds">
            <div className="title">Rounds</div>
            <div className="content">
              <ol type="1">
                <li>
                  Participants will be required to submit their pitch deck
                  (presentation) at the time of registration.
                </li>
                <li>
                  Shortlisted participants will be informed about their pitching
                  slot and other details from the team Prometeo.
                </li>
                <li>
                  The startups would be allotted time to pitch their business to
                  the panel, along with seeking investment, in the slot they are
                  allotted.
                </li>
              </ol>
            </div>
          </div>
          <div className="darbar__schedule">
            <div className="title">Schedule</div>
            <div className="content"></div>
          </div>
          <div className="darbar__rules">
            <div className="title">Rules</div>
            <div className="content">
              <ol type="1">
                <li>
                  Startups could be at any stage with their business,Ideation,
                  MVP, PMF etc
                </li>
                <li>
                  It is expected that the details shared during the pitching and
                  demonstration are genuine and true to existence, and there
                  must be no discrepancies between the details shared during the
                  pitching and that shared prior to the event during the
                  registration.
                </li>
                <li>
                  A healthy communication and discussion is expected during the
                  event.
                </li>
                <li>
                  The participants are expected to remain motivated and spirited
                  during the event, and feel free to have a discussion with the
                  panelists.
                </li>
              </ol>
            </div>
            <div className="darbar__tnc">
              <div className="title">Terms and condition</div>
              <div className="content">
                <ol type="1">
                  <li>
                    Indian Institute of Tur and Prometeo doeechnology Jodhps not
                    assure any participant of Business Darbar for funding from
                    the investors.
                  </li>
                  <li>
                    Funding and mentorship would be a mutual agreement between
                    panelist and participating startup, all details and data for
                    startup would be shared with the panelist.
                  </li>
                  <li>
                    The winner will be decided by the panelist and their
                    decision will be the final
                  </li>
                  <li>
                    Only one participating contender will be awarded with the
                    cash prize, who will be the winner of the event, other top
                    performers will be awarded with goodies and certificate from
                    IIT Jodhpur.
                  </li>
                  <li>No kind of plagiarism will be tolerated.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Darbar;

  import React, { useEffect, useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageLoader from "../components/PageLoader";
import FadeIn from "../components/FadeIn";
import Go2Top from "../components/Go2Top";
import "./accomodation.css";
import bg from "../assets/accommodation-bg.jpg";
import PassesCard from "../components/passesCard";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxios from "../context/UseAxios";
import { API_BASE_URL } from "../config";
import image4 from "../assets/hostels/image4.webp";
import image5 from "../assets/hostels/image5.webp";
import image7 from "../assets/hostels/image7.webp";
import image9 from "../assets/hostels/image9.webp";
import image10 from "../assets/hostels/image10.webp";
import image11 from "../assets/hostels/image11.webp";

const Accomodation = () => {
  const api = useAxios();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);

  const IMAGES = [{ id: "1", url: bg }];

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;

    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // Simulate loading time
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

    const fetchProfileData = async () => {
      try {
        if (user) {
          const response = await api.get(`${API_BASE_URL}/accounts/userdata/`);
          setIsProfileCompleted(response.data.isProfileCompleted);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleAccRegistration = () => {
    if (!user) {
      navigate("/register");
    } else {
      if (isProfileCompleted) {
        navigate("/dashboard");
      } else {
        // Redirect to profile completion page
        toast.error("Please complete your profile first");
        navigate("/edit-profile");
        console.log("Profile not completed");
      }
    }
  };

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div
            className="accomodation-main"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="acc-header">
              <h1>Accommodation</h1>
              <p>A COMFORTABLE AND CONVENIENT ACCOMMODATION IN PROMETEO</p>
            </div>
            <div className=" acc-passes">
              {/* <PassesCard /> */}
            </div>
            <div className="acc-content">
              <div className="acc-content-title">About us</div>

              <div className="acc-content-text">
                Indian Institute of Technology Jodhpur was established in 2008,
                to foster technology, education, and research in India. The
                Institute is committed to pursuing technological advancements in
                the process of the economic develop ment of India. It functions
                from its sprawling residential Permanent Campus of 852 acres,
                with the campus plan being awarded a 5-star rating by GRIHA
                Council The institute's infrastructure is vividly unique while
                optimizing all resources to become a near-zero-emission campus.
                The Institute is committed to a mul tidisciplinary approach to
                technological development and it has established MoUs with six
                international universities, two international agencies, and
                three national institutes and universities for academic
                cooperation and research, The big breakthroughs in the research
                field include A1 intelligent gloves equipped with speech to
                facilitate specially-abled people. Hope to see you at Prometeo
                2024. Please visit the Frequently Asked Questions (FAQ) section
                to get most of your queries resolved.
              </div>

              <div className="acc-content-title">Accommodation Guidelines</div>
              <div className="acc-content-list">
                <ol>
                  <li>
                    Every participant shall at all times be in possession of a
                    current, government-issued photo ID and student participants
                    must also carry a valid photo ID issued by their college. If
                    a visitor cannot present their identification card, they
                    will not be permitted to enter the Prometeo'24 campus.
                  </li>

                  <li>
                    Alcohol, drugs, illegal substances, sharp objects, and any
                    kind of explosives are absolutely prohibited on campus.
                    Anything else that is deemed hazardous is prohibited. The
                    Security and Prometeo'24 team's decision shall be final if
                    there are any disputes.
                  </li>

                  <li>
                    Throughout the fest of Prometeo '24, no outside vehicles
                    will be permitted on campus.
                  </li>

                  <li>
                    All participants are expected to maintain the campus's
                    decorum and cleanliness as well as to diligently and
                    consistently abide by its rules and regulations.
                  </li>

                  <li>
                    IIT Jodhpur and its students disclaim all liability for any
                    accidents that may or may not happen during the course of
                    Prometeo '24.
                  </li>

                  <li>
                    To prevent any unauthorized activities on campus, random
                    checks would be conducted.
                  </li>

                  <li>
                    Any commodities issued to the guests would have to be
                    returned in sound condition to the organizers during
                    check-out.
                  </li>

                  <li>
                    Anyone found visiting a hostel other than the one that is
                    designated will be penalized and appropriate action will be
                    taken against them.
                  </li>

                  <li>
                    Hostel guests must take care to prevent damage to the
                    institute's property and facilities, since those found
                    guilty of such behavior will be responsible for covering any
                    necessary repairs.
                  </li>

                  <li>
                    The administration will not be held liable for any damage or
                    loss of property or valuables of the participants stored in
                    places of lodging.
                  </li>

                  <li>
                    Participants are requested to refrain from causing any
                    disruptions to their other participants.
                  </li>

                  <li>
                    Institute will provide the pickup and drop facility to the
                    participants between bus/railway stations and campus during
                    the dates which will be announced soon.
                  </li>
                </ol>
              </div>

              <div className="acc-content-title">
                Instructions for school students
              </div>
              <div className="acc-content-list">
                <ol>
                  <li>
                    School students only need to register  and will not be
                    provided accomodation on campus because of security reasons.
                    Hence, they are not supposed to pay any fee during
                    registration.
                  </li>
                  <li>
                    Presence of a guardian (mentor/parents/teacher) is
                    compulsory for school students at all point of time when
                    they are participating or attending any event.
                  </li>
                  <li>
                    Presence of a guardian (mentor/parents/teacher) is
                    compulsory for school students at all point of time when
                    they are participating or attending any event.
                  </li>
                  <li>Prizes will also be provided accordingly.</li>
                </ol>
              </div>
              <div className="acc-content-title">Instructions</div>
              <div className="acc-content-list">
                <ol>
                  <li>
                    All guests carrying electronic items of any kind will have
                    to declare them at the IIT Jodhpur main gate through a ‘Gate
                    Pass'. The belongings will also be checked on the way out of
                    IIT Jodhpur along with the ‘Gate Pass', failing to do so
                    will result in the belongings being impounded.
                  </li>
                  <li>
                    All guests will be provided with mattress. Prometeo will
                    provide mattress cover, blankets & pillows.
                  </li>
                  <li>
                    Any commodities issued to the guests would have to be
                    returned in sound condition to the organisers during
                    check-out
                  </li>
                  <li>
                    Random checks would be made to avoid any illegal stay at the
                    campus. Any team failing to produce their
                    electronic/physical receipts of accommodation would be
                    heavily fined and disqualified.
                  </li>
                  <li>
                    Entry will be only through the 'Main Gate' of IIT Jodhpur.
                    All other gates will be closed for entry.
                  </li>
                  <li>
                    All guests are required to carry their valid government
                    photo id proofs at all times. In addition, the student
                    participants are also required to carry their valid College
                    photo id card. Any guest failing to produce their id card
                    will not be permitted inside the campus during Prometeo
                    2024.
                  </li>
                  <li>
                    Alcohol, drugs, sharp objects and explosives of any kind are
                    strictly prohibited inside the campus. Any other item if
                    deemed unsafe will be prohibited. The decision of Security
                    and Prometeo team will be final in case of any disputes.
                  </li>
                  <li>
                    No outside vehicles will be allowed into the campus during
                    the Prometeo 2024.
                  </li>
                  <li>
                    All guests are required to maintain the decorum and
                    cleanliness of the campus, and follow the rules of the
                    campus at all times.
                  </li>
                </ol>
                <ol>
                  Prometeo 2024 and IIT Jodhpur will not be responsible for any
                  mishaps that occur through the duration of stay for Prometeo
                  2024
                </ol>
              </div>
              <button onClick={handleAccRegistration} className="acc-button">
                <span className="button-text">Register</span>
              </button>
            </div>
            <div className="acc-content">
              <div className="acc-content-title" id="acc-faq-div">
                FAQ's
              </div>
              <div className="acc-faq-questions">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>What are the accommodation charges?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The accommodation charges and other important details will
                      be available on the website or will be notified by the PR
                      team soon.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      Will all the team members be given accommodation at the
                      same place?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We will try but there is no surety of the same.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      What kind of accommodation will be provided?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Accommodation will be provided on a shared basis inside
                      campus hostels. One mattress, and enough space for keeping
                      luggage, and other essential commodities will be provided.
                      Girls and boys will be accommodated separately. Number of
                      participants in a room will be decided and will be
                      allotted by the Prometeo '24 team.
                      <br />
                      <div className="hostel-images-container">
                        <img src={image10} alt="" className="hostel-image" />
                        <img src={image4} alt="" className="hostel-image" />
                        <img src={image5} alt="" className="hostel-image" />
                        <img src={image7} alt="" className="hostel-image" />
                        <img src={image9} alt="" className="hostel-image" />
                        <img src={image11} alt="" className="hostel-image" />
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      Does the accommodation charges include food facilities
                      too?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, Food facilities are included in the accommodation
                      charges and will be provided in the Hostel mess. Paid
                      services such as food court, Shamiyana - Institute Cafe,
                      and canteen are also available.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      Can I enter the IIT-J Campus anytime?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You can enter IIT Main gate anytime by showing valid photo
                      ID proof and the registration ID (mail) during 6am to
                      10pm.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <Go2Top />
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Accomodation;

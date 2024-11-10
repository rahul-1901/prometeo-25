import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import FadeIn from "../components/FadeIn";
import { API_BASE_URL } from "../config";
import locationData from "../components/State";
import bg from "../assets/pre-register-lossy.webp";
import PageLoader from "../components/PageLoader";
import "./pre_registration.css";
import { useNavigate } from "react-router-dom";

const Preregister = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
  }, []);

  const [data, setData] = useState({
    States: [],
    Cities: {},
  });
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [college, setcollege] = useState("");
  const [year, setyear] = useState("");
  const [contact, setcontact] = useState("");
  const [state, setSelectedState] = useState("");
  const [city, setSelectedCity] = useState("");
  const [gender, setSelectedgender] = useState("");
  const [ca, setCA] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const IMAGES = [
    {
      id: "1",
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
  const fetchData = useCallback(async () => {
    setData(locationData[0]);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity(""); // Reset city selection
    setCityOptions(data.Cities[state] || []);
  };
  const handleemailchange = (e) => {
    const emails = e.target.value;
    const parts = emails.split("@");
    const domain = parts[1].toLowerCase();
    setemail(parts[0] + "@" + domain);
  };
  async function signUp(e) {
    e.preventDefault();
    let isCA = ca === "Yes" ? true : false;
    let item = {
      name,
      email,
      college,
      isCA,
      contact,
      year,
      state,
      city,
      gender,
    };
    console.log(item);
    // let isValid;
    // if (contact.length == 10) {
    //   isValid = true;
    // } else {
    //   isValid = false;
    // }

    // if (isValid === true) {
    try {
      let result = await fetch(API_BASE_URL + "/accounts/preregister/", {
        method: "POST",
        // setemail(email);
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (result.status === 200) {
        toast.success("Successfully Pre-Registered");
        setname("");
        setemail("");
        setcollege("");
        setCA("");
        setyear("");
        setcontact("");
        setSelectedState("");
        setSelectedCity("");
        setSelectedgender("");
        setCityOptions([]);
      } else {
        console.log("error");
        toast.error("Something went wrong");
      }
      // result = await result.json();
      // localStorage.setItem("user-info", JSON.stringify(result));
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    // } else toast.error("Please enter valid phone number!");
  }
  const navigate = useNavigate();
  useEffect(() => {
    const toastId = toast.error("Pre-Registration is Closed");
    setTimeout(() => {
      toast.dismiss(toastId);
      navigate("/closed")
    }, 1850);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div
            className="pre-registration-page"
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* <div className="pre-registration-bg"></div> */}
            <div className="pre-registration-form-main">
              <div className="pre-registration-heading">Pre Registration</div>
              <form className="" onSubmit={signUp}>
                <div className="pre-registration-form">
                  <input
                    className="pre-registration-input"
                    type="text"
                    name="Name"
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Name"
                    value={name}
                    required
                    autoFocus
                  />
                  <input
                    className="pre-registration-input"
                    type="email"
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="E-mail"
                    value={email}
                    required
                  />
                  <input
                    className="pre-registration-input"
                    type="college"
                    name="college"
                    onChange={(e) => setcollege(e.target.value)}
                    placeholder="College"
                    value={college}
                    required
                  />

                  <select
                    className="pre-registration-select"
                    name="ca"
                    placeholder="Apply for Campus Ambassador?"
                    value={ca}
                    onChange={(e) => setCA(e.target.value)}
                  >
                    <option value="" disabled>
                      Apply for Campus Ambassador?
                    </option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                  <select
                    className="pre-registration-select"
                    name="year"
                    value={year}
                    onChange={(e) => setyear(e.target.value)}
                  >
                    <option value="" disabled>
                      Select your Year
                    </option>

                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                    <option value="6">Graduated</option>
                    <option value="7">Faculty/Staff</option>
                    <option value="8">NA</option>
                  </select>

                  <select
                    className="pre-registration-select"
                    name="state"
                    value={state}
                    onChange={handleStateChange}
                  >
                    <option value="" disabled>
                      Select your State
                    </option>
                    {data.States.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>

                  <select
                    className="pre-registration-select"
                    name="city"
                    value={city}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="" disabled>
                      Select your City
                    </option>
                    {cityOptions.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <select
                    className="pre-registration-select"
                    name="gender"
                    value={gender}
                    onChange={(e) => setSelectedgender(e.target.value)}
                  >
                    <option value="" disabled>
                      Select your gender
                    </option>

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    className="pre-registration-input"
                    type="contact"
                    name="contact"
                    pattern="[1-9]{1}[0-9]{9}"
                    onChange={(e) => setcontact(e.target.value)}
                    value={contact}
                    placeholder="Contact Number"
                    required
                  />
                </div>
                <input
                  type="submit"
                  name="submit"
                  className="pre-register-submit"
                  value=""
                />
              </form>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Preregister;

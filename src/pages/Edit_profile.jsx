import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Signup.css";
import toast from "react-hot-toast";
import useAxios from "../context/UseAxios";
import { API_BASE_URL } from "../config";

const Edit_profile = ({}) => {
  const api = useAxios();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [college, setCollege] = useState("");
  const [contact, setContact] = useState("");
  const [ca, setCa] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [referralCode2, setReferralCode2] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const city = e.target.city.value;
    const college = e.target.college.value;
    const contact = e.target.phone.value;
    const gender = e.target.gender.value;
    const referral_code =
      e.target.referral_code.value === ""
        ? "none"
        : e.target.referral_code.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const ambassador = ca === false ? e.target.ca.checked : true;

    try {
      console.log(userData.id, " user_id");
      const response = await api.patch(
        `${API_BASE_URL}/accounts/update/${userData.id}/`,
        {
          first_name,
          last_name,
          city,
          college,
          contact,
          gender,
          referral_code,
          ambassador,
        }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Profile Updated Successfully");
        navigate("/dashboard");
      } else {
        console.log("error");
      }
    } catch (error) {
      toast.error(error.response.data.error );

      
    }
  };
  // console.log("heloo")
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
    const userDetails = async () => {
      const response = await api.get(`${API_BASE_URL}/accounts/userdata/`);
      if (response.status === 200) {
        setUserData(response.data);
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setCity(response.data.city);
        setCollege(response.data.college);
        setContact(response.data.contact);
        setCa(response.data.ambassador);
        const bool = response.data.referral_code === "none";
        {
          bool
            ? (setReferralCode(""), setReferralCode2(""))
            : (setReferralCode(response.data.referral_code),
              setReferralCode2(response.data.referral_code));
        }
        // console.log(response.data.referral_code);
        setEmail(response.data.email);
        // console.log(response.data);
      } else {
        console.log("error");
      }
    };
    userDetails();
  }, []);
  // console.log(referralCode);
  // console.log(referralCode2);

  return (
    <div className="signup-container-right" style={{ marginTop: "10vh" }}>
      <div className="signup-container-right-title">Edit Your Profile</div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-form-name">
          <input
            type="text"
            name="first_name"
            placeholder="First Name *"
            maxLength={100}
            value={firstName}
            // {console.log(value)}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name *"
            maxLength={100}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="text"
          name="city"
          placeholder="City *"
          maxLength={40}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="text"
          name="college"
          placeholder="College *"
          maxLength={60}
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          pattern="[6-9]{1}[0-9]{9}"
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
          onInvalid={(e) => {
            e.target.setCustomValidity(
              "Please enter a valid phone number e.g. 9876543210"
            );
          }}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <div className="signup-gender-dropdown">
          {/* <label htmlFor="gender" className="signup-gender-dropdown-label">
            Gender
          </label> */}
          <select
            name="gender"
            id="gender"
            className="signup-gender-dropdown-select"
          >
            <option className="signup-gender-option" selected disabled hidden>
              -- Select gender--
            </option>
            <option className="signup-gender-option" value="Male">
              Male
            </option>
            <option className="signup-gender-option" value="Female">
              Female
            </option>
            <option className="signup-gender-option" value="Other">
              Other
            </option>
          </select>
        </div>
        {ca === false ? (
          <div className="signup-ca-checkbox">
            <input type="checkbox" name="ca" id="signup-ca-checkbox-input" />
            <label htmlFor="ca" className="signup-ca-checkbox-label">
              I want to signup for <Link to="/ca">CA Program</Link>
            </label>
          </div>
        ) : (
          <></>
        )}
        {/* <div className="signup-acc-checkbox">
          <input type="checkbox" name="acc" id="signup-acc-checkbox-input" />
          <label htmlFor="acc" className="signup-acc-checkbox-label">
            I would like to avail accommodation at IIT Jodhpur campus and agree
            to abide by the <Link to="/accommodation">guidelines</Link> of the
            same.
          </label>
        </div> */}
        <input
          type="text"
          name="referral_code"
          maxLength={8}
          placeholder="Referral Code (If any)"
          value={referralCode}
          onChange={
            referralCode2 === ""
              ? (e) => setReferralCode(e.target.value)
              : false
          }
          //   {bool ? (setReferralCode("")):(setReferralCode(response.data.referral_code))}
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          autoComplete="username"
          value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* <input
          id="signup-form-password"
          type="password"
          name="password"
          placeholder="Password *"
          autoComplete="new-password"
          onKeyUp={handleConfirmPassword}
          required
        />
        <div className="signup-form-confirmpassword-container">
          <input
            id="signup-form-confirmpassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password *"
            autoComplete="new-password"
            onKeyUp={handleConfirmPassword}
            required
          />
          <div id="signup-form-confirmpassword-warning">
            Passwords do not match!
          </div>
        </div> */}
        <input type="submit" value="Submit" id="signup-form-submit" />
        <br />
      </form>
      {/* <div className="signup-alreadyAccount">
        Don't want to update your profile, Go to <button onClick={handleSignin}>Homepage</button>
      </div> */}
    </div>
  );
};

export default Edit_profile;

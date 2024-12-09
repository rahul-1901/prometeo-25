import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Edit_profile.css";
import manFace from "../assets/edit_profile/manFace.webp";
import toast from "react-hot-toast";
import useAxios from "../context/UseAxios";
import editBg from "../assets/edit_profile/editProfile.webp"
import { API_BASE_URL } from "../config";

const Edit_profile = ({ }) => {
  const api = useAxios();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [college, setCollege] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
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
      toast.error(error.response.data.error);
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
    <div
      className="edit_profile_main"
      style={{ backgroundImage: `url(${editBg})` }}
    >
      <div className="man_face_edit md:flex hidden">
        <img className="man_face" src={manFace}></img>
      </div>
      <div className="edit_profile_form_container">
        <div className="edit_profile_form_container">
          <div className="edit-container-right-title">Edit Your Profile</div>
          <form className="edit-form" onSubmit={handleSubmit}>
            <div className="edit-form-name">
              <input
                type="text"
                name="first_name"
                placeholder="First Name *"
                maxLength={100}
                value={firstName}
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
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
              onInvalid={(e) => {
                e.target.setCustomValidity(
                  "Please enter a valid phone number e.g. 9876543210"
                );
              }}
              required
            />
            <div className="w-full flex gap-3">
              <div className="edit-gender-dropdown">
                <select
                  name="gender"
                  id="gender"
                  className="edit-gender-dropdown-select h-12 text-white"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option className="edit-gender-option" value="" disabled hidden>
                    &nbsp;Gender
                  </option>
                  <option className="edit-gender-option" value="Male">
                    &nbsp; Male
                  </option>
                  <option className="edit-gender-option" value="Female">
                    &nbsp; Female
                  </option>
                  <option className="edit-gender-option" value="Other">
                    &nbsp; Other
                  </option>
                </select>
              </div>
              <input
                type="text"
                name="referral_code"
                maxLength={8}
                placeholder="Referral Code (If any)"
                className="input"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email (Read-only)"
              value={email}
              readOnly
              required
            />
            <div className="edit-ca-checkbox">
              <input
                type="checkbox"
                name="ca"
                id="edit-ca-checkbox-input"
                checked={ca}
                onChange={(e) => setCa(e.target.checked)}
              />
              <label htmlFor="ca" className="edit-ca-checkbox-label">
                I want to signup for{" "}
                <Link to="/ca" className="text-[#D183F0] underline">
                  CA Program
                </Link>
              </label>
            </div>
            <input type="submit" value="Submit" id="edit-form-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit_profile;

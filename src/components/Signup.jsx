import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";

const Signup = ({ handleSignin }) => {

  const { registerUser } = useContext(AuthContext);

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
    const email = e.target.email.value;
    const password = e.target.password.value;
    const ambassador = e.target.ca.checked;
    const accomodation = e.target.acc.checked;
    const current_year=e.target.current_year.value;

    const myPromise = new Promise((resolve, reject) => {
      registerUser(
        first_name,
        last_name,
        city,
        email,
        password,
        college,
        contact,
        gender,
        referral_code,
        ambassador,
        accomodation,
        current_year
      )
        .then((res) => {
          handleSignin();
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

    toast.promise(myPromise, {
      loading: "Creating your account...",
      success: "Registered Successfully!",
      error: "Something went wrong!",
    });

  };
  const handleConfirmPassword = () => {
    let passEle = document.getElementById("signup-form-password");
    let confPassEle = document.getElementById("signup-form-confirmpassword");
    let confPassWarningEle = document.getElementById(
      "signup-form-confirmpassword-warning"
    );
    if (confPassEle.value != "") {
      if (passEle.value == confPassEle.value) {
        confPassEle.style.color = "green";
        confPassWarningEle.style.visibility = "hidden";
      } else {
        confPassEle.style.color = "red";
        confPassWarningEle.style.visibility = "visible";
      }
    } else {
      confPassEle.style.color = "black";
      confPassWarningEle.style.visibility = "hidden";
    }
  };
  return (
    <div className="signup-container-right ">
      <div className="line2 border-l-0  md:border-l-2 border-dashed border-[#D183F0]">
        <div className="signup-container-right-title">SIGN UP</div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-form-name">
            <input
              type="text"
              name="first_name"
              placeholder="First Name *"
              maxLength={100}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name *"
              maxLength={100}
              required
            />
          </div>
          <input
            type="text"
            name="city"
            placeholder="City *"
            maxLength={40}
            required
          />
          <input
            type="text"
            name="college"
            placeholder="College *"
            maxLength={60}
            required
          />
          <div className="w-full flex gap-3 " >
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
              required
            />
            <div className="signup-gender-dropdown ">
              <select
                name="current_year"
                id="current_year"
                className="signup-gender-dropdown-select h-12 text-white "
              >
                <option className="signup-gender-option " selected disabled hidden>
                  &nbsp;Current Year of Study
                </option>
                <option className="signup-gender-option" value="1">
                  &nbsp; 1st Year
                </option>
                <option className="signup-gender-option" value="2">
                  &nbsp; 2nd Year
                </option>
                <option className="signup-gender-option" value="3">
                  &nbsp; 3rd Year
                </option>
                <option className="signup-gender-option" value="4">
                  &nbsp; 4rd Year
                </option>
                <option className="signup-gender-option" value="5">
                  &nbsp; 5rd Year
                </option>
                <option className="signup-gender-option" value="6">
                  &nbsp; Graduated
                </option>
                <option className="signup-gender-option" value="7">
                  &nbsp; Faculty/Staff
                </option>
                <option className="signup-gender-option" value="8">
                  &nbsp; NA
                </option>
              </select>
            </div>
          </div>
          <div className="w-full flex gap-3 " >
            <div className="signup-gender-dropdown ">
              <select
                name="gender"
                id="gender"
                className="signup-gender-dropdown-select h-12 text-white "
              >
                <option className="signup-gender-option " selected disabled hidden>
                  &nbsp;Gender
                </option>
                <option className="signup-gender-option" value="Male">
                  &nbsp; Male
                </option>
                <option className="signup-gender-option" value="Female">
                  &nbsp; Female
                </option>
                <option className="signup-gender-option" value="Other">
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
            />
          </div>

          <input type="email" name="email" placeholder="Email *" autoComplete="username" required />
          <div className="w-full flex gap-3">
            <input
              id="signup-form-password"
              type="password"
              name="password"
              placeholder="Password *"
              autoComplete="new-password"
              onKeyUp={handleConfirmPassword}
              required
              className="h-11"
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
            </div>
          </div>

          <div className="signup-ca-checkbox">
            <input type="checkbox" name="ca" id="signup-ca-checkbox-input" />
            <label htmlFor="ca" className="signup-ca-checkbox-label">
              I want to signup for <Link to="/ca" className="text-[#D183F0] underline">CA Program</Link>
            </label>
          </div>
          <div className="signup-acc-checkbox">
            <input type="checkbox" name="acc" id="signup-acc-checkbox-input" />
            <label htmlFor="acc" className="signup-acc-checkbox-label">
              I would like to avail accommodation at IIT Jodhpur campus and agree
              to abide by the <Link to="/accommodation" className="text-[#D183F0] underline">guidelines</Link> of the
              same.
            </label>
          </div>
          <input type="submit" value="Submit" id="signup-form-submit" />
          <br />
        </form>
        <div className="signup-alreadyAccount">
          Already have an account? <button className="log-in" onClick={handleSignin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

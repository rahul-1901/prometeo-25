import "./Register.css";
import SignUp from "../components/Signup";
import SignIn from "../components/Signin";
import login_gate from "../assets/login-gate.png";
import signup_gate from "../assets/signup-gate.png";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
    if(user){
      navigate("/dashboard");
    }
  }, []);
  const handleSignup = () => {
    const container = document.getElementById("form-container-id");
    const signIn = document.getElementById("sign-in-container-id");
    const signUp = document.getElementById("sign-up-container-id");
    container.classList.add("right-panel-active");
    signIn.classList.add("hide-it");
    signUp.classList.remove("hide-it");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleSignin = () => {
    const container = document.getElementById("form-container-id");
    const signIn = document.getElementById("sign-in-container-id");
    const signUp = document.getElementById("sign-up-container-id");
    container.classList.remove("right-panel-active");
    signIn.classList.remove("hide-it");
    signUp.classList.add("hide-it");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="form-container-main" id="form-container-id">
      <div
        className="form-container sign-up-container hide-it"
        id="sign-up-container-id"
      >
        <SignUp handleSignin={handleSignin} />
      </div>
      <div
        className="form-container sign-in-container"
        id="sign-in-container-id"
      >
        <SignIn handleSignup={handleSignup} />
      </div>
      <div className="register-overlay-container">
        <div className="register-overlay">
          <div className="register-overlay-panel register-overlay-left">
            {/* <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p> */}
            <img src={login_gate} alt="" />
          </div>
          <div className="register-overlay-panel register-overlay-right">
            {/* <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p> */}
            <img src={signup_gate} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

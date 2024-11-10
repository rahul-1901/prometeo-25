import { useContext } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";
import "./Signin.css";

const Signin = ({ handleSignup }) => {
  const { loginUser, loginGoogleUser } = useContext(AuthContext);
  // var csrf_token = document.cookie.split("=")[1];
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const myPromise = new Promise((resolve, reject) => {
      loginUser(email, password)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });


    toast.promise(myPromise, {
      loading: "Logging you in...",
      success: "Logged in successfully!",
      error: (err) => `${err.toString() == "Unauthorized"?"Invalid Credentials!":"Something went wrong!"}`,
    });
  };

  function onGoogleLoginSuccess(res) {
    const userObject = jwt_decode(res.credential);

    const email = userObject.email;
    const given_name = userObject.given_name;

    const myPromise = new Promise((resolve, reject) => {
      loginGoogleUser(email, given_name)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

    toast.promise(myPromise, {
      pending: "Logging you in...",
      success: "Logged in successfully!",
      error: {
        render: ({ data }) => {
          if (data == "Unauthorized") {
            return "Invalid Credentials!";
          }
          return "Something went wrong!";
        },
      },
    });
  }

  function onGoogleLoginFailure(res) {
    console.log("Failure:", res);
  }

  return (
    <div className="login-container-right">
      <div className="login-container-right-title">LOGIN</div>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* <input type="text" placeholder="Full Name" name="full_name" required /> */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="current-password"
          required
        />
        <input type="submit" value="Submit" id="login-form-submit" />
        <br />
        OR
        <div id="googleOAuth-login">
          <GoogleOAuthProvider
            clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}
          >
            <GoogleLogin
              // buttonText="Log In Using Google"
              onSuccess={onGoogleLoginSuccess}
              onFailure={onGoogleLoginFailure}
            />
          </GoogleOAuthProvider>
        </div>
      </form>
      <div className="login-noaccount">
        Don't have an account? <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signin;

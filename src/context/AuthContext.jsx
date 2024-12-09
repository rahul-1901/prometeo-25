import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);
  const isRegistrationClosed = false;
  const registerUser = async (
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
    accomodation
  ) => {
    const register_data = {
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
    };
    if (isRegistrationClosed) {
      toast.success("Registrations are closed!!!");
      throw error;
    } else {
      const response = await fetch(`${API_BASE_URL}/signup/`, {
        method: "POST",
        body: JSON.stringify(register_data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        navigate("/register");
        return response;
      } else {
        throw response.statusText;
      }
    }
  };
  const loginUser = async (email, password) => {
    if (isRegistrationClosed) {
      toast.success("Registrations are closed!!!");
      throw error;
    } else {
      const response = await fetch(`${API_BASE_URL}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        // console.log(data)
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        // console.log(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/dashboard");
        return response;
      } else {
        throw response.statusText;
      }
    }
  };
  const loginGoogleUser = async (email, given_name) => {
    if (isRegistrationClosed) {
      toast.success("Registrations are closed!!!");
    } else {
      const response = await fetch(`${API_BASE_URL}/google-login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          given_name,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        const newData = {
          access: data.access_token,
          refresh: data.refresh_token,
        };
        setAuthTokens(newData);
        setUser(jwt_decode(newData.access));
        localStorage.setItem("authTokens", JSON.stringify(newData));
        // toast.pending("Logging in...");
        navigate("/dashboard");
        toast.success("Successfully Logged in");
        return response;
      } else {
        throw response.statusText;
      }
    }
  };
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/register");
    toast.success("Logged out successfully!");
  };
  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    logoutUser,
    loginUser,
    loginGoogleUser,
  };
  useEffect(() => {
    const decodeTokens = async () => {
      try {
        if (authTokens) {
          setUser(jwt_decode(authTokens.access));
        }
      } catch (error) {
        console.error("Error decoding access token:", error);
      } finally {
        setLoading(false);
      }
    };

    decodeTokens();
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

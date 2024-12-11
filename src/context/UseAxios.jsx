import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import toast from "react-hot-toast";
const useAxios = () => {
  const { authTokens, setUser, setAuthTokens, logoutUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: authTokens?.access
        ? `Bearer ${authTokens.access}`
        : undefined,
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    try {
      const user = jwt_decode(authTokens.access);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (!isExpired) return req;

      const response = await axios.post(
        `${API_BASE_URL}accounts/token/refresh/`,
        {
          refresh: authTokens.refresh,
        }
      );

      console.log("Refresh token updated");

      localStorage.setItem("authTokens", JSON.stringify(response.data));

      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.access));

      req.headers.Authorization = `Bearer ${response.data.access}`;
    } catch (error) {
      console.error("Error refreshing token:", error);

      if (error.response && error.response.status === 401) {
        toast.error("Session expired. Please login again.");
        logoutUser();
        navigate("/register");
      }
    }

    return req;
  });

  return axiosInstance;
};

export default useAxios;

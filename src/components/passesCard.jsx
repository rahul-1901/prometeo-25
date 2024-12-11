import { useEffect, useState } from "react";
import "./passesCard.css";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { pdfURL } from "../config";
import useAxios from "../context/UseAxios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function createEntry(e) {
  return (
    <li key={e.id} className={e[0] === "0" ? "cross" : "tick"}>
      {e.substring(1)}
    </li>
  );
}

const PassesCard = ({ user, isProfileCompleted }) => {
  const [passData, setPassData] = useState([]);
  const [passCondition, setPassCondition] = useState(false);
  const api = useAxios();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPassData = async () => {
      const { data } = await axios.get(API_BASE_URL + `accounts/pass-detail/`);
      setPassData(data);
    };
    console.log(passData);
    fetchPassData();
  }, []);
  useEffect(() => {
    const userDetails = async () => {
      const response = await api.get(`${API_BASE_URL}accounts/user-passes/`);
      console.log(response);
      if (response.status === 200) {
        setPassCondition(true);
      } else if (response.status === 400) {
        setPassCondition(false);
      }
    };
    userDetails();
  }, []);

  const handleBuyPasses = () => {
    // console.log(user);
    if (!user) {
      toast.error("Please login!");
      navigate("/register");
    } else {
      if (isProfileCompleted) {
        if (passCondition) {
          toast.success("You have already purchased the pass");
          navigate("/dashboard");
        } else {
          window.open(pdfURL, "_blank");
        }
      } else {
        // Redirect to profile completion page
        toast.error("Please complete your profile first");
        navigate("/edit-profile");
        console.log("Profile not completed");
      }
    }
  };

  return (
    <div className="passes-main">
      {passData.map((data) => (
        <div class="card">
          <div class="offer-title">{data.name}</div>
          {
            data.cost === 1500
            ?
            <div className="limited-time a">
              Limited Time Offer
            </div>
            :
            <></>
          }
          <p className="offer-price removetaxes">
            {data.cost === 1500 ? (
              <div className="">
                <span class="original-price">1749</span>
                <span>{data.cost}</span>
              </div>
            ) : (
              data.cost
            )}
          </p>
          <ul>{data.description.split("\n").map(createEntry)}</ul>
          <button className="buy" onClick={handleBuyPasses}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default PassesCard;

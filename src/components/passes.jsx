import React, { useEffect, useState } from "react";
import "./passes.css";
import firstOne from "../assets/dashboard/prome.png";
import useAxios from "../context/UseAxios";
import secondOne from "../assets/dashboard/iitLogo.png";
import { API_BASE_URL } from "../config";
import qrCode from "../assets/dashboard/qrCode.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthContext";
import proniteBg from "../assets/dashboard/passes.png";
import workshopBg from "../assets/dashboard/workShopBg.png";
import QRCodeCustom from "../components/QrCodeCustom";
import regisBg from "../assets/dashboard/regi.png";

const Passes = ({ isPassOpen, closePass }) => {
  const [userData, setUserData] = useState({});
  const api = useAxios();

  useEffect(() => {
    const userDetails = async () => {
      const response = await api.get(`${API_BASE_URL}accounts/userdata/`);
      if (response.status === 200) {
        setUserData(response.data);
        console.log(response.data.pass_type);
        console.log(response.data);
      } else {
        console.log("error");
      }
    };
    userDetails();
  }, []);

  const bgResponsive = () => {
    switch (userData.pass_type) {
      case "Registration Pass":
        return { backgroundImage: `url(${regisBg})` };
      case "Pronite Pass":
        return { backgroundImage: `url(${proniteBg})` };
      case "Workshop Stay Pass":
        return { backgroundImage: `url(${workshopBg})` };
    }
  };

  return (
    <>
      {isPassOpen && (
        <div className="passesBack">
          <div className="passesOverlay">
            <button className="closeButtonpass" onClick={closePass}>
              X
            </button>
            <div className="passes" style={bgResponsive()}>
              <div className="blurLayers"></div>
              <div className="prometeoLogo">
                <p>PROMETEO</p>
                <p className="twoZero">2025</p>
              </div>
              <div className="logoSection">
                <img className="firstOne" src={firstOne} alt="Prometeo Logo" />
                <div className="lineBetween"></div>
                <img className="secondOne" src={secondOne} alt="IIT Logo" />
              </div>
              <div className="passesName">
                <p className="firstZero">
                  {userData.pass_type === "Registration Pass" && "Registration"}
                  {userData.pass_type === "Workshop Stay Pass" && "Workshop"}
                  {userData.pass_type === "Pronite Pass" && "Pronite"}
                </p>
                <p className="twoZero">PASS</p>
              </div>
              <div className="namePass">
                <p className="userName">
                  {userData.first_name + " " + userData.last_name}
                </p>
                <div className="nameUnderline"></div>
                {/* <img className="qrCode" src={qrCode} alt="QR Code" /> */}
                <div className="qrCode">
                  <QRCodeCustom />
                </div>
                <p className="confidential">
                  Disclaimer: Keep the pass confidential
                </p>
                <p className="confidential1">
                  Reveal only at Pronite Entry Gate.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Passes;

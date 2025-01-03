import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './modal.css'
import registration from "../../assets/Instruction/Registration.jpeg"
import { Start } from "@mui/icons-material";
const Modal = ({ isModalOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-back">
          <div className="modal-overlay" onClick={closeModal}>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <div className="modal">
              <h2 className="modal-title">Instructions for Registration Pass</h2>
            <h3 className="modal-title">Read Carefully</h3>
                <li>You need not add the coupon code on the payment gateway, it will be automatically applied, when you click Proceed to gateway.                </li>
                <li>This Registration fee includes Accommodation for the three days, Mess food(breakfast and Lunch) for three days of the fest, Participation in events, Pronite pass. This does not include the cost of workshops and informal events.                 </li>
                <li>The cost is Inclusive of GST</li>
                <li>The pass is nonrefundable and nontransferable in case of cancellation from your side.</li>
                <li  style={{fontWeight:820}}>You should fill the same data(email, name,phone number) in the gateway form that you have used for registering on Prometeo.in</li>
                <li>To successfully register
                  <li style={{fontWeight:820}}>Click proceed to the gateway </li>
                  <li>Add details </li>
                  <li>select Registration from the drop-down menu.
                    <img src={registration} alt="" />
                  </li>
                  <li>Proceed to payment</li>
                  <li>Wait patiently</li>
                </li>
                <li>You Will receive an email regarding the payment and The payment status will be updated in 60-90 minutes.</li>
                <div>Note: if you select any other slab than 'Registration', then there's no chance of refund and you'll need to pay the full amount again to avail of registration. </div>
                <a href="https://form.qfixonline.com/ataef" target="_blank" rel="noopener noreferrer">
                <button type="submit" className="modal-button" >
                Proceed to gateway
                </button>
                </a>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Modal;


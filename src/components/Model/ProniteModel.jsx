import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './modal.css'
import registration from "../../assets/Instruction/pronite.jpeg"
import { Start } from "@mui/icons-material";
const ProniteModal = ({ isModalOpen, closeModal }) => {
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
              <h2 className="modal-title">Instructions for Pronite Pass</h2>
            <h3 className="modal-title">Read Carefully</h3>
                <li>The pronite Pass only consists of the cost of the Pronite/EDM Night happening on the last day of the fest. We will not handle the transportation or any other costs besides the cost of entering the pronite area.                </li>
                <li>The cost is Inclusive of GST</li>
                <li>The pass is non-refundable in case of cancellation from your side.                </li>
                <li>To successfully register
                  <li style={{fontWeight:820}}>Click proceed to the gateway </li>
                  <li>Add details </li>
                  <li>select Pronite from the drop-down menu.
                    <img src={registration} alt="" />
                  </li>
                  <li>Proceed to payment</li>
                  <li>Wait patiently</li>
                </li>
                <li>You Will receive an email regarding the payment and The payment status will be updated in 60-90 minutes.</li>
                <div>Note: if you select any other slab than 'Pronite', then there's no chance of refund and you'll need to pay the full amount again to avail of registration. </div>
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

export default ProniteModal;


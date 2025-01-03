import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './modal.css'
import registration from "../../assets/Instruction/workshop.jpeg"
import { Start } from "@mui/icons-material";
const WorkshopModal = ({ isModalOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

 

  return (
    <>
      {isModalOpen && (
        <div className="modal-back">
          <div className="modal-overlay" onClick={closeModal}>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <div className="modal">
              <h2 className="modal-title">Instructions for Workshop Stay Pass              </h2>
            <h3 className="modal-title">Read Carefully</h3>
                <li>The workshop stay pass includes the cost of accommodation and mess food(breakfast and lunch) for three days for people who are interested only in workshops. This does not bear the cost of the Workshops, Pronite, and informal events. </li>
                <li>You can buy the pronite pass later on if you are interested.
                </li>
                <li>The cost is Inclusive of GST</li>
                <li>The pass is nonrefundable and nontransferable in case of cancellation from your side.</li>
                <li>To successfully register
                  <li style={{fontWeight:820}}>Click proceed to the gateway </li>
                  <li>Add details </li>
                  <li>select Workshop (only accommodation)  from the drop-down menu.
                    <img src={registration} alt="" />
                  </li>
                  <li>Proceed to payment</li>
                  <li>Wait patiently</li>
                </li>
                <li>You Will receive an email regarding the payment and The payment status will be updated in 60-90 minutes.</li>
                <div>Note: if you select any other slab than 'Workshop', then there's no chance of refund and you'll need to pay the full amount again to avail of registration. </div>
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

export default WorkshopModal;


import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ isModalOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    const { name, email, phone } = formData;

    // Check for empty fields
    if (!name || !email || !phone) {
      toast.error("All fields are required.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Validate phone number (10 digits, not starting with 0)
    const phoneRegex = /^[1-9][0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    // Validate name (should not contain numbers)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      toast.error("Name should not contain numbers or special characters.");
      return;
    }
    setIsLoading(true); // Set loading to true

    try {
      // Make the POST request using Fetch API
      const response = await axios.post("https://google-script-dusky.vercel.app/proxy",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.data.status === "success") {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        toast.error("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        toast.error("Error: " + error.response.data);
      } else if (error.request) {
        console.log("Request details:", error.request);
        toast.error("Network error:", error.request.data);
      } else {
        toast.error("Error: " + error.message);
      }
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or error
      closeModal();
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-back">
          <div className="modal-overlay" onClick={closeModal}>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="ice-top"></div>
              <h2 className="modal-title">PRE-REGISTER</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="modal-input"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="modal-input"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="modal-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <button type="submit" className="modal-button" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "SUBMIT"}
                </button>
              </form>
              {/* <p className="contact-link">Contact Us</p> */}
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Modal;


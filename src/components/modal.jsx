// import React from "react";

// const Modal = ({ isModalOpen, closeModal }) => {
//   return (
//     <>
//       {isModalOpen && (
//         <div className="modal-back">
//           <div className="modal-overlay" onClick={closeModal}>
//             <button className="close-button" onClick={closeModal}>
//               X
//             </button>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//               <div className="ice-top"></div>
//               <h2 className="modal-title">PRE-REGISTER </h2>
//               <form>
//                 <input type="text" placeholder="Name" className="modal-input" />
//                 <input type="email" placeholder="Email" className="modal-input" />
//                 <input type="tel" placeholder="Phone" className="modal-input" />
//                 <button type="submit" className="modal-button">SUBMIT</button>
//               </form>
//               <p className="contact-link">Contact Us</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;

import React, { useState } from "react";

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
    e.preventDefault();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwrf36IJRN-JD3fYxoMatPzpsWrp0Y8ZRtSfNPr_aOhin7gt8BQzRzQi_C1z1ehUrN9/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      alert("Error submitting form: " + error);
    }

    closeModal();
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
              <h2 className="modal-title">PRE-REGISTER </h2>
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
                <button type="submit" className="modal-button">SUBMIT</button>
              </form>
              <p className="contact-link">Contact Us</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

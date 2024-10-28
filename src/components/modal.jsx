import React from "react";

const Modal = ({ isModalOpen, closeModal }) => {
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
              <form>
                <input type="text" placeholder="Name" className="modal-input" />
                <input type="email" placeholder="Email" className="modal-input" />
                <input type="tel" placeholder="Phone" className="modal-input" />
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

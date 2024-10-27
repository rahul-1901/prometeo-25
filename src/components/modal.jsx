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
              <h2>Pre-register for Updates</h2>
              <p>Enter your details to stay informed about our launch.</p>
              {/* Include form inputs or additional modal content here if needed */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

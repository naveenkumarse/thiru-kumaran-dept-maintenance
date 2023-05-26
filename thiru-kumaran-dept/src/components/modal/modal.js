import React from "react";
import "./modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Invalid Credentials</h1>
        </div>
        <div className="body">
          <p>Please enter your valid username and password!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
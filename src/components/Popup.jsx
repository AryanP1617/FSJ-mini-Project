import React from "react";
import "./Popup.css";

function Popup({ isOpen, onSubmit, children }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {children}
        <button className="popup-submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Popup;

// EventModal.js
import React from "react";
import "./EventModal.css";

const EventModal = ({ closeModal, eventData }) => {
  return (
    <div className="event-modal-overlay" onClick={closeModal}>
      <div className="event-modal">
        <div className="img-div-modal">
          <img src={eventData.image} alt={eventData.title} />
        </div>
        <div className="modal-content">
          <div className="text-content">
            <h2 className="popup-title">{eventData.title}</h2>
            <h3 className="popup-description">Event Description</h3>
            <p className="popup-desc">{eventData.description}</p>
            <h3 className="popup-outcomet">Event Outcome</h3>
            <p className="popup-outcome">{eventData.outcomes}</p>
            <button className="popup-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;

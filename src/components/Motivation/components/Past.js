// Past.js
import React, { useState } from "react";
import "./Past.css";
import EventModal from "./EventModal";
import pastimg1 from "../../../media/pastimg1.jpg";
import pastimg2 from "../../../media/pastimg2.jpg";
import pastimg3 from "../../../media/pastimg3.jpg";

const Past = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (eventData) => {
    setModalData(eventData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const eventsData = [
    {
      title: "Blood Donation Event",
      date: "24 Nov, 2021",
      description:
        "In October 2023, our community came together for the Lifesaver Blood Drive, an impactful and life-changing event dedicated to promoting blood donation and saving lives. Held at the local community center, the event aimed to address the critical need for blood donations in hospitals and clinics.  ",
      image: pastimg1,
      outcomes:
        "The Lifesaver Blood Drive successfully collected a substantial volume of blood units, contributing significantly to the local blood bank's reserves.  Increased awareness within the community about the critical need for regular blood donations and their direct impact on saving lives. Strengthened community bonds as residents rallied together for a shared humanitarian cause. Enhanced community resilience, as the event laid the foundation for a continued commitment to blood donation programs in the future.",
    },
    {
      title: "Event 2",
      date: "25 Nov, 2021",
      description:
        "Description for Event 2. Another detailed description to showcase the idea.",
      image: pastimg2,
      outcomes: "Positive outcomes and impact of Event 2.",
    },
    {
      title: "Event 3",
      date: "26 Nov, 2021",
      description:
        "Description for Event 3. A unique event description for demonstration purposes.",
      image: pastimg3,
      outcomes: "Positive outcomes and impact of Event 3.",
    },
    // Add more events as needed
  ];

  return (
    <div className="past-main-div">
      <div className="container">
        {eventsData.map((event, index) => (
          <div className="row" key={index}>
            <div className="col-md-4">
              <div className="img-div-past">
                <img src={event.image} alt={`Event ${index + 1}`} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="past-events-contents">
                <span className="event-date">{event.date}</span> <br />
                <a className="event-title">{event.title}</a>
                <p className="event-text">
                  {event.description.slice(0, 200)}...
                </p>
                <a className="read-more" onClick={() => openModal(event)}>
                  Learn More...
                </a>
              </div>
            </div>
            <div className="col-md-1 text-right last-div">
              <div className="shape-event"></div>
            </div>
          </div>
        ))}
      </div>
      {modalData && (
        <EventModal closeModal={closeModal} eventData={modalData} />
      )}
    </div>
  );
};

export default Past;

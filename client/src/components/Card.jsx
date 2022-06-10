import React from "react";

export const Card = ({ contact }) => {

  // ----- Render ----- (Presentational Component == no logic)

  return (
    <div className="contact-card">
      <img
        src={contact.avatar}
        alt="avatar"
      />
      <div className="contact-content">
        <h3>{contact.first_name}&nbsp;{contact.last_name}</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>City: {contact.city}</p>
        <p>Country: {contact.country}</p>
        <p>University: {contact.university}</p>
        <p>Job: {contact.job}</p>
        <p>Department: {contact.department}</p>
      </div>
    </div>
  );
};

export default Card;
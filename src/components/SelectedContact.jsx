import React, { useEffect, useState } from "react";
import "./SelectedContact.css";

function SelectedContact({ setSelectedContactId, selectedContactId }) {
  console.log("SelectedContact() - selectedContactId = ", selectedContactId);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    console.log("SelectedContact() - useEffect is called");
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        console.log("SelectedContact().fetchContact() data - ", data);
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  console.log("SelectedContact() - contact = ", contact);
  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="selected-contact">
      <div className="selcted-contact-contact">
        <p className="selected-contact-item">Name: {contact.name}</p>
        <p className="selected-contact-item">Email: {contact.email}</p>
        <p className="selected-contact-item">Phone Number: {contact.phone}</p>
      </div>

      <div className="slected-contact-address">
        <p className="selected-contact-item">
          Street: {contact.address.street}
        </p>
        <p className="selected-contact-item">City: {contact.address.city}</p>
        <p className="selected-contact-item">
          Zip Code: {contact.address.zipcode}
        </p>
      </div>

      <button
        className="selected-contact-button"
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default SelectedContact;

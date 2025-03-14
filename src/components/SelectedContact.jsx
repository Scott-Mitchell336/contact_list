import React, { useEffect, useState } from "react";

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
    <div>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phone}</p>
      <p>City: {contact.address.city}</p>
      <p>Street: {contact.address.street}</p>
      <p>Zip Code: {contact.address.zipcode}</p>
      <button
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

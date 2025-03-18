//
// ContactRow.jsx
// Created by Scott Mitchell on 03/14/2025
// Block 26 - Contact List
//

import React from "react";

function ContactRow({ setSelectedContactId, contact }) {
  console.log("ContactRow() - contact = ", contact);
  console.log("ContactRow() - setSelectedContactId = ", setSelectedContactId);

  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

export default ContactRow;

//
// ContactList.jsx
// Created by Scott Mitchell on 03/14/2025
// Block 26 - Contact List
//

import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow.jsx";
import "./ContactList.css";

function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  console.log("ContactList() - setSelectedContactId: ", setSelectedContactId);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const data = await response.json();
        console.log(data);
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              setSelectedContactId={setSelectedContactId}
              contact={contact}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ContactList;

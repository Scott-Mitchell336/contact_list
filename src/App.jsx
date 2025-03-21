//
// App.jsx
// Created by Scott Mitchell on 03/14/2025
// Block 26 - Contact List
//

import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList.jsx";
import SelectedContact from "./components/SelectedContact.jsx";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  console.log("App() - selectedContactId = ", selectedContactId);
  console.log("App() - setSelectedContactId = ", setSelectedContactId);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          setSelectedContactId={setSelectedContactId}
          selectedContactId={selectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import './index.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://www.raydelto.org/agenda.php')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error(error));
  }, []);

  const handleContactAdded = contact => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="container">
      <h1>Lista de Contactos</h1>
      <div className="content">
        <AddContact onContactAdded={handleContactAdded} />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.nombre}</td>
                <td>{contact.apellido}</td>
                <td>{contact.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

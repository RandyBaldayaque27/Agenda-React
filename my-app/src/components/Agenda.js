import React from 'react';
import ContactList from './ContactList';

function Agenda(props) {
  const { contacts } = props;

  return (
    <div>
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>Cargando lista de contactos...</p>
      )}
    </div>
  );
}

export default Agenda;

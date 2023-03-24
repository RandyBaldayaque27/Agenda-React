import React, { useState } from 'react';

function AddContact({ onContactAdded }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = { nombre, apellido, telefono };

    fetch('http://www.raydelto.org/agenda.php', {
      method: 'POST',
      body: JSON.stringify(newContact)
    })
      .then(response => response.json())
      .then(data => {
        // Llamamos a la función de callback para que se actualice la lista de contactos
        onContactAdded(data);
        // Limpiamos los campos del formulario
        setNombre('');
        setApellido('');
        setTelefono('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Contacto</h2>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />

      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        value={apellido}
        onChange={(event) => setApellido(event.target.value)}
      />

      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="text"
        id="telefono"
        value={telefono}
        onChange={(event) => setTelefono(event.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddContact;

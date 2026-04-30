import { useState } from "react";

function FormSimple() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const manejaSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${name} Edad: ${age}`);
  };
  return (
    <div>
      <fieldset>
        <legend>Formulario con alerta</legend>
        <form onSubmit={manejaSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            name="nombre"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
          <label htmlFor="edad">Edad</label>
          <input
            name="edad"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Ingresa tu edad"
          />
          <button type="submit">Enviar</button>
        </form>
      </fieldset>
    </div>
  );
}

export default FormSimple;

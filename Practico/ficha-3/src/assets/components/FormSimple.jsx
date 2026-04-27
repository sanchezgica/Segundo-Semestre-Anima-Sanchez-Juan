import { useState } from "react";

function FormSimple() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const manejaSubmit = (e) => {
    e.preventDefault();
    alert("Formulario Enviado");
  };
  return (
    <div>
      <fieldset>
        <legend>Formulario con alerta</legend>
        <form onSubmit={manejaSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
          <input
            type="text"
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

import { useState } from "react";

function FormTarjeta() {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const manejaSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {show && (
        <fieldset>
          <legend>Formulario para tarjeta</legend>
          <form onSubmit={manejaSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingresa el titulo"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ingresa la descripción"
            />
            <button type="submit" onClick={() => setShow(!show)}>
              Enviar
            </button>
          </form>
        </fieldset>
      )}
      {!show && (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default FormTarjeta;

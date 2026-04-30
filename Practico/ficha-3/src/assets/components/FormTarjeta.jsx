import { useState } from "react";
import Card from "./Card";

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
            <label htmlFor="title">Titulo</label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingresa el titulo"
            />
            <label htmlFor="description">Titulo</label>
            <input
              name="description"
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
      {!show && <Card title={title} description={description}></Card>}
    </div>
  );
}

export default FormTarjeta;

import { useState } from "react";

function Tarjeta(props) {
  const [count, setCount] = useState(120);
  const suma = () => setCount((count) => count + 1);
  return (
    <div
      className="card d-flex flex-column align-items-center p-4"
      style={{ height: "520px", width: "260px" }}
    >
      <img
        src={props.image}
        alt="Imagen de perfil"
        className="card-top img-fluid border border-white border-round object-fit-border"
        style={{ width: "150px", height: "150px" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <hr />
        <p>{count + " Me gusta"}</p>
        <button className="button" onClick={suma}>
          Me gusta
        </button>
      </div>
    </div>
  );
}

export default Tarjeta;

import { useState } from "react";

function Tarjeta(props) {
<<<<<<< HEAD
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
=======
  const [count, setCount] = useState(665);
  const [show, setShow] = useState(false);
  return (
    <div className="card p-2 text-center" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt={props.album} />
      <div className="card-body">
        <h5 className="card-title">{props.album}</h5>
        <p className="card-subtitle">Artista: {props.artist}</p>
        <hr />
        <span>
          <p className="important">¡{count} Fans Totales!</p>
        </span>
        <button
          disabled={show}
          className={show ? "btn btn-disabled" : "btn btn-primary"}
          onClick={() => {
            setCount((count) => count + 1);
            setShow(!show);
          }}
          style={{ width: "100%" }}
        >
          {show ? "¡Eres Fan!" : "Ser Fan"}
>>>>>>> 2b44ce38a34c277bf522dddaa6f7f5f2c730c65a
        </button>
      </div>
    </div>
  );
}

export default Tarjeta;

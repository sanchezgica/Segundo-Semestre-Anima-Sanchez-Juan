import { useState } from "react";

function Tarjeta(props) {
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
        </button>
      </div>
    </div>
  );
}

export default Tarjeta;

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(12);
  const suma = () => setCount((count) => count + 1);
  const resta = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  const [mostrar, setMostrar] = useState(true);
  const cambioMostrar = () => {
    setMostrar(!mostrar);
  };
  return (
    <div className="container">
      <button className="counter" onClick={resta}>
        -
      </button>
      <span>
        <h2>{count}</h2>
        {mostrar && <p>(Nota de la ficha)</p>}
      </span>
      <button className="counter" onClick={suma}>
        +
      </button>
      <button className="counter" onClick={cambioMostrar}>
        {mostrar ? (
          <span>
            <img
              className="icon"
              src="../src/assets/hidden.png"
              alt="hide icon"
            />
            <p>Ocultar</p>
          </span>
        ) : (
          <span>
            <img className="icon" src="../src/assets/eye.png" alt="show icon" />
            <p>Mostrar</p>
          </span>
        )}
      </button>
    </div>
  );
}

export default Counter;

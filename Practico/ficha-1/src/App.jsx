import { useState } from "react";
import "../src/assets/hidden.png";
import "../src/assets/eye.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
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
    <>
      <section id="center">
        <h1>Ficha 1 - Contador</h1>
        <div className="container">
          <button className="counter" onClick={resta}>
            -
          </button>
          <div className="texto">{mostrar && <p>{count}</p>}</div>
          <button className="counter" onClick={suma}>
            +
          </button>
          <button className="counter" onClick={cambioMostrar}>
            {mostrar ? (
              <span className="container-span" style={{ gap: "4px" }}>
                <img
                  className="icon"
                  src="../src/assets/hidden.png"
                  alt="hide icon"
                />
                <p>Ocultar</p>
              </span>
            ) : (
              <span className="container-span" style={{ gap: "4px" }}>
                <img
                  className="icon"
                  src="../src/assets/eye.png"
                  alt="show icon"
                />
                <p>Mostrar</p>
              </span>
            )}
          </button>
        </div>
      </section>
    </>
  );
}

export default App;

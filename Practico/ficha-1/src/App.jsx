import { useState } from "react";

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
          {mostrar && <p>{count}</p>}
          <button className="counter" onClick={suma}>
            +
          </button>
          <button className="counter" onClick={cambioMostrar}>
            {mostrar ? "Ocultar" : "Mostrar"}
          </button>
        </div>
      </section>
    </>
  );
}

export default App;

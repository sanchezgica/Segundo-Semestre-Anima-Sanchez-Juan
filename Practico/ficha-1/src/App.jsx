import { useState } from "react";
import "../src/assets/hidden.png";
import "../src/assets/eye.png";
import "./App.css";
import Counter from "./components/counterComponent";

function App() {
  return (
    <>
      <section id="center">
        <h1>Ficha 1 - Contador</h1>
<<<<<<< HEAD
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
=======
        <Counter></Counter>
>>>>>>> 3f214d1ce927b83580b4b973ff3110512f6811db
      </section>
    </>
  );
}

export default App;

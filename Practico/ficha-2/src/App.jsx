import { useState } from "react";
import "./App.css";
import Tarjeta from "./components/tarjeta";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div>
        {visible && <Tarjeta></Tarjeta>}
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "Ocultar" : "Mostrar"}
        </button>
      </div>
    </>
  );
}

export default App;

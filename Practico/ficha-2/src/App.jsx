import { useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";
import ListaSimple from "./components/ListaSimple";
import TarjetaLista from "./components/TarjetaLista";

function App() {
  const [visible, setVisible] = useState(true);
  const personas = [
    { id: 1, nombre: "Ana", rol: "Frontend" },
    { id: 2, nombre: "Juan", rol: "Backend" },
    { id: 3, nombre: "Sergio", rol: "Ux" },
  ];
  return (
    <>
      <h1>Ficha 2 - Listas y Renders Dinámicos</h1>
      <h3>1.1 Lista simple a partir de un array.</h3>
      <div>
        <ListaSimple></ListaSimple>
      </div>
      <h3>1.2 Tarjetas desde una lista.</h3>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {personas.map((persona) => (
          <TarjetaLista
            key={persona.id}
            nombre={persona.nombre}
            rol={persona.rol}
          ></TarjetaLista>
        ))}
      </div>
      <h3>1.3 Lista con botón</h3>
      <div>
        {visible && <Tarjeta></Tarjeta>}
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "Ocultar Lista" : "Mostrar Lista"}
        </button>
      </div>
    </>
  );
}

export default App;

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
      <div>
        <ListaSimple></ListaSimple>
      </div>
      <div>
        {personas.map((persona) => (
          <TarjetaLista
            key={persona.id}
            nombre={persona.nombre}
            rol={persona.rol}
          ></TarjetaLista>
        ))}
      </div>
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

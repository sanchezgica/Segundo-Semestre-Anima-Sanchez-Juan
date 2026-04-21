import { useState } from "react";
import "./App.css";
import Semaforo from "./components/Semaforo";
import SaludoPersonalizado from "./components/Saludo";
import TituloVivo from "./components/Ejercicio4";
import RelojSimple from "./components/Ejercicio5";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Semaforo></Semaforo>
      <SaludoPersonalizado></SaludoPersonalizado>
      <TituloVivo></TituloVivo>
      <RelojSimple></RelojSimple>
    </>
  );
}

export default App;

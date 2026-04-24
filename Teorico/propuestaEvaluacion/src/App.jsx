import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Tarjeta from "./components/Tarjeta.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tarjeta
        name="Gorillaz"
        image="https://upload.wikimedia.org/wikipedia/en/c/c6/Gorillaz_family.jpg"
      ></Tarjeta>
    </>
  );
}

export default App;

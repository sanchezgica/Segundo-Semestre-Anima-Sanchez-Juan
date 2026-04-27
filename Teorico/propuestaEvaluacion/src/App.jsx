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
<<<<<<< HEAD
        name="Gorillaz"
        image="https://upload.wikimedia.org/wikipedia/en/c/c6/Gorillaz_family.jpg"
=======
        artist="Gorillaz"
        image="https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG?_=20240708154720"
        album="Demon Days"
>>>>>>> 2b44ce38a34c277bf522dddaa6f7f5f2c730c65a
      ></Tarjeta>
    </>
  );
}

export default App;

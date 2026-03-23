import { useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <>
      <Tarjeta
        name="Rick Sánchez"
        image="https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png"
        descripcion="Universo C-137"
        link="https://rickandmorty.fandom.com/es/wiki/Rick_S%C3%A1nchez"
      />
      <Tarjeta
        name="Morty Smith"
        image="https://static.wikia.nocookie.net/rickandmorty/images/2/24/Morty_Smith_%28C-131%29.png/revision/latest?cb=20230115032731"
        descripcion="Universo Prime"
        link="https://rickandmorty.fandom.com/es/wiki/Rick_S%C3%A1nchez"
      />
    </>
  );
}

export default App;

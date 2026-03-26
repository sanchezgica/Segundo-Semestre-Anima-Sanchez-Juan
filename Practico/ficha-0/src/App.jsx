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
      <Tarjeta
        name="Summer Smith"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcostumerocket.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fsummer-smith.jpg&f=1&nofb=1&ipt=06869c778e17ed6890180b4b3679ef1206bf9e930d2dd52876601892d0442909"
        descripcion="Universo Respaldo"
        link="https://rickandmorty.fandom.com/wiki/Summer_Smith"
      ></Tarjeta>
    </>
  );
}

export default App;

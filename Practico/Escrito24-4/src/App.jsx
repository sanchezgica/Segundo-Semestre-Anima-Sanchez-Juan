import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);
  const videogames = [
    {
      id: 1,
      name: "Minecraft",
      description: "Explora y sobrevive en un mundo de cubos",
      genre: "Sandbox",
      favorite: false,
    },
    {
      id: 2,
      name: "Terraria",
      description: "Explora y mata monstruos en un mundo 2D",
      genre: "Sandbox",
      favorite: true,
    },
    {
      id: 3,
      name: "Skyrim",
      description: "Explora y mata Dragones en un mundo nordico",
      genre: "Rpg",
      favorite: true,
    },
    {
      id: 4,
      name: "Portal",
      description: "Sobrevive a una IA loca disparando portales",
      genre: "Puzzles",
      favorite: true,
    },
    {
      id: 5,
      name: "E-Futbol 2026",
      description: "Lleva a tu equipo favorito a la victoria",
      genre: "Deportes",
      favorite: false,
    },
  ];

  return (
    <>
      <div className="container">
        <h1>Juegos más populares</h1>
        <ul className="containerList">
          {show &&
            videogames.map((videogame) => (
              <Card
                key={videogame.id}
                name={videogame.name}
                description={videogame.description}
                genre={videogame.genre}
                favorite={videogame.favorite}
              ></Card>
            ))}
        </ul>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Ocultar Lista" : "Mostrar Lista"}
        </button>
      </div>
    </>
  );
}

export default App;

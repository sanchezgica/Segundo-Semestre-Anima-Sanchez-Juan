function ListaSimple() {
  const listaJuegos = [
    "Terraria",
    "Minecraft",
    "Skyrim",
    "GTA",
    "Mundo Gaturro",
  ];

  return (
    <>
      <ul>
        {listaJuegos.map((juego, index) => (
          <li key={index}>{juego}</li>
        ))}
      </ul>
    </>
  );
}

export default ListaSimple;

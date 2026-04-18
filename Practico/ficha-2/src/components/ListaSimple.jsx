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
        {listaJuegos.map((juego) => (
          <li>{juego}</li>
        ))}
      </ul>
    </>
  );
}

export default ListaSimple;

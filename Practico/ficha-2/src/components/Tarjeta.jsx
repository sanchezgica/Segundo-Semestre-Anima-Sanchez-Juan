function Tarjeta() {
  const pokemones = [
    { id: 1, nombre: "Bulbasaur", tipo: "Planta" },
    { id: 2, nombre: "Charmander", tipo: "Fuego" },
    { id: 3, nombre: "Squirtle", tipo: "Agua" },
  ];
  return (
    <div>
      <ul>
        {pokemones.map((pokemon) => (
          <li key={pokemon.id}>
            <div>
              <p>{pokemon.nombre}</p>
              <p style={{ color: "#FF0000" }}>{pokemon.tipo}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tarjeta;

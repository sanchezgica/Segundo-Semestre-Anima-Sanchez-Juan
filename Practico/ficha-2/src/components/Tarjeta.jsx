function Tarjeta() {
  const pokemones = [
    { id: 1, nombre: "Bulbasaur", tipo: "Planta", color: "Green" },
    { id: 2, nombre: "Charmander", tipo: "Fuego", color: "Red" },
    { id: 3, nombre: "Squirtle", tipo: "Agua", color: "Blue" },
  ];
  return (
    <div style={{ border: "solid 2px black", margin: "8px 0px" }}>
      <ul>
        {pokemones.map((pokemon) => (
          <li key={pokemon.id}>
            <div>
              <b>{pokemon.nombre}</b>
              <p style={{ color: pokemon.color }}>{pokemon.tipo}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tarjeta;

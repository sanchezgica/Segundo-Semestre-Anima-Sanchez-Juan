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
          <li key={pokemon.id}>{pokemon.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tarjeta;

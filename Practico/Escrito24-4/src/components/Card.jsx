function Card(props) {
  return (
    <div key={props.id} className="card">
      <h2>{props.name}</h2>
      {props.favorite == true ? (
        <span className="favorite">Favorito</span>
      ) : (
        <span>No Favorito</span>
      )}
      <p>Descripción: {props.description}</p>
      <b>Genero: {props.genre}</b>
    </div>
  );
}

export default Card;

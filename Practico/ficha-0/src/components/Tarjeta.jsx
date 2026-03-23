function Tarjeta(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.descripcion}</p>
      <a href={props.link}>Link</a>
    </div>
  );
}

export default Tarjeta;

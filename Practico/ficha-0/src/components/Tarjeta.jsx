function Tarjeta(props) {
  return (
    <div
      style={{ padding: "8px", border: "solid black 2px", margin: "8px 0px" }}
    >
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.descripcion}</p>
      <a href={props.link}>Link</a>
    </div>
  );
}

export default Tarjeta;

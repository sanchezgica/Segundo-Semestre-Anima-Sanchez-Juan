function TarjetaLista(props) {
  return (
    <div
      key={props.id}
      style={{ border: "solid 4px blue", width: "120px", height: "120px" }}
    >
      <h2>{props.nombre}</h2>
      <p>{props.rol}</p>
    </div>
  );
}

export default TarjetaLista;

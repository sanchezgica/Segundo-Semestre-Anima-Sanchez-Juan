function Tarjeta(props) {
  const fechaHoy = new Date().toLocaleString("es-ES");
  return (
    <div className="card d-flex flex-column align-items-center pt-2">
      <img
        src={props.image}
        alt="Imagen de perfil"
        className="card-top img-fluid border border-dark rounded-circle object-fit-border"
        style={{ width: "150px", height: "150px" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <hr />
        <q className="card-text">{props.quote}</q>
        <br />
        <cite>{props.cite}</cite>
        <hr />
        <p>{fechaHoy}</p>
      </div>
    </div>
  );
}
export default Tarjeta;

function Sidebar(props) {
  const fechaHoy = new Date().toLocaleString("es-ES");
  return (
    <div className="col-2 px-3 py-3 d-flex flex-column align-items-center">
      <img
        src={props.image}
        alt="Imagen de perfil"
        className="img-fluid border border-dark rounded-circle object-fit-border"
        style={{ width: "150px", height: "150px" }}
      />
      <div className="text-center">
        <hr />
        <q>{props.quote}</q>
        <br />
        <cite>{props.cite}</cite>
        <hr />
        <p>{fechaHoy}</p>
      </div>
    </div>
  );
}

export default Sidebar;

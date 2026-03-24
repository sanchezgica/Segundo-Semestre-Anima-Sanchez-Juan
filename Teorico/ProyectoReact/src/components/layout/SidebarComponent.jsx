function Sidebar(props) {
  const fechaHoy = new Date().toLocaleString("es-ES");
  return (
    <div>
      <img src={props.image} alt="Imagen de perfil" />
      <q>{props.quote}</q>
      <p>{fechaHoy}</p>
    </div>
  );
}

export default Sidebar;

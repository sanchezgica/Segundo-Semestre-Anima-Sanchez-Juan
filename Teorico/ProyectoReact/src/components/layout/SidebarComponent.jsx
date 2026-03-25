import Tarjeta from "../molecules/TarjetaComponente";

function Sidebar(props) {
  return (
    <div
      className="col-2 px-3 py-3 d-flex flex-column align-items-center
     borde"
      style={{ height: "100vh" }}
    >
      <Tarjeta {...props}></Tarjeta>
    </div>
  );
}

export default Sidebar;

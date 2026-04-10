import MenuComponent from "../ui/MenuComponent";

function Navbar() {
  return (
    <nav className="col-12 bg-dark text-light py-2 navigation">
      <div className="d-flex justify-content-end align-items-baseline gap-3">
        <MenuComponent
          seccionActiva={seccionActiva}
          setSeccionActiva={setSeccionActiva}
        ></MenuComponent>
      </div>
    </nav>
  );
}

export default Navbar;

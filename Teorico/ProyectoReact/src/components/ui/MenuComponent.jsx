function MenuComponent({ seccionActiva, setSeccionActiva }) {
  const menuItems = [
    { id: "about", label: "Sobre Proyecto" },
    { id: "interest", label: "Intereses" },
    { id: "contact", label: "Contacto" },
    { id: "portfolio", label: "Materias" },
  ];

  return (
    <ul className="nav-menu">
      {menuItems.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => setSeccionActiva(item.id)}
            className={seccionActiva === item.id ? "active" : ""}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MenuComponent;

function MenuComponent({ seccionActiva, setSeccionActiva }) {
  const menuItems = [
    { id: "about", label: "Sobre Proyecto" },
    { id: "interest", label: "Intereses" },
    { id: "contact", label: "Contacto" },
    { id: "portfolio", label: "Materias" },
  ];

  return (
    <ul className="nav nav-tabs">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.id}>
          <a
            onClick={() => setSeccionActiva(item.id)}
            className={
              seccionActiva === item.id ? "nav-link active" : "nav-link"
            }
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MenuComponent;

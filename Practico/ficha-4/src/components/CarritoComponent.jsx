function CarritoComponent({ carrito }) {
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  return (
    <>
      <div className="carrito">
        <h2>Mi Carrito</h2>
        {carrito.length > 0 ? (
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                <span>
                  {item.nombre}
                  {item.precio}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          "Tu Carrito está vacío :("
        )}
        <p>Precio total: {total}</p>
      </div>
    </>
  );
}

export default CarritoComponent;

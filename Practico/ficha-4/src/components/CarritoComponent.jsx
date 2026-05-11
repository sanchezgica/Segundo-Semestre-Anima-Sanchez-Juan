function CarritoComponent({ carrito }) {
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  return (
    <>
      <div className="carrito">
        <h2>Mi Carrito</h2>
        {carrito.length > 0 ? (
          <ul className="lista-carrito">
            {carrito.map((item, index) => (
              <li key={index}>
                <div className="elemento-lista-carrito">
                  <span>{item.nombre}</span>
                  <span>${item.precio}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          "Tu Carrito está vacío :("
        )}
        <div className="precio-total">
          <b>Precio total: ${total}</b>
        </div>
      </div>
    </>
  );
}

export default CarritoComponent;

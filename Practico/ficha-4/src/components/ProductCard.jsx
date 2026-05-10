function ProductCard({ agregarAlCarrito, producto }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{producto.nombre}</h2>
        <p>${producto.precio}</p>
      </div>
      <button className="btn-card" onClick={() => agregarAlCarrito(producto)}>
        + Añadir a Mi Carrito
      </button>
    </div>
  );
}

export default ProductCard;

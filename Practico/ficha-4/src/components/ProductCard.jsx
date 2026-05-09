function ProductCard({ agregarAlCarrito, producto }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{producto.nombre}</h2>
        <p>{producto.precio}</p>
      </div>
      <button onClick={() => agregarAlCarrito(producto)}>
        + Agregar a Mi Carrito
      </button>
    </div>
  );
}

export default ProductCard;

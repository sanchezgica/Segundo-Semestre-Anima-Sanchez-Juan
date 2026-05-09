function ProductCard({ agregarAlCarrito, ...props }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{props.nombre}</h2>
        <p>{props.precio}</p>
      </div>
      <button onClick={agregarAlCarrito}>+ Agregar a Mi Carrito</button>
    </div>
  );
}

export default ProductCard;

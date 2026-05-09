import ProductCard from "./ProductCard";
function ProductList({ agregarAlCarrito, productos }) {
  return (
    <div className="contenedor-productos">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito}
        ></ProductCard>
      ))}
    </div>
  );
}

export default ProductList;

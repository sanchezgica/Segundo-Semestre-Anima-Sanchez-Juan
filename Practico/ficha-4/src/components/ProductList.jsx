import ProductCard from "./ProductCard";
function ProductList({ agregarAlCarrito, productos }) {
  return (
    <div className="container">
      {productos.map((producto) => (
        <ProductCard key={producto.id} {...producto}></ProductCard>
      ))}
      ;
    </div>
  );
}

export default ProductList;

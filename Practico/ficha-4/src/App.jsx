import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
function App() {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
  const productos = [
    { id: 1, nombre: "x1", precio: 1000 },
    { id: 2, nombre: "x2", precio: 1500 },
    { id: 3, nombre: "x4", precio: 2000 },
    { id: 4, nombre: "x4", precio: 1800 },
  ];

  return (
    <>
      <div>
        <ProductList
          productos={productos}
          agregarAlCarrito={agregarAlCarrito}
        ></ProductList>
      </div>
    </>
  );
}

export default App;

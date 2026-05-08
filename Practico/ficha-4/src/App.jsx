import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const productos = [{id:1, nombre="x1", precio=1000},{id:2, nombre="x2", precio=1500},{id:3, nombre="x4", precio=2000},{id:1, nombre="x4", precio=1800}];


  return (
    <>
      <div></div>
    </>
  );
};

export default App;

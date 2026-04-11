import { useState } from "react";
import "../src/assets/hidden.png";
import "../src/assets/eye.png";
import "./App.css";
import Counter from "./components/counterComponent";

function App() {
  return (
    <>
      <section id="center">
        <h1>Ficha 1 - Contador</h1>
        <Counter></Counter>
      </section>
    </>
  );
}

export default App;

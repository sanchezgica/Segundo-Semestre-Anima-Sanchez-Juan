import { useState } from "react";
import Input from "./assets/components/Input";
import FormSimple from "./assets/components/FormSimple";
import FormTarjeta from "./assets/components/FormTarjeta";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Input></Input>
      <FormSimple></FormSimple>
      <FormTarjeta></FormTarjeta>
    </>
  );
}

export default App;

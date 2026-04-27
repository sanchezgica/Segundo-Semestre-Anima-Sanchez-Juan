import { useState } from "react";
import Input from "./assets/components/Input";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Input></Input>
    </>
  );
}

export default App;

import { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  return (
    <div>
      <h2>"Hola, {name}"</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Input;

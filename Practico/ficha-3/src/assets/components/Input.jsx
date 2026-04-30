import { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  return (
    <div>
      {name !== "" ? <h2>"Hola, {name}"</h2> : <h2>"Hola"</h2>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Input;

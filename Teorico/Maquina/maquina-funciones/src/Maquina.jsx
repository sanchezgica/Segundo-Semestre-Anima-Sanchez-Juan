import React from "react";

function Maquina(props) {
  const x = props.value;
  const funcion = (x) => 2 * x + 3;
  return (
    <div>
      <p>
        f de {x} es {funcion(x)}
      </p>
    </div>
  );
}

export default Maquina;

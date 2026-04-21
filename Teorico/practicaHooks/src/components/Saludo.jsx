import { useState } from "react";

// ══════════════════════════════════════════════
// EJERCICIO 2 — useState con texto
// "El saludo personalizado"
//
// Misma idea, pero el estado guarda un texto (string).
// Cada vez que el usuario escribe, el estado se actualiza
// y el componente se redibuja mostrando el nuevo valor.
//
// Consigna:
// Completen el input para que el saludo cambie mientras escriben.
// ══════════════════════════════════════════════

function SaludoPersonalizado() {
  const [nombre, setNombre] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <input
        onChange={(e) => setNombre(e.target.value)}
        type="text"
        placeholder="Escribí tu nombre"
        value={nombre}
        // ✏️ Agreguen onChange para actualizar el estado
        // Pista: onChange={(e) => setNombre( ??? )}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p style={{ marginTop: "12px", fontSize: "18px" }}>
        {/* ✏️ Muestren el saludo solo si nombre no está vacío */}
        {/* Pista: nombre !== "" && <span>Hola, {nombre}!</span> */}
        {nombre !== "" && <span>Hola, {nombre}!</span>}
      </p>
    </div>
  );
}

export default SaludoPersonalizado;

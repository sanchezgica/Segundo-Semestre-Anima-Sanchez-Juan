import { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// CÓMO USAR ESTE ARCHIVO
// Trabajen de a dos
// Completen solo donde dice //
// No borren los comentarios, son parte del ejercicio.
// ─────────────────────────────────────────────

// ══════════════════════════════════════════════
// EJERCICIO 1 — useState
// "El semáforo"
//
// ¿Qué hace useState?
// Guarda un valor DENTRO del componente.
// Cuando ese valor cambia, React vuelve a dibujar el componente.
//
// Consigna:
// Completen el botón para que cambie el color.
// El semáforo tiene tres colores: "rojo" → "verde" → "amarillo" → "rojo"...
// ══════════════════════════════════════════════

function Semaforo() {
  const [color, setColor] = useState("rojo");

  const colores = {
    rojo: { fondo: "#e53e3e", siguiente: "verde" },
    verde: { fondo: "#38a169", siguiente: "amarillo" },
    amarillo: { fondo: "#d69e2e", siguiente: "rojo" },
  };

  const avanzar = () => {
    // ✏️ Usen setColor() para pasar al siguiente color
    // Pista: colores[color].siguiente tiene el próximo color
    setColor(colores[color].siguiente);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: colores[color].fondo,
          margin: "0 auto 16px",
        }}
      />
      <p>
        Color actual: <strong>{color}</strong>
      </p>
      {/* ✏️ Agreguen el onClick al botón */}
      <button onClick={avanzar}>Cambiar</button>
    </div>
  );
}

export default Semaforo;

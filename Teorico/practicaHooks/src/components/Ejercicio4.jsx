import { useState, useEffect } from "react";

// ══════════════════════════════════════════════
// EJERCICIO 4 — useEffect
// "El título que cambia"
//
// ¿Qué hace useEffect?
// Ejecuta código DESPUÉS de que React dibuja el componente.
// No es para mostrar cosas en pantalla — es para efectos externos:
// cambiar el título de la pestaña, pedir datos, iniciar un timer, etc.
//
// La diferencia clave con useState:
//   useState → "qué recordar"
//   useEffect → "qué hacer después de renderizar"
//
// Consigna:
// Completen el useEffect para que el título de la pestaña del navegador
// diga "Hola, [nombre]" mientras escriben.
// (Usen document.title para cambiarlo)
// ══════════════════════════════════════════════

function TituloVivo() {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    // ✏️ Cambien document.title según el nombre
    // Si nombre está vacío, que diga "Mi app"
    // Si tiene texto, que diga "Hola, " + nombre
    document.title = nombre !== "" ? "Hola, " + nombre : "Mi app";
  }, [nombre]);
  // ↑ El array [nombre] le dice a React:
  //   "Ejecutá este efecto cada vez que 'nombre' cambie"

  return (
    <div style={{ padding: "20px" }}>
      <p style={{ fontSize: "13px", color: "#888" }}>
        Escribí algo y mirá la pestaña del navegador ↑
      </p>
      <input
        type="text"
        placeholder="Titulo de Página"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
    </div>
  );
}

export default TituloVivo;

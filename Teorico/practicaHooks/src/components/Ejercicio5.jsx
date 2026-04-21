import { useState, useEffect } from "react";

// ══════════════════════════════════════════════
// EJERCICIO 5 — useEffect con [] vacío
// "El reloj que arranca solo"
//
// El array de dependencias controla CUÁNDO se ejecuta el efecto:
//   useEffect(() => { ... }, [nombre])  → cuando cambia 'nombre'
//   useEffect(() => { ... }, [])        → UNA SOLA VEZ al montar
//   useEffect(() => { ... })            → en cada render (casi nunca se usa)
//
// Consigna:
// Completen el useEffect para que el reloj arranque automáticamente
// cuando el componente aparece en pantalla.
// No hace falta ningún botón — solo que funcione solo.
// ══════════════════════════════════════════════

function RelojSimple() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // ✏️ Usen setInterval para actualizar 'hora' cada 1000ms
    // Pista: setInterval(() => { setHora(...) }, 1000)
    // Pista 2: new Date().toLocaleTimeString() devuelve la hora actual como texto
    const refrescarFecha = () => {
      setHora(new Date().toLocaleTimeString());
    };
    const intervalo = setInterval(refrescarFecha, 1000);

    return () => clearInterval(intervalo);
  }, []); // ← El [] vacío significa: "arrancá esto una sola vez"

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <p style={{ fontSize: "13px", color: "#888" }}>
        Este reloj arranca solo. No necesita botón.
      </p>
      <p
        style={{
          fontSize: "40px",
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        {hora}
      </p>
    </div>
  );
}

export default RelojSimple;

// ══════════════════════════════════════════════
// PREGUNTA FINAL DE DUPLA
//
// Miren los 4 ejercicios que hicieron y respondan:
//
// 1. ¿En cuál(es) ejercicios el componente se redibuja cuando el usuario hace algo?
// R: En los Ejercicios 1,2 y 4
// 2. ¿En cuál(es) el código se ejecuta automáticamente sin que el usuario haga nada?
// R: En el ejercicio 5
// 3. ¿Cuál es la diferencia entre useState y useEffect en una sola oración?
// R: La diferencia es que useState se usa para lo que se renderiza y useEffect para que pasa despues de renderiza.

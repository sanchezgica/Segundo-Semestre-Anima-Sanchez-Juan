import { useEffect, useState } from "react";

export function useFecha() {
  const [fecha, setFecha] = useState(new Date().toLocaleString("es-ES"));
  useEffect(() => {
    const refrescarFecha = () => {
      setFecha(new Date().toLocaleString("es-ES"));
    };
    const intervalo = setInterval(refrescarFecha, 1000);

    return () => clearInterval(intervalo);
  }, []);
  return fecha;
}

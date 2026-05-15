import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [seccionActiva, setSeccionActiva] = useState("about");

  const userData = {
    nombre: "Random",
    descripcion: "Aca va una Frase",
    foto: null,
  };
  return (
    <AppContext.Provider value={{ seccionActiva, setSeccionActiva, userData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}

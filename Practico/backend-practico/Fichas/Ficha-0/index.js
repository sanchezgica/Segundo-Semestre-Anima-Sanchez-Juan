const express = require("express");

const app = express();

const plantas = [
  { id: 1, nombre: "Lechuga" },
  { id: 2, nombre: "Albahaca" },
  { id: 3, nombre: "Espinaca" },
];

function listarPlantas() {
  console.log(plantas);
}

function agregarPlanta(nombre) {
  plantas.push({ id: plantas.length + 1, nombre: nombre });
}

agregarPlanta("Menta");
listarPlantas();

function buscarPlanta(id) {
  return plantas.find((planta) => planta.id === id);
  console.log(buscarPlanta);
}

console.log(buscarPlanta(2));

function modificarPlanta(id, nuevoNombre) {
  const planta = buscarPlanta(id);
  if (planta) {
    planta.nombre = nuevoNombre;
  }
}

app.get("/plantas", (req, res) => {
  res.json(plantas);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en localhost puerto:3000");
});

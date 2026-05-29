const express = require("express");

const app = express();

app.use(express.json());

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

app.get("/", (req, res) => {
  res.send("Bienvenido al backend de plantas");
});

app.get("/plantas/:id", (req, res) => {
  const id = Number(req.params.id);
  const planta = plantas.find((planta) => planta.id === id);
  console.log("planta buscada" + planta);
  if (planta) {
    res.json(planta);
  } else {
    res.json({ mensaje: "Planta no encontrada" });
  }
});

//<---- Empieza apartado Ficha 2 ---->
//Parte 1 POST
app.post("/plantas", (req, res) => {
  const nombre = req.body.nombre;
  agregarPlanta(nombre);
  if (!nombre) {
    return res.send("Falta el nombre de la planta");
  } else {
    res.status(200).json({ mensaje: "Planta agregada con exito" });
  }
});

// Parte 4 PUT
app.put("/plantas/:id", (req, res) => {
  const id = Number(req.params.id);
  const nuevoNombre = req.body.nombre;
  const planta = buscarPlanta(id);
  if (planta) {
    planta.nombre = nuevoNombre;
    res.status(200).json({ mensaje: "Planta Modificada", planta: planta });
  } else {
    res.status(404).json({ mensaje: "Planta no encontrada" });
  }
});

// Parte 5 DELETE

app.delete("/plantas/:id", (req, res) => {
  res.status(200).json({ mensaje: "Planta Eliminada" });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en localhost puerto:3000");
});

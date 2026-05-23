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

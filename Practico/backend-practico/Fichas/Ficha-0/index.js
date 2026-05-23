const plantas = [
  { id: 1, tipo: "Lechuga" },
  { id: 2, tipo: "Albahaca" },
  { id: 3, tipo: "Espinaca" },
];

function listarPlantas() {
  console.log(plantas);
}

function agregarPlanta(tipo) {
  plantas.push({ id: plantas.length + 1, tipo: tipo });
}

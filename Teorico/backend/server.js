import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // permite que React le hable desde otro puerto
app.use(express.json()); // entiende JSON en los pedidos
// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ mensaje: "Hola el servidor esta funcionando" });
});
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

const express = require("express");
const app = express();
const port = 4000;
//Vamos a hacer algunas importaciones
const cors = require("cors");
//Vamos a importar dotenv
require("dotenv").config();
const { dbConnection } = require("./src/database/config");

//Vamos a invocar la función de conexion
dbConnection();

//Middlewers
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "Bienvenido a la API",
    autor: "Kevin Luciano",
    version: "1.0.0",
  });
});

//Rutas de la API
app.use("/api/jugadores", require("./src/routes/jugadores.routes"));
app.use("/api/jugadores", require("./src/routes/jugadores.routes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

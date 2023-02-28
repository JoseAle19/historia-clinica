const express = require("express");
const { dbConnection } = require("./config/database");
const index = require("./index");
const app = express();
const port = 3000;
// Iniciar conección a la base de datos
dbConnection();

// middlewares
app.use(express.json());
// Rutas
app.use(index);

app.listen(port, () => {
  console.log(
    `Servidor escuchando en el puerto ${port}\nhttp://localhost:${port}`
  );
});

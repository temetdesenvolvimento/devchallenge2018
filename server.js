// Importando os pacotes
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Importando a rota da api
const warriors = require("./routes/api/warriors");

// Instanciando o express
const app = express();

// Aplicando o Body Parser Middleware
app.use(bodyParser.json());

// Pegando a URI do mongo do arquivo abaixo
const db = require("./config/keys").mongoURI;

// Conectando com o banco de dados
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  // Se tudo ocorrer como esperado, essa mensagem será mostrada no terminal
  .then(() => console.log("MongoDB conectado :) "))
  // Caso venha ocorrer algum erro, o mesmo vai ser mostrado no console.
  .catch(err => console.log(err));

app.use("/", warriors);

// Declaração da porta
const port = 5000;
// Iniciando o servidor express
app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));

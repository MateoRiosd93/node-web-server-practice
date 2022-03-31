const express = require("express");
const cors = require("cors");
const USERS_PATH = "/api/usuarios";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = USERS_PATH;

    //Middleware
    this.middlewares();

    //Services
    this.routes();
  }

  middlewares() {
    //middleware para el CORS
    this.app.use(cors());

    //middleware para que todo la data este en formato JSON
    //data = todo lo que se le envia al servidor (request)
    this.app.use(express.json());

    //middelware directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El servidor esta corriend por el port ${this.port}`);
    });
  }
}

module.exports = Server;

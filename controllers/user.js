const { response } = require("express");

const usuarioGet = (request, response = response) => {
  const { id, name, age } = request.query;
  response.send({
    message: "GET API - Desde el controller",
    id,
    name,
    age,
  });
};

const usuariosPut = (request, response = response) => {
  const { id } = request.params;
  response.send({
    message: "PUT API - Desde el controller",
    id,
  });
};

const usuariosPost = (request, response = response) => {
  const { name, lastName, age, id } = request.body;
  response.send({
    message: "POST API -  Desde el controller",
    name,
    lastName,
    age,
    id,
  });
};

const usuariosDelete = (request, response = response) => {
  response.send({
    message: "DELET API - Desde el controller",
  });
};

module.exports = {
  usuarioGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};

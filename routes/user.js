const { Router } = require("express");
const {
  usuarioGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
} = require("../controllers/user");

const router = Router();

router.get("/", usuarioGet);

router.put("/:id", usuariosPut);

router.post("/", usuariosPost);

router.delete("/", usuariosDelete);

module.exports = router;

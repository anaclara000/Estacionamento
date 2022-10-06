const Express = require('express');

const router = Express.Router();

const ClientesController = require("../controllers/ClientesController");
const TelefonesController = require("../controllers/TelefonesController");
const CarrosController = require("../controllers/CarrosController");

router.get("/clientes", ClientesController.listarClientes);
router.post("/clientes", ClientesController.cadastrarCliente);
router.delete("/clientes", ClientesController.excluirCliente);
router.put("/clientes", ClientesController.editarCliente);

router.get("/telefones", TelefonesController.listarTelefones);
router.delete("/telefones", TelefonesController.excluirTelefones);
router.put("/telefones", TelefonesController.editarTelefones);
router.post("/telefones", TelefonesController.cadastrarTelefones);

router.get("/carros", CarrosController.listarCarros);
router.delete("/carros", CarrosController.excluirCarros);
router.post("/carros", CarrosController.cadastrarCarros);
router.put("/carros", CarrosController.editarCarros);

module.exports = router;
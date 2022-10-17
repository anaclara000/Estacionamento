const Express = require('express');

const router = Express.Router();

const ProdutosController = require("../controllers/ProdutosController");
router.get("/produtos", ProdutosController.listarProdutos);
router.get("/produtos/:Nome_Produto", ProdutosController.listarUmProduto);
router.get("/produtos/vw_solicitacoes/:Data_sol", ProdutosController.buscarProdMes);
router.post("/produtos", ProdutosController.cadastrarProduto);


const DepartamentosController = require("../controllers/DepartamentosController");
router.get("/departamentos", DepartamentosController.listarDepartamentos);
router.post("/departamentos", DepartamentosController.cadastrarDepartamento)
router.delete("/departamentos", DepartamentosController.excluirDepartamento);


const SolicitacoesController = require("../controllers/SolicitacoesController");
router.get("/solicitacoes", SolicitacoesController.listarSolicitacoes);
router.post("/solicitacoes", SolicitacoesController.cadastrarSolicitacoes);
router.get("/solicitacoes/:Nome_Func", SolicitacoesController.listarFuncSol);
module.exports = router;
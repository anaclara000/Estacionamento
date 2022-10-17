const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "solicitacoes"
});

function listarProdutos(req, res) {
    let query = "SELECT * FROM Produtos";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listarUmProduto(req, res) {
    let query = `SELECT * FROM vw_pesquisaProd WHERE Nome_Produto = '${req.params.Nome_Produto}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};
function buscarProdMes(req, res) {
    let query = `SELECT * FROM vw_solicitacoes WHERE Data_sol like '%${req.params.Data_sol}%'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarProduto(req, res) {
    let query = `INSERT INTO Produtos VALUES ('${req.body.Cod_Produto}', '${req.body.Nome_Produto}')`;

    conDB.query(query, (err, result) => {
        if(err == null) 
            res.status(201).json(result).end();
            else
                if (err.sqlState == 23000)//Se a n_sol já está cadastrada
                    res.status(406).json(err).end();
                else
                    res.status(500).json(err).end();
        });
};

module.exports = {
    listarProdutos,
    cadastrarProduto,
    listarUmProduto,
    buscarProdMes
}

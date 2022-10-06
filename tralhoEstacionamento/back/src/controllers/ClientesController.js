const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
});

function listarClientes(req, res) {
    let query = "SELECT * FROM clientes";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarCliente(req, res) {
    let query = `INSERT INTO clientes VALUES (DEFAULT, '${req.body.nome_cli}','${req.body.cpf}','${req.body.rua}','${req.body.bairro}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};


function excluirCliente(req, res) {
    let query = `DELETE FROM clientes WHERE id_cliente = ${req.body.id_cliente}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

//não funcional
function editarCliente(req, res){
    let query = `UPDATE clientes SET id_cliente = ${req.body}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};


module.exports = {
    listarClientes,
    cadastrarCliente,
    editarCliente,
    excluirCliente
}
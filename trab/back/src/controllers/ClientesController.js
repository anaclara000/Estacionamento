const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
});

function listarClientes(req, res) {
    let query = "SELECT * FROM clientes ORDER BY id_cliente asc";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarCliente(req, res) {
    let query = `INSERT INTO clientes VALUES (DEFAULT, '${req.body.nome_cli}','${req.body.email}','${req.body.data_nasc}','${req.body.cpf}','${req.body.bairro}','${req.body.rua}','${req.body.cep}','${req.body.complemento}','${req.body.municipio}')`;

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

function editarCliente(req, res){
    let query = `UPDATE clientes SET id_cliente = ${req.body.id_cliente}, id_cliente = ${req.body.id_cliente}, nome_cli = '${req.body.nome_cli}', email = '${req.body.email}', data_nasc ='${req.body.data_nasc}', cpf = '${req.body.cpf}',  bairro = '${req.body.bairro}', rua = '${req.body.rua}', cep = '${req.body.cep}', complemento = '${req.body.complemento}', municipio = '${req.body.municipio}' where id_cliente = '${req.body.id_cliente}'`;

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
const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
});

function listarTelefones(req, res) {
    let query = "SELECT * FROM telefones";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarTelefones(req, res) {
    let query = `INSERT INTO telefones VALUES (${req.body.id_cliente}, ${req.body.telefone})`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarTelefones(req, res){
    let query = `UPDATE telefones SET telefone = ${req.body.telefone}, telefone = ${req.body.telefone} where id_cliente = ${req.body.id_cliente}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirTelefones(req, res) {
    let query = `DELETE FROM telefones WHERE telefone = ${req.body.telefone}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarTelefones,
    excluirTelefones,
    editarTelefones,
    cadastrarTelefones
}
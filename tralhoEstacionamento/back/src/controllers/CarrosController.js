const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
});

function listarCarros(req, res) {
    let query = "SELECT * FROM carros";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarCarros(req, res) {
    let query = `INSERT INTO carros VALUES (${req.body.id_cliente}, '${req.body.placa}', '${req.body.tipo}', '${req.body.marca}', '${req.body.modelo}', '${req.body.cor}', '${req.body.descricao}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirCarros(req, res) {
    let query = `DELETE FROM carros WHERE placa = '${req.body.placa}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarCarros(req, res){
    let query = `UPDATE carros SET placa = '${req.body.placa}', id_cliente = ${req.body.id_cliente}, placa = '${req.body.placa}', tipo = '${req.body.tipo}', marca = '${req.body.marca}',  modelo = '${req.body.modelo}', cor = '${req.body.cor}', descricao = '${req.body.descricao}' where placa = '${req.body.placa}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarCarros,
    excluirCarros,
    cadastrarCarros,
    editarCarros
}
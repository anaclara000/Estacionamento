const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
});

function listarFuncionarios(req, res) {
    let query = "SELECT * FROM funcionarios ORDER BY id_func asc";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarFuncionarios(req, res) {
    let query = `INSERT INTO funcionarios VALUES (DEFAULT, '${req.body.nome_func}','${req.body.email}','${req.body.data_nasc}','${req.body.cpf}', '${req.body.cargo}' , '${req.body.bairro}','${req.body.rua}','${req.body.cep}','${req.body.complemento}','${req.body.municipio}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirFuncionarios(req, res) {
    let query = `DELETE FROM funcionarios WHERE id_func = ${req.body.id_func}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarFuncionarios(req, res){
    let query = `UPDATE funcionarios SET id_func = ${req.body.id_func}, id_func = ${req.body.id_func}, nome_func = '${req.body.nome_func}', email = '${req.body.email}', data_nasc ='${req.body.data_nasc}', cpf = '${req.body.cpf}', cargo = '${req.body.cargo}' ,bairro = '${req.body.bairro}', rua = '${req.body.rua}', cep = '${req.body.cep}', complemento = '${req.body.complemento}', municipio = '${req.body.municipio}' where id_func = ${req.body.id_func}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};


module.exports = {
    listarFuncionarios,
    cadastrarFuncionarios,
    editarFuncionarios,
    excluirFuncionarios
}
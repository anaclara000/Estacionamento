const conDB = require('../dao/dbEstacionamento');
const Funcionarios = require('../models/funcionarios')

function listarFuncionarios(req, res) {
    conDB.query(Funcionarios.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarFuncionarios(req, res) {
    conDB.query(Funcionarios.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

function excluirFuncionarios(req, res) {
    conDB.query(Funcionarios.toDel(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

function editarFuncionarios(req, res) {
    conDB.query(Funcionarios.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
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
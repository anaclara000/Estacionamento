const conDB = require('../dao/dbEstacionamento.js');
const Carros = require('../models/carros')

const listarCarros = (req, res) => {
    conDB.query(Carros.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

const cadastrarCarros = (req, res) => {
    conDB.query(Carros.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

const excluirCarros = (req, res) => {
    conDB.query(Carros.toDel(req.body), (err, result) => {
        if(err == null) {
            res.status(204).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

const editarCarros = (req, res) => {
    conDB.query(Carros.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

module.exports = {
    listarCarros,
    excluirCarros,
    cadastrarCarros,
    editarCarros
}
const conDB = require('../dao/dbEstacionamento');
const Telefones = require('../models/telefonesFunc')

function listarTelefones(req, res) {
    conDB.query(Telefones.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarTelefones(req, res) {
    conDB.query(Telefones.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarTelefones(req, res){
    conDB.query(Telefones.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirTelefones(req, res) {
    conDB.query(Telefones.toDel(req.body), (err, result) => {
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
const Solicitacoes = require('../models/solicitacao');
const con = require('../models/DAO');

const listarSolicitacoes = (req, res) => {
    con.query(Solicitacoes.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const cadastrarSolicitacoes = (req, res) => {
    con.query(Solicitacoes.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            if (err.sqlState == 23000)//Se a n_sol já está cadastrada
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

function listarFuncSol(req, res) {
    let query = `SELECT * FROM vw_total WHERE Nome_Func = '${req.params.Nome_Func}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};


module.exports = {
    listarSolicitacoes,
    cadastrarSolicitacoes,
    listarFuncSol
}
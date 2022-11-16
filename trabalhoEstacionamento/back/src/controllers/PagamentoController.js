const conDB = require('../dao/dbEstacionamento');
const Pagamentos = require('../models/pagamento')

function listarPagamento(req, res) {
    conDB.query(Pagamentos.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarPagamento
}
const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "solicitacoes"
});

function listarDepartamentos(req, res) {
    let query = "SELECT * FROM Departamentos";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};
function cadastrarDepartamento(req, res) {
    let query = `INSERT INTO Departamentos VALUES ('${req.body.Cod_Depto}', '${req.body.Nome_Depto}')`;

    conDB.query(query, (err, result) => {
        if(err == null) 
            res.status(201).json("Departamento cadastrado com sucesso").end();
            else
                if (err.sqlState == 23000)
                    res.status(406).json(err).end();
                else
                    res.status(500).json(err).end();
        });
};

function excluirDepartamento(req, res) {
    let query = `DELETE FROM Departamentos WHERE Cod_Depto = '${req.body.Cod_Depto}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json("Departamento excluido com sucesso!").end();
        }else {
            res.status(400).json(err).end();
        }
    });
};


module.exports = {
    listarDepartamentos,
    cadastrarDepartamento,
    excluirDepartamento
}
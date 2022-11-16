const toCreate  = (model) =>{
    return `INSERT INTO telefonesFunc VALUES (${model.id_func}, ${model.telefone})`;
}

const toReadAll = () => {
    let query = "SELECT * FROM telefonesFunc ORDER BY id_func asc";
}

const toDel = (model)=>{
return `DELETE FROM telefonesCli WHERE telefone = ${model.telefone}`;
}

const toUpdate = (model) => {
return `UPDATE telefonesFunc SET telefone = ${model.telefone}, telefone = ${model.telefone} where id_func = ${model.id_func}`;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate
}
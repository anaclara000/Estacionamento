const toCreate  = (model) =>{
    return `INSERT INTO telefonesCli VALUES (${model.id_cliente}, ${model.telefone})`;
}

const toReadAll = () => {
return "SELECT * FROM telefonesCli ORDER BY id_cliente asc"
}

const toDel = (model)=>{
return `DELETE FROM telefonesCli WHERE telefone = ${model.telefone}`;
}

const toUpdate = (model) => {
return `UPDATE telefonesCli SET telefone = ${model.telefone}, telefone = ${model.telefone} where id_cliente = ${model.id_cliente}`;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate
}
const toCreate  = (model) =>{
    return `INSERT INTO clientes VALUES (DEFAULT, '${model.nome_cli}','${model.email}','${model.data_nasc}','${model.cpf}','${model.bairro}','${model.rua}','${model.cep}','${model.complemento}','${model.municipio}')`;
}

const toReadAll = () => {
return "SELECT * FROM clientes ORDER BY id_cliente asc";
}

const toDel = (model)=>{
return `DELETE FROM clientes WHERE id_cliente = ${model.id_cliente}`;
}

const toUpdate = (model)=>{
return `UPDATE clientes SET id_cliente = ${model.id_cliente}, id_cliente = ${model.id_cliente}, nome_cli = '${model.nome_cli}', email = '${model.email}', data_nasc ='${model.data_nasc}', cpf = '${model.cpf}',  bairro = '${model.bairro}', rua = '${model.rua}', cep = '${model.cep}', complemento = '${model.complemento}', municipio = '${model.municipio}' where id_cliente = '${model.id_cliente}'`;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate
}
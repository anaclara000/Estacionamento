const toCreate  = (model) =>{
    return `INSERT INTO funcionarios VALUES (DEFAULT, '${model.nome_func}','${model.email}','${model.data_nasc}','${model.cpf}', '${model.cargo}' , '${model.bairro}','${model.rua}','${model.cep}','${model.complemento}','${model.municipio}')`;
}

const toReadAll = () => {
return "SELECT * FROM funcionarios ORDER BY id_func asc";
}

const toDel = (model)=>{
return `DELETE FROM funcionarios WHERE id_func = ${model.id_func}`;
}

const toUpdate = (model) => {
return `UPDATE funcionarios SET id_func = ${model.id_func}, id_func = ${model.id_func}, nome_func = '${model.nome_func}', email = '${model.email}', data_nasc ='${model.data_nasc}', cpf = '${model.cpf}', cargo = '${model.cargo}' ,bairro = '${model.bairro}', rua = '${model.rua}', cep = '${model.cep}', complemento = '${model.complemento}', municipio = '${model.municipio}' where id_func = ${model.id_func}`;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate
}
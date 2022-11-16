const toCreate  = (model) =>{
        return `INSERT INTO carros VALUES (${model.id_cliente}, DEFAULT, '${model.placa}', '${model.tipo}', '${model.marca}', '${model.modelo}', '${model.cor}', '${model.descricao}')`;
}

const toReadAll = () => {
    return "SELECT * FROM carros ORDER BY id_cliente asc";
}

const toDel = (model)=>{
    return `DELETE FROM carros WHERE id_carro = '${model.id_carro}'`;
}

const toUpdate = (model)=>{
    return `UPDATE carros SET placa = '${model.placa}', id_cliente = ${model.id_cliente}, placa = '${model.placa}', tipo = '${model.tipo}', marca = '${model.marca}',  modelo = '${model.modelo}', cor = '${model.cor}', descricao = '${model.descricao}' where placa = '${model.placa}'`;
}

module.exports = {
    toReadAll,
    toCreate,
    toDel,
    toUpdate
}
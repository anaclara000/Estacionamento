const toCreate = (model) => {
    return `Call solicita_um_item (${model.n_sol},${model.depto},${model.func},${model.prod},${model.qtd},${model.total})`;
}

const toReadAll = () => {
    return "SELECT * FROM vw_solicitacoes";
}

module.exports = {
    toCreate,
    toReadAll
}
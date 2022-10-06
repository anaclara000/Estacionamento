const lancamentos = document.querySelector(".lista-clientes");
const lancamento = document.querySelector(".linhamodelo");

var estacionamento = [];
fetch("http://localhost:3000/clientes")
.then(resp => {return resp.json()})
.then(lancamento => {
        estacionamento = lancamento;
        listaDeClientes();
    });

function listaDeClientes() {
    estacionamento.forEach(info => {
        var lista = lancamento.cloneNode(true);
        lista.classList.remove("model")
        lista.querySelector("#idCli").innerHTML = info.id_cliente;
        lista.querySelector("#nomeCli").innerHTML = info.nome_cli;
        lista.querySelector("#CPFCli").innerHTML = info.cpf;
        lista.querySelector("#ruaCli").innerHTML = info.rua;
        lista.querySelector("#bairroCli").innerHTML = info.bairro;
        
        lancamentos.appendChild(lista);
    })
}

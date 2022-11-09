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
        lista.querySelector("#emailCli").innerHTML = info.email;
        lista.querySelector("#dataCli").innerHTML = info.data_nasc.slice(0, 10);
        lista.querySelector("#CPFCli").innerHTML = info.cpf;
        lista.querySelector("#bairroCli").innerHTML = info.bairro;
        lista.querySelector("#ruaCli").innerHTML = info.rua;
        lista.querySelector("#cepCli").innerHTML = info.cep;
        lista.querySelector("#compleCli").innerHTML = info.complemento;
        lista.querySelector("#muniCli").innerHTML = info.municipio;
        lancamentos.appendChild(lista);
    })
}
var modal = document.querySelector(".modal");

function abrirModal (){
      modal.classList.toggle("model");
}


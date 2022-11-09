const lancamentos = document.querySelector(".lista-func");
const lancamento = document.querySelector(".linhamodelo");

var estacionamento = [];
fetch("http://localhost:3000/funcionarios")
.then(resp => {return resp.json()})
.then(lancamento => {
        estacionamento = lancamento;
        listaDeFuncionarios();
    });

function listaDeFuncionarios() {
    estacionamento.forEach(info => {
        var lista = lancamento.cloneNode(true);
        lista.classList.remove("model")
        lista.querySelector("#idfunc").innerHTML = info.id_func;
        lista.querySelector("#nomefunc").innerHTML = info.nome_func;
        lista.querySelector("#emailfunc").innerHTML = info.email;
        lista.querySelector("#datafunc").innerHTML = info.data_nasc.slice(0, 10);
        lista.querySelector("#CPFfunc").innerHTML = info.cpf;
        lista.querySelector("#bairrofunc").innerHTML = info.bairro;
        lista.querySelector("#ruafunc").innerHTML = info.rua;
        lista.querySelector("#cepfunc").innerHTML = info.cep;
        lista.querySelector("#complefunc").innerHTML = info.complemento;
        lista.querySelector("#munifunc").innerHTML = info.municipio;
        lancamentos.appendChild(lista);
    })
}

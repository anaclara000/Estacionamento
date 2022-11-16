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

        var date = new Date(info.data_nasc); 
        let dataFromatada = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        var lista = lancamento.cloneNode(true);
        lista.classList.remove("model")
        lista.querySelector("#idfunc").innerHTML = info.id_func;
        lista.querySelector("#nomefunc").innerHTML = info.nome_func;
        lista.querySelector("#emailfunc").innerHTML = info.email;
        lista.querySelector("#datafunc").innerHTML = dataFromatada;
        lista.querySelector("#CPFfunc").innerHTML = info.cpf;
        lista.querySelector("#bairrofunc").innerHTML = info.bairro;
        lista.querySelector("#ruafunc").innerHTML = info.rua;
        lista.querySelector("#cepfunc").innerHTML = info.cep;
        lista.querySelector("#complefunc").innerHTML = info.complemento;
        lista.querySelector("#munifunc").innerHTML = info.municipio;
        lancamentos.appendChild(lista);
    })
}

var modal = document.querySelector(".modal");

function abrirModal (){
      modal.classList.toggle("model");
}

function cadastrar(){
    let nome = document.querySelector(".nome").value;
    let email = document.querySelector(".email").value;
    let data = document.querySelector(".data").value;
    let cpf = document.querySelector(".CPF").value;
    let cargo = document.querySelector(".cargo").value;
    let bairro = document.querySelector(".bairro").value;
    let rua = document.querySelector(".rua").value;
    let cep = document.querySelector(".CEP").value;
    let complemento = document.querySelector(".com").value;
    let municipio = document.querySelector(".muni").value;

    let options = JSON.stringify({
        "nome_func": nome,
		"email": email,
		"data_nasci": data,
		"cpf": cpf,
        "cargo": cargo,
		"bairro": bairro,
        "rua": rua,
		"cep": cep,
		"complemento": complemento,
		"municipio": municipio
    });

    fetch("http://localhost:3000/funcionarios", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
    .then(resp=> {return resp})
    .then(resp => { 
            alert("Funcionario cadastrado com sucesso!");
            window.location.reload();
            abrirModal();
    })
}
const listas = document.querySelector(".listas"); 
const lista = document.querySelector(".lista"); 
const modal = document.querySelector(".modal");

var solicitacoes = [];
fetch("http://localhost:3000/solicitacoes ")
.then(resp => {return resp.json()})
.then(data => {
        solicitacoes = data;
        listarsolicitacoes();
});

function listarsolicitacoes() {
    solicitacoes.forEach(info =>{
        var listagem = lista.cloneNode(true);
        listagem.classList.remove("model");
        listagem.querySelector("#id").innerHTML = info.Num_Sol;
        listagem.querySelector("#data").innerHTML = info.Data_sol.slice(0,10);
        listagem.querySelector("#codDepto").innerHTML = info.Cod_Depto;
        listagem.querySelector("#nomeDepto").innerHTML = info.Nome_Depto;
        listagem.querySelector("#codFunc").innerHTML = info.Cod_Func;
        listagem.querySelector("#nomeFunc").innerHTML = info.Nome_Func;
        listagem.querySelector("#codProd").innerHTML = info.Cod_Produto;
        listagem.querySelector("#nomeProd").innerHTML = info.Nome_produto;
        listagem.querySelector("#qtd").innerHTML = info.Qtde;
        listagem.querySelector("#valor").innerHTML = info.valor;
        listas.appendChild(listagem);
    })
}

function showModal() {
    modal.classList.toggle("model");
}

function cadastrar(){
    let numSol = document.querySelector(".id").value;
    let numDepto = document.querySelector(".depto").value;
    let numFunc = document.querySelector(".func").value;
    let numProd = document.querySelector(".prod").value;
    let numQtd = document.querySelector(".qtd").value;
    let vTotal = document.querySelector(".total").value;

    let data = JSON.stringify({
        "n_sol":numSol,
        "depto":numDepto,
        "func":numFunc,
        "prod":numProd,
        "qtd":numQtd,
        "total":vTotal
    });

    fetch("http://localhost:3000/solicitacoes", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })
    .then(resp=> {return resp.json()})
    .then(resp => { 
            alert("Solicitação cadastrada com sucesso");
            window.location.reload();
            showModal();
    })

}


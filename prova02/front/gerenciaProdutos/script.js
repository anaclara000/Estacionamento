const listas = document.querySelector(".listas"); 
const lista = document.querySelector(".lista"); 
const modal = document.querySelector(".modal");

var produtos = [];
fetch("http://localhost:3000/produtos")
.then(resp => {return resp.json()})
.then(data => {
        produtos = data;
        listarprodutos();
});

function listarprodutos() {
    produtos.forEach(info =>{
        var listagem = lista.cloneNode(true);
        listagem.classList.remove("model");
        listagem.querySelector("#cod").innerHTML = info.Cod_Produto;
        listagem.querySelector("#nomeProduto").innerHTML = info.Nome_produto;
        listas.appendChild(listagem);
    })
}

function showModal() {
    modal.classList.toggle("model");
}

function cadastrar(){
    let codProd = document.querySelector(".codProd").value;
    let nomeProd = document.querySelector(".nomeProd").value;
 

    let data = JSON.stringify({
        "Cod_Produto": codProd,
	    "Nome_Produto":nomeProd
    });

    fetch("http://localhost:3000/produtos", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })
    .then(resp=> {return resp.json()})
    .then(resp => { 
            alert("Produto cadastrado com sucesso");
            window.location.reload();
            showModal();
    })

}



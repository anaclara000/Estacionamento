// var minutoHora = 60;
// var valorMinuto = 0.4;

// fetch("http://localhost:3000/pagamentos")
//     .then(resp => { return resp.json() })
//     .then(lancamento => {
//         pagamento = lancamento;
//         listaPagamentos();
//     });

// function listaPagamentos() {
//     pagamento.forEach(info => {
//         valorHora = parseInt(info.hora[1] * minutoHora)
//         v = parseInt(info.hora[3])
//         x = parseInt(info.hora[4])
//         precoTotal = (valorHora + v + x) * valorMinuto
//         console.log(precoTotal)
//     })
// }

// const val = document.querySelect(".lista")


for( let i = 0; i < 101; i++){
   if(i > 0 && i < 10){
    th.innerHTML =  "0" + i
   }

    // var lista = val.cloneNode(true);
    console.log(i)
    var th = document.createElement('th');

    th.innerHTML = i
    
    document.querySelector('.titulo').appendChild(th)
}



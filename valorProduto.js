const precoProduto = 100;
let formaPagamento = 4;

function aplicarDesconto(valor, desconto) {
   return valor - (valor * (desconto / 100));
}
function aplicarJuros(valor, juros) {
   return valor + (valor * (juros / 100));
}

if (formaPagamento === 1) {
   console.log(aplicarDesconto(precoProduto, 10));
} else if (formaPagamento === 2) {
   console.log(aplicarDesconto(precoProduto, 15));
} else if (formaPagamento === 3) {
   console.log(precoProduto / 2);
} else if (formaPagamento === 4) {
   console.log(aplicarJuros(precoProduto, 10));
}

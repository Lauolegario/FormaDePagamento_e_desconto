const precoProduto = 92;
let formaPagamento = 4;


if (formaPagamento === 1){
   console.log(precoProduto - ( precoProduto* 0.10));
}else if (formaPagamento === 2){
   console.log(precoProduto -( precoProduto * 0.15));
}else if (formaPagamento === 3){
   console.log( precoProduto /2)
}else if (formaPagamento === 4){
   console.log(precoProduto + (precoProduto * 0.1))
}
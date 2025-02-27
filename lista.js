function valorTotCompra(prod1, prod2, prod3){
    var soma = prod1 + prod2 + prod3;
    return soma;
}
console.log("1)A soma dos produtos é:",valorTotCompra(2, 5, 5));


function calculaTroco(valorPago, valorCompra){
    var troco = valorPago - valorCompra;
    return troco;
}
console.log("2)O troco a se entregar é de:",calculaTroco(20,18));


function distanciaPerc(nome, dist, tempo){
    var velocidadeM = dist/tempo;
    return velocidadeM;
}
console.log("3)A velocidade media é de:",distanciaPerc('jeff', 30, 5), "km/h");


function verificarEstoque(estoque, pedido){
    var restante = estoque - pedido;
    return restante;
}
console.log("4)O estoque restante após o pedido é de:", verificarEstoque(50, 20));


function custoCombustivel(distancia, consumo){
    let preco = 5.50;
    var litrosGastos = distancia / consumo;
    var custoTot = litrosGastos * preco;
    return custoTot;
}
console.log("5)O custo total do combustível é de:", custoCombustivel(23,8));

function calculaIdade(anoNascimento){
    let ano = 2025;
    var idade = ano - anoNascimento;
    return idade;
}
console.log("6)A idade é de:", calculaIdade(1976))

function custoCartao(possui, preco){
    var quantidade = possui / preco;
    return quantidade;
}
console.log("7)Da pra comprar:", custoCartao(50,4), "cartões");

function dividirPremio(valor, quantidadeP){
    var valorDividido = valor / quantidadeP;
    return valorDividido.toFixed(2);
}
console.log("8)Cada um receberia:", dividirPremio(1000, 5)+ "R$");

function precoFinal(precoProduto, desconto){
    var valorDesconto = precoProduto * (desconto / 100);
    var total = precoProduto - valorDesconto;
    return total; 
}
console.log("9)O valor após o desconto é de:", precoFinal(10, 20));

function contaRestaurante(prato1, prato2, prato3, prato4, prato5){
    var valorTot = (prato1+ prato2+ prato3+ prato4+ prato5) * 1.1;
    return  valorTot.toFixed(2);
}
console.log("10)O valor após a gorjeta é de:", contaRestaurante(5,5,5,5,5))

function quantasRef(kilos){
    var quantas = kilos / 0.25;
    return quantas;
}
console.log("11)A quantidade de refeições é de:", quantasRef(2))

function impostoProduto(valorProd){
    var valorFinal = valorProd * 1.18;
    return valorFinal;
}
console.log("12)O valor após o imposto é de:", impostoProduto(10))
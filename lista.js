function valorTotCompra(prod1, prod2, prod3){
    var soma = prod1 + prod2 + prod3;
    return soma;
}
console.log("01)A soma dos produtos é:",valorTotCompra(2, 5, 5));


function calculaTroco(valorPago, valorCompra){
    var troco = valorPago - valorCompra;
    return troco;
}
console.log("02)O troco a se entregar é de:",calculaTroco(20,18));


function distanciaPerc(nome, dist, tempo){
    var velocidadeM = dist/tempo;
    return velocidadeM;
}
console.log("03)A velocidade media é de:",distanciaPerc('jeff', 30, 5), "km/h");


function verificarEstoque(estoque, pedido){
    var restante = estoque - pedido;
    return restante;
}
console.log("04)O estoque restante após o pedido é de:", verificarEstoque(50, 20));


function custoCombustivel(distancia, consumo){
    let preco = 5.50;
    var litrosGastos = distancia / consumo;
    var custoTot = litrosGastos * preco;
    return custoTot;
}
console.log("05)O custo total do combustível é de:", custoCombustivel(23,8));

function calculaIdade(anoNascimento){
    let ano = 2025;
    var idade = ano - anoNascimento;
    return idade;
}
console.log("06)A idade é de:", calculaIdade(1976))

function custoCartao(possui, preco){
    var quantidade = possui / preco;
    return quantidade;
}
console.log("07)Da pra comprar:", custoCartao(50,4), "cartões");

function dividirPremio(valor, quantidadeP){
    var valorDividido = valor / quantidadeP;
    return valorDividido.toFixed(2);
}
console.log("08)Cada um receberia:", dividirPremio(1000, 5)+ "R$");

function precoFinal(precoProduto, desconto){
    var valorDesconto = precoProduto * (desconto / 100);
    var total = precoProduto - valorDesconto;
    return total; 
}
console.log("09)O valor após o desconto é de:", precoFinal(10, 20));

function contaRestaurante(prato1, prato2, prato3, prato4, prato5){
    var valorTot = (prato1+ prato2+ prato3+ prato4+ prato5) * 1.1;
    return  valorTot.toFixed(2);
}
console.log("10)O valor após a gorjeta é de:", contaRestaurante(5,5,5,5,5));

function tintaNecessaria(tamanho){
    var tinta = (tamanho/6).toFixed(2);
    return tinta;
}
console.log("11)Para pintar essa parede, precisara de:", tintaNecessaria(18), "litros de tinta");

function quantasRef(kilos){
    var quantas = kilos / 0.25;
    return quantas;
}
console.log("12)A quantidade de refeições é de:", quantasRef(2));

function impostoProduto(valorProd){
    var valorFinal = (valorProd * 1.18).toFixed(2);
    return valorFinal;
}
console.log("13)O valor após o imposto é de:", impostoProduto(10));

function mediaGraus(dia1, dia2, dia3, dia4, dia5, dia6, dia7){
    var media = ((dia1 + dia2 + dia3 + dia4 + dia5 + dia6 + dia7)/7).toFixed(1);
    return media;
}
console.log("14)A media de temperatura durante a semana é de:", mediaGraus(24, 26, 30, 25, 16, 12, 20));

function assinatura(preco){
    var total = (preco*12).toFixed(2);
    return total;
}
console.log("15)Com o preço de R$30 por mês, o preço anual fica:R$"+ assinatura(30));

function pacotesPipoca(qntdPessoas){
    var resultado = (qntdPessoas/4).toFixed(0);
    return resultado;
}
console.log("16)Serão necessárias:", pacotesPipoca(20),"pacotes de pipoca.")
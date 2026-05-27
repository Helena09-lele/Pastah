const desconto = function(preco, percentual) {
    return preco - (preco * percentual / 100);
}
console.log("O preço com desconto é:", desconto(100, 20));
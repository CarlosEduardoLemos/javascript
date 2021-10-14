function comprar(){
    let produto = (window.prompt('Qual produto você está comprando? '))
    let preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    let dinheiro = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}? `))

    let som = dinheiro - preco
    window.alert(`Você comprou ${produto} que custou ${preco}. Deu ${dinheiro} em dinheiro e vai receber ${som} de troco. Volte sempre`)
}
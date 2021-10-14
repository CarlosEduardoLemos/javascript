function comprar(){
    let produto = (window.prompt('Qual produto você está comprando? '))
    let preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`).replace(',', '.'))
    let dinheiro = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}? `).replace(',', '.'))

    let som = dinheiro - preco

    window.alert(`Você comprou ${produto} que custou R$${preco.toFixed(2).replace('.', ',')}. Você deu R$${dinheiro.toFixed(2).replace('.', ',')} em dinheiro e vai receber R$${som.toFixed(2).replace('.', ',')} de troco. Volte sempre`)
}
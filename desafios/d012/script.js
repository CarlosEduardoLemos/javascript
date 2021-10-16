function verificar(){
    let pantigo = Number(prompt('Qual era o preço anterior do produto?').replace(',', '.'))
    let patual = Number(prompt('Qual é o preço atual do produto?').replace(',', ' .'))
    let res = document.getElementById('resultado')

    if(pantigo > patual){
        let vpercent = (pantigo - patual) * 100/pantigo
        res.innerHTML = `<h2>Analisando os valores informados...</h2>`
        res.innerHTML += `<p>O produto custava R$${(pantigo).toFixed(2).replace('.', ',')} e agora custa R$${(patual).toFixed(2).replace('.', ',')}</p>`
        res.innerHTML += `<p>Hoje o produto está mais barato</p>`
        res.innerHTML += `<p>O preço caiu R$${(pantigo - patual).toFixed(2).replace('.', ',')} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${(vpercent).toFixed(2).replace('.', ',')}% para baixo</p>`
    }else if(patual > pantigo){
        let vpercent = (patual - pantigo) * 100/patual
        res.innerHTML = `<h2>Analisando os valores informados...</h2>`
        res.innerHTML += `<p>O produto custava R$${(pantigo).toFixed(2).replace('.', ',')} e agora custa R$${(patual).toFixed(2).replace('.', ',')}</p>`
        res.innerHTML += `<p>Hoje o produto está mais caro</p>`
        res.innerHTML += `<p>O preço subiu R$${(patual - pantigo).toFixed(2).replace('.', ',')} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${(vpercent).toFixed(2).replace('.', ',')}% para cima</p>`
    }else{
        res.innerHTML = `<h2>Analisando os valores informados...</h2>`
        res.innerHTML += `<p>O valor é igual</p>`
        res.innerHTML += `<p>Não houve variação</p>`
    }
}
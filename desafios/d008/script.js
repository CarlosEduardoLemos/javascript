function desconto(){
    let prod = window.prompt('Qual o produto que está comprando?')
    let val = Number(prompt(`Qual o valor do produto ${prod}?`).replace(',', '.'))
    let desc = 10 * val / 100 //50 de 500
    let result = document.getElementById('resultado')
    result.innerHTML = `<h2>Calculando o desconto de 10% do produto ${prod} ...</h2>`
    result.innerHTML += `<p>O valor do produto ${prod} é de R$${val.toFixed(2).replace('.', ',')}.</p>`
    result.innerHTML += `<p>O valor do desconto de 10% é de R$${desc.toFixed(2).replace('.', ',')}.</p>`
    result.innerHTML += `<p>No fim, você vai pagar R$ ${(val - desc).toFixed(2).replace('.', ',')} no ${prod}</p>.`
}
let cota = Number(window.prompt('Antes de mais nada. Qual a cotação do dólar agora?').replace(',', '.'))

function conversor(){
    let cart = Number(window.prompt('Quantos R$ você tem na carteira?').replace(',', '.'))
    let result = document.getElementById('resultado')
    result.innerHTML = `Considerando a cotação atual de US$${cota.toFixed(2).replace('.', ',')}, e que você tem R$${cart.toFixed(2).replace('.', ',')}. Você comprará US$ ${(cart / cota).toFixed(2).replace('.', ',')}.`
}
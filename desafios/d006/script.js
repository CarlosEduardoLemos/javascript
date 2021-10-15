function conversor(){
    let m = Number(window.prompt('Digite a temperatura em °C (celsius)').replace(',', '.'))
    let result = document.getElementById('resultado')
    result.innerHTML = `<h2>A temperatura de ${m.toFixed(1).replace('.', ',')}°C, corresponde a ...</h2>`
    result.innerHTML += `<p>${(m + 273.15)}K (Kelvin)</p>`
    result.innerHTML += `<p>${((m * 9 / 5) + 32)}°F (fahrenheit)</p>`
}
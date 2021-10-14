function conversor(){
    let m = Number(window.prompt('Digite uma distância em metros (m)'))
    let saida = document.getElementById('resultado')
    saida.innerHTML = `<h2>A distância de ${m.toLocaleString('pt-BR')} metros, corresponde a...</h2>`
    saida.innerHTML += `<p>${(m/1000).toLocaleString('pt-BR')} quilômetros (Km)</p>`
    saida.innerHTML += `<p>${(m/100).toLocaleString('pt-BR')} hectômetros (Hm)</p>`
    saida.innerHTML += `<p>${(m/10).toLocaleString('pt-BR')} decâmetros (Dam)</p>`
    saida.innerHTML += `<p>${(m*10).toLocaleString('pt-BR')} decímetros (dm)</p>`
    saida.innerHTML += `<p>${(m*100).toLocaleString('pt-BR')} centímetros (cm)</p>`
    saida.innerHTML += `<p>${(m*1000).toLocaleString('pt-BR')} milímetros (mm)</p>`
}
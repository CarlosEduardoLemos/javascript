function reajuste(){
    let nome = prompt('Qual é o nome do funcionário?')
    let sal = Number(prompt(`Qual é o salário do funcionário ${nome}?`).replace(',', '.'))
    let reaj = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let result = document.getElementById('resultado')
    let vreaj = reaj * sal / 100
    result.innerHTML = `<h2>${nome} recebeu um aumento salarial!!</h2>`
    result.innerHTML += `<p>O salário era R$${sal.toFixed(2).replace('.', ',')}</p>`
    result.innerHTML += `<p>Com o aumento de ${reaj}%, o salário vai aumentar R$${vreaj.toFixed(2).replace('.', ',')} no próximo mês</p>`
    result.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${(vreaj + sal).toFixed(2).replace('.', ',')}</p>`
}
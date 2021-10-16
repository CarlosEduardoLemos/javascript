function nota(){
    let nome = prompt('Qual o nome do aluno?')
    let n1 = Number(prompt(`Qual a Nota 1 do Aluno ${nome}?`).replace(',', '.'))
    let n2 = Number(prompt(`Qual a Nota 2 do Aluno ${nome}?`).replace(',', '.'))
    let res = document.getElementById('resultado')

    let notafinal = (n1 + n2)/2

    if(n1 > 10 || n2 > 10){
        alert('Digite a nota correta!!')
    }else if(notafinal < 3){
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
        res.innerHTML += `<p>Com as notas ${(n1).toFixed(1).replace('.', ',')} e ${(n2).toFixed(1).replace('.', ',')}, a média é ${(notafinal).toFixed(1).replace('.', ',')}</p>`
        res.innerHTML += `<p>Aluno reprovado</p>`
    }else if(notafinal < 7){
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
        res.innerHTML += `<p>Com as notas ${(n1).toFixed(1).replace('.', ',')} e ${(n2).toFixed(1).replace('.', ',')}, a média é ${(notafinal).toFixed(1).replace('.', ',')}</p>`
        res.innerHTML += `<p>Aluno de recuperação</p>`
    }else{
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
        res.innerHTML += `<p>Com as notas ${(n1).toFixed(1).replace('.', ',')} e ${(n2).toFixed(1).replace('.', ',')}, a média é ${(notafinal).toFixed(1).replace('.', ',')}</p>`
        res.innerHTML += `<p>Aluno aprovado</p>`
    }
}
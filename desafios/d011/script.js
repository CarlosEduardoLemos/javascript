function verificar(){
    let ano = Number(prompt('Qual ano você quer verificar?'))
    let res = document.getElementById('resultado')
    res.innerHTML = `<h2>Analisando o ano de ${ano}</h2>`
    if(ano%400 == 0){
        res.innerHTML += `<p>O ano de ${ano} é bissexto</p>`
    }else if(ano%4 == 0 && ano%100 != 0){
        res.innerHTML += `<p>O ano de ${ano} é bissexto</p>`
    }else{
        res.innerHTML += `<p>O ano de ${ano} não é bissexto</p>`
    }
}

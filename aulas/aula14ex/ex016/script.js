function contar(){
    let iniciar = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(iniciar.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Verifique os dados e tente novamente')
        res.innerHTML = 'Impossível fazer a contagem'
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(iniciar.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido. Considerando Passo 1 !!')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            // Contagem Regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}
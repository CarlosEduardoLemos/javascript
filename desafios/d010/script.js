function calcular(){
    a = Number(window.prompt('Qual é o valor de a?'))
    b = Number(window.prompt('Qual é o valor de b?'))
    c = Number(window.prompt('Qual é o valor de c?'))

    let delta = Math.pow(b, 2) - 4 * a * c

    let result = document.getElementById('resultado')

    result.innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    result.innerHTML += `<p>A equação atual é <strong>${a}</strong>x<sup>2</sup> + <strong>${b}</strong>x + <strong>${c}</strong> = 0</p>`
    result.innerHTML += `<p>O valor calculado foi <strong><mark>&Delta; = ${delta}</mark></strong></p>`
}

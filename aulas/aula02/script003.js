var n1 = Number.parseInt(window.prompt('Digite um número'))
var n2 = Number.parseInt(window.prompt('Digite outro número: '))
var n3 = Number.parseFloat(window.prompt('Digite um número flutuante: '))
var n4 = Number.parseFloat(window.prompt('Digite outro número flutuante: '))
var n5 = Number(window.prompt('Digite qualquer número: '))
var n6 = Number(window.prompt('Digite qualquer número: '))
var s = n1 + n2
var s1 = n3 + n4
var s2 = n5 + n6
window.alert('A soma dos valores inteiros é ' + s.toString())  //Para transformar para string usa-setoString()
window.alert('A soma dos valores flutuantes é ' + String(s1)) //Ou usa-se String(n)
window.alert('A soma dos valores é: '+ s2)
window.alert(`O resultado da soma entre os números ${n5} e ${n6} e de ${s2}`)

// O + para String é para concatenar
// O + para números é para somar
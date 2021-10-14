let num = [9, 1, 7, 0, 8]
console.log(num)
num.push(2)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('Valor não encontrado!!')
}else{
    console.log(`O valor 8 está na posição ${pos + 1}. Como a linguagem sempre começa a contar a partir do 0, logo a posição é ${pos}`)
}

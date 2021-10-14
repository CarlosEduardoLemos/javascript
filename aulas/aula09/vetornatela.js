let valores = [3, 5, 4, 1, 9, 8]
valores.sort()

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos + 1} tem o valor ${valores[pos]}`)   
}
*/

for (const pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let amigo = {nome: 'José', sexo:'M', peso: 85.4, engordar(p){
    console.log('engordou')
    this.peso += p
}}
console.log(amigo)
console.log(amigo.nome)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
var idade = 67
if(idade < 16){
    console.log('Não vota')
} else{ //Outra maneira de se escrever abaixo
    if(idade < 18 || idade > 65){
        console.log('Voto opcional')
    }else{
        console.log('Voto obrigatório')
    }
}


/*
else if (idade < 18  || idade > 65){
    console.log('Voto opcional')
}
*/
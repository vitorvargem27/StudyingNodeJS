function sum(x){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(x + 20);
        }, 3000);
    })
}

//o .then signifca que está retornando o resolve da Promise e .catch significa em caso de erro
sum(500).then((resultado) => {
    //o resultado significa apenas a soma de cima da função resolve da função sum
    console.log(resultado)
})
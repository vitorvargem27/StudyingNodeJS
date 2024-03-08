function sum(x){
    return new Promise((resolve, reject) =>{
        //fazendo uma condição de rejeição no caso de dar errado
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Tá tudo errado')
        }

        setTimeout(() =>{
            resolve(x + 20);
        }, 3000); 
    })
}

//declarando que é uma função assincrona
async function main(){
    // usando o try & catch para usar o método Async/Await
    try{
        const result = await sum('t')
        console.log(`Deu certo com Async/Await ${result}`)
    } catch(error) {
        console.log('Gerou um erro ' + error)
    }
}

main()

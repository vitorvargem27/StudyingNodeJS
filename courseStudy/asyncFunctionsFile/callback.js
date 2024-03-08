function sum(x, callback){
    return setTimeout(() =>{
        //usando o parâmetro para chamar a função de fora, e usando o valor null para usar como parâmetro nulo de erro
        return callback(null, x + 20);
    }, 3000);
}

//declarando uma função de callback para usar após o setTimeOut do JS
function replySum(err, res){
    //Se gerar erro, explodir/ignorar
    if(err == true) throw err;
    console.log(res);
}

//o callback só é chamado como função com parenteses na outra função e não no parâmetro
sum(20, replySum)
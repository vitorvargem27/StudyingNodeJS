const importFs = require('fs')
const readLine = require('readline')
const userReadLine = readLine.Interface({
    enterUser: process.stdin,
    outUser : process.stdout
})

importFs.readFile('dataBase.json', 'utf8', (err, data) => {
    if(err){
        console.log('Erro de conexão com database!');
        return;
    }

    //Puxando e imprimindo dados do arquivo json
    const dadosJson = JSON.parse(data);
    console.log(`Dados do database : ${dadosJson}`)

    //Interação com usuário para adicionar no banco de dados json
    userReadLine.question('Qual seu nome?', (name) => {
        console.log(`Bem vindo ${name}!! Te adicionaremos no nosso banco de dados!`);
        userReadLine.close()
    }) 

    //--------------------------------------------------------------------//
    //Aqui ficará a interação com o banco de dados//
})
const {writeFile} = require('fs');

function fileCreate(name, content){
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if (err) reject(err);
            resolve()
        })
    })
}

fileCreate('promiseFile.txt', 'Criando arquivos com promises e write File').then(() => {
    console.log('A criação deu certo!!')
}).catch((err) => {
    console.log(`Deu erro...! ${err}`)
})
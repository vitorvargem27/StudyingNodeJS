const {promisify} = require('util')

const writeFile = promisify(require('fs').writeFile);
const content = 'Criando um arquivo com write File'

//não precisa de callback por ser promise
writeFile('utilFile.txt', content).then(() => {
    console.log('Deu certo!')
}).catch((err) => {
    console.log(`Deu erro...! ERRO ${err}`)
})
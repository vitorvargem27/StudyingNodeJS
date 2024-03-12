//Entre {} significa que ele está buscando um instância dentro do módulo fs
const {writeFile} = require('fs') 

writeFile('file.text', 'Criando arquivo de texto com write file', (err) => {
    if (err) throw err;

    console.log('Arquivo feito!')
})
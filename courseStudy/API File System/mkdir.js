const fs = require('fs');
const assets = ['css', 'html', 'images', 'fonts', 'lib']

//função para criar pastas no projeto automaticamente
function make(dir) {

    dir.forEach((item) => {
        //mkdir faz criação de diretório
        fs.mkdir(`projeto/asset/${item}`, { recursive: true }, (err) => {
            if (err) throw err

            console.log('Arquivo criado com sucesso!')
        })
    });
}

make(assets)
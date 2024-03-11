//__filename puxa o nome do arquivo
console.log(`Nome do arquivo : `, __filename)

//__dirname puxa o diretório do arquivo
console.log(`Diretório : `, __dirname)

//process.argv traz um array de acontecimentos ao abrir o arquivo
console.log(`Parâmetros de execução : `, process.argv)

//Acessar tudo referente à máquina
console.log(`Tudo da máquina : `, process.env)

//Diretório invocado do arquivo
console.log(`CWD : `, process.cwd())

//.plataform puxa o sistema operacional que o sistema está sendo executador
console.log(`Ambiente do Servidor : `, process.platform)

switch(process.argv[2]){
    case '-a' :
        console.log('Executando -a')
        break

    case 'install' :
        console.log('Instalando')
        break

    case '-q' :
        console.log('Encerrando')
        process.exit()
        break

    default :
        console.log('Comando inválido')
        break
}

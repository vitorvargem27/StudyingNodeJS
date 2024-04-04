//Mensagens do console
console.log('Mensagem')
console.error(new Error('Gerou um erro'))
console.warn('Cuidado!')

//Exemplo de gerar tabelas no terminal
const nomes = ['Vitor', 'Gustavo', 'Eliana', 'Matheus', 'Jordana']
console.table(nomes)

const data = {
    name : 'Vitor',
    age : 22,
    gender : 'M'
}

console.table(data)

//o console.count serve para contar quantas vezes este console igual é feito
console.count('process')
console.count('process')
console.count('process')

//O comando countReset zera o count
console.countReset('process')


//as variações do console com time, funcionam como um contador
console.time('counter')
for (let i = 0; i < 10 ; i++){
    console.log('-')
}
console.timeEnd('counter')

//o Assert serve como condições para algo e gera mensagens à partir disso
console.assert(true, 'Faça algo')
console.assert(false, 'Aconteceu o problema %s', 'Erro fatal')

//Limpa o terminal inteiro
// -> console.clear()


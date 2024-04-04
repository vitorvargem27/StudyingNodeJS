const {EventEmitter} = require('events')

//Criando e extendendo um evento com orientação a objetos
class Event extends EventEmitter {}

//Declarando o nome do novo evento
const myEvent = new Event()

//Metodo on cria um evento com os parâmetros que serão chamados
myEvent.on('Security', (x,y) => {
    console.log(`Executando o evento : ${x} ${y}`)
})

//O método emit emite o evento com (Evento, Usuario que fez o evento, Ação feita) como parâmetros
myEvent.emit('Security', 'UserAdmin', 'Changed Salary')


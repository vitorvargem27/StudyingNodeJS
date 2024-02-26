const http = require("http")
const host = "127.0.0.1"
const port = 3000

//Criando o server à partir da porta e host puxados
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World! \n My first script')
})

//Rodando o servidor gerando uma mensagem no terminal cmder
server.listen(port, host, () =>{
    console.log(`Server running at http:// ${host} : ${port}`)
})
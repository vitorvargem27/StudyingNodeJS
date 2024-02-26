const http = require("http");
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((requisition, response) =>{
    console.log(requisition.method);
    console.log(requisition.url)
    responseponse.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Olá mundo!!')
})

server.listen(port, host, () =>{
    console.log('HELLO WORLD')
})
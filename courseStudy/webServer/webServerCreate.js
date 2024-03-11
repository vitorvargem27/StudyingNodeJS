const httpServer = require('http');
const hostIP = "127.0.0.1";
const port = 3000;
const url = `http://${hostIP}:${port}/`;

const server = httpServer.createServer((req, res) => {
    res.statusCode == 200; //Server subiu com Sucesso
    res.setHeader('Content-Type', 'text/html');
    //O end define o que aparecerá no html
    res.end(`<h2>Teste</h2>`);
})

server.listen(port, hostIP, () =>{
    console.log(`O servidor está rodando no endereço ${url}`);
})

const open = (process.platform == 'darwin'? 'open' :
process.platform == 'win32'?'start' : 'xdg-open');
require('child_process').exec(open + ` ${url}`);

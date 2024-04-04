const http = require('http')
const {readFile} = require('fs')

const host = '127.0.0.1'
const port = 3000
const url = `http://${host}:${port}`

let content = ''

readFile('index.html', (err, data) => {
    if(err) throw err;
    content = data
})

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('COntent-Type', 'text/html')
    res.end(content)
})

//Subir o servidor com a porta e host
server.listen(port, host, () => {
    console.log(`Servidor ${url}`)
})

//O ? significa ação que ele vai fazer ; o : significa ou//
const start = (process.platform == 'darwin'?'open' : process.platform == 'win32'?'start': 'xdg-open')

//O exec
require('child_process').exec(start + ' ' + url)

const fs = require('fs')

//metodo não bloqueante
fs.readFile('text.txt', (err, data) => {
    if(err) throw err

    console.log(data.toString())
})

//metodo bloqueante
const fileText = fs.readFileSync("text.txt")
console.log(`Texto : ${fileText}`)
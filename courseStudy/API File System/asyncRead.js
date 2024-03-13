const fs = require('fs').promises

//usar async e await evita o uso de callbacks e não encadeia
//a assync function declara que receberá uma promise na função
async function read() {
    //o await espera terminar a ação ser concluída
    const data = await fs.readFile('text.txt')
    return new Buffer.from(data)
}

try{
    read().then(data => console.log(data.toString()))
} catch(error){
    console.log(error)
}

const fs = require('fs');

//Tempo antes de er o arquivo
console.log("Tempo antes da execução...")
console.log((process.hrtime()[0]/[60]).toFixed(5));

//Tempo depois de ler o arquivo
const data = fs.readFile("C:\\Users\\vitor.vargem\\Desktop\\estudosNodeJS\\StudyingNodeJS\\courseStudy\\file.txt", (err, data) => {
    if(err) throw err;
    console.log(err)
});

console.log("Tempo executando o script após o arquivo ser lido...");
console.log((process.hrtime()[0]/[60]).toFixed(5));


const fs = require("fs");

console.log((process.hrtime()[0]/[60]).toFixed(5));
console.log("Antes da execução...")

const data = fs.readFileSync("C:\\Users\\vitor.vargem\\Desktop\\estudosNodeJS\\StudyingNodeJS\\courseStudy\\file.txt");
console.log("Executando o script após o arquivo...");

console.log((process.hrtime()[0]/[60]).toFixed(5));

//Transformando o buffer do arquivo em texto
const transformBuffer = Buffer.from(data, 'utf8')
const bufferText = transformBuffer.toString('utf-8')
console.log(bufferText)

console.log(data)
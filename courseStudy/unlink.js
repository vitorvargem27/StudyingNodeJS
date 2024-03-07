const fs = require("fs");

//Metódo não bloqueante precisa de um callback
fs.readFileSync("C:\\Users\\vitor.vargem\\Desktop\\estudosNodeJS\\StudyingNodeJS\\courseStudy\\file.txt", (err, data)=>{
    if(err) throw err;
    console.log(data);
    
    const unlinkData = fs.unlinkSync("C:\\Users\\vitor.vargem\\Desktop\\estudosNodeJS\\StudyingNodeJS\\courseStudy\\file.txt", (unlinkErr) => {
        if(unlinkErr) throw unlinkErr;
        console.log("Arquivo excluído com sucesso")
    });
});

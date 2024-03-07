const crypto = require("crypto")
const cryptoTime = Date.now()

function hashTimeLog(){
    crypto.pbkdf2("a", "b", 10000, 512, "sha512", () => {
        console.log(`Hash : ${Date.now() - cryptoTime}`)
        //for(x = cryptoTime; x >= 0; x-- ){
            //console.log(x)
        //}
    })
}

hashTimeLog()
hashTimeLog()
hashTimeLog()
hashTimeLog()
hashTimeLog()
hashTimeLog()

const expressRequire = require('express')
const app = express();
const port = 3000;

app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send('Error 500!');
})

//Simulando um erro à partir da requisição get
app.get('/error', (req, res, next) => {
    const error = new Error("Acontenceu um erro!");
    next(error);
})

app.listen(port, () => {
    console.log(`O Server está rodando na porta ${port}`)
})

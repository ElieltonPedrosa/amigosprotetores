/* importar o express e o app.listen */
const express = require('express')
const app = express()
const cors = require('cors');
const contatoRouter = require('./src/routes/contato.routes.js');
const appRouter = require('./src/routes/app.routes.js');

app.use(express.json());
app.use(cors())

app.use('/',appRouter)
app.use('/',contatoRouter)

app.listen(3000,() =>{
    console.log('servidor rodando na porta 3000🚀');
    
})
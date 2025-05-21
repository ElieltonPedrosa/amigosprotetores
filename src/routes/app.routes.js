const express = require('express')
const path = require('node:path')

const appRouter = express.Router()

const buildPath = path.join(__dirname, '../../dist') // Caminho da pasta que contem os arquivos estaticos
appRouter.use(express.static(buildPath)) //serve arquivos estaticos da aplicação
 
appRouter.get('/home', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))//Rota que o usuario acessa e o servidor envia o arquivo publico
})

module.exports = appRouter
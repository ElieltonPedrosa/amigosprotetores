const express = require('express')

const ContatoController = require('../controller/contatoController.js')

const contatoRouter = express.Router()

const contatoController = new ContatoController();

contatoRouter.get('/contatos', contatoController.listAll)

contatoRouter.post('/contatos', contatoController.create)


module.exports = contatoRouter
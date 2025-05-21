
const db = require('../database/db.js')

class contatoController {
    async create(req, res) {

        const { nome, email, assunto, mensagem } = req.body;


        await db('contatos').insert({
            nome, email, assunto, mensagem
        })

        return res.status(200).json('contato cadastrado com sucesso')
    }

    async listAll(req, res) {
        const contatos = await db('contatos').select('*')
        return res.status(200).json(contatos)
    }
}
module.exports = contatoController
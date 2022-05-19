const Produto = require('../models/produto')

module.exports = app => {
    app.get('/produtos', (req, res) => {
        Produto.lista(res);
    })

    app.get('/produtos/:id', (req, res) => {
        const id = parseInt(req.params.id);        
        Produto.buscaPorId(id, res);
    });

    app.post('/produtos', (req, res) => {
        const produto = req.body

        Produto.adiciona(produto, res)
    })

    app.patch('/produtos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body 

        Produto.altera(id, valores, res)
    })

    app.delete('/produtos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Produto.deleta(id, res)
    })
}
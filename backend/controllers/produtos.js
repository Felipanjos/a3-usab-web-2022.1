const Produto = require('../models/produto')

module.exports = app => {
    app.post('/produtos/delete-:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body 

        Produto.deleta(id, valores, res)
        res.redirect(302, 'http://localhost:5500/frontend/index.html')
    })
    
    app.post('/produtos/buscaPorId/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Produto.buscaPorId(id, res)
    })

    app.get('/lista-produtos', (req, res) => {
        Produto.lista(res);
    })
    
    app.post('/produtos/addproduto', (req, res) => {
        const produto = req.body

        Produto.adiciona(produto, res)
        res.redirect(302, 'http://localhost:5500/frontend/index.html')
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